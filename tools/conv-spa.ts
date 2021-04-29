import * as fs from 'fs';
import * as path from 'path';
// import marked from 'marked';
import marked = require('marked');
import imageSize from 'image-size';

const docsDirName = 'docs';
const mdsDirName = 'mds';
const templatesDirName = 'templates';

convMain();

function convMain(): void {
    console.log('run conv-spa.ts');

    const isDeploy = process.argv.some((v) => v === '--deploy');
    const curDir = process.cwd();

    // docsを全削除
    // fs.rmSync(path.join(curDir, 'docs'), { recursive: true, force: true });

    const mdDir = path.join(curDir, mdsDirName);
    const mdPaths = lsrSync(mdDir);

    const tmplPath = path.join(curDir, templatesDirName, 'template-spa.html');
    const tmplHtmlData = Buffer.from(fs.readFileSync(tmplPath)).toString();
    const tmplJsPath = path.join(curDir, templatesDirName, 'template-spa.js');
    const tmplJsData = Buffer.from(fs.readFileSync(tmplJsPath)).toString();
    const tmplCssPath = path.join(curDir, templatesDirName, 'style.css');
    const tmplCssData = Buffer.from(fs.readFileSync(tmplCssPath)).toString();

    // 共通部品md
    const sidebarPath = path.join(mdDir, 'tp-sidebar.md');
    const sidebarHtmlData = convMdToHtml(sidebarPath);
    const navPcPath = path.join(mdDir, 'tp-nav-pc.md');
    const navPcHtmlData = convMdToHtml(navPcPath);
    const navMobilePath = path.join(mdDir, 'tp-nav-mobile.md');
    const navMobileHtmlData = convMdToHtml(navMobilePath);
    const footerPath = path.join(mdDir, 'tp-footer.md');
    const footerHtmlData = convMdToHtml(footerPath);

    const imgAry: { path: string; width: number; height: number; }[] = [];

    let htmlDataSum = '';
    const dlDirPath = path.join(curDir, 'mds', 'dl');

    mdPaths.forEach(mdPath => {
        if (mdPath.match(/.md$/)) {
            if (mdPath.match(/tp-.*.md$/)) {
                return;
            }
            // markdown -> html 変換
            const mdData = fs.readFileSync(mdPath);
            let htmlData = marked(mdData.toString());

            const mdName = path.parse(mdPath).name;
            const displayStyle = mdName == 'a-loading' ? 'block' : 'none';

            htmlDataSum += '<div style="display:' + displayStyle + '" id="' + mdName + '" class="pagediv">\n';
            htmlDataSum += htmlData;
            htmlDataSum += '\n</div>\n';

            console.log('convert md:', mdPath);
        } else {
            // dlフォルダはデプロイ時のみコピー
            if (!isDeploy && mdPath.indexOf(dlDirPath) != -1) {
                return;
            }
            if (path.parse(mdPath).ext == '.png') {
                const imgSize = imageSize(mdPath);
                imgAry.push({
                    path: mdPath,
                    width: imgSize.width || 0,
                    height: imgSize.height || 0
                });
                // console.log(path.parse(mdPath).base, imgSize.width, imgSize.height);
            }

            // ファイルコピー(mds -> docs)
            const relativePath = mdPath.replace(mdDir, '');
            const outPath = path.join(curDir, docsDirName, relativePath);
            fs.mkdirSync(path.dirname(outPath), { recursive: true });
            fs.copyFileSync(
                path.join(mdDir, relativePath),
                outPath
            );
            console.log('copy file :', outPath);
        }
    });


    // テンプレートhtmlに、markdownのhtmlを埋め込み
    const outData = tmplHtmlData.replace(/%content/g, htmlDataSum)
        .replace(/%title/g, getTitle(htmlDataSum))
        .replace(/%sidebar/g, sidebarHtmlData)
        .replace(/%nav_pc/g, navPcHtmlData)
        .replace(/%nav_mobile/g, navMobileHtmlData)
        .replace(/"%script"/g, tmplJsData)
        .replace(/\/\*%css\*\//g, tmplCssData)
        .replace(/src=\"(.*?)\"/g,
            function (match, p1, offset, string) {
                // <img src="xxx.png">を<img src-t="xxx.png">にする
                // imgタグにwidth,heightを追加する
                const img = imgAry.find(obj => path.join(mdDir, p1).indexOf(obj.path)!=-1);
                const width = img ? ' width="'+img.width+'" ' : '';
                const height = img ? ' height="'+img.height+'" ' : '';
                return 'src-t="' + p1 + '"' + width + height;
            })
        .replace(/href=\"(\.\/)*([a-zA-Z0-9-_]*)(.html)*(#[a-zA-Z0-9-_]*)*\"/g,
            function (match, p1, p2, p3, p4, offset, string) { // <a href="./xxx.html">を<a href="#!xxx">にする
                if (p2 == 'index0') return match; // Normal版ページへ遷移できるように普通のリンクにしておく
                //console.log(arguments.length, match, p1, p2, p3, offset);
                if (p2 == '') p2 = 'index';
                if (p4 == null) p4 = '';
                return 'href="#!' + p2 + p4 + '" onclick="showPage(\'' + p2 + '\');"';
            })
        .replace(/%footer/g, footerHtmlData);

    const htmlPath = toHtmlPath('index.html');
    fs.mkdirSync(path.dirname(htmlPath), { recursive: true });
    fs.writeFileSync(htmlPath, outData);
}

/**
 * mdファイルを読み込んで、変換、HTMLデータを返す
 * @param htmlPath 
 * @returns htmlのデータ
 */
function convMdToHtml(htmlPath: string): string {
    const mdData = fs.readFileSync(htmlPath);
    const htmlData = marked(mdData.toString());
    return htmlData;
}

/**
 * mdファイルパスをhtmlファイルパスにする
 * @param mdDir 
 * @param mdPath 
 * @returns 
 */
function toHtmlPath(mdPath: string): string {
    const relativePath = path.parse(mdPath).base
    const tempPath = path.join(process.cwd(), 'docs', relativePath);
    const htmlPath = tempPath.replace(/.md$/, '.html');
    return htmlPath;
}

/**
 * ファイルの一覧を返す（サブフォルダ内のファイル含む）
 * @param dir 
 * @returns ファイルパス配列（絶対パス）
 */
function lsrSync(dir: string): string[] {
    const retAry: string[] = [];
    const pathList = fs.readdirSync(dir);
    pathList.map(p => path.join(dir, p))
        .forEach(p => {
            if (fs.statSync(p).isDirectory()) {
                lsrSync(p).forEach(pp => {
                    retAry.push(pp);
                });
            } else {
                retAry.push(p);
            }
        });
    return retAry;
}

/**
 * <head><title>に入れる文字列を取得する（<h1>～<h3>の文字列を取得）
 * @param htmlData 
 * @returns 
 */
function getTitle(htmlData: string): string {
    const start = htmlData.match(/<h[1-3]\s*.*?>/);
    const end = htmlData.match(/<\/h[1-3]>/);
    let title = '';
    if (start != null && end != null) {
        const startPos = start.index! + start[0].length;
        const endPos = end.index;
        title = htmlData.substring(startPos, endPos);
    }
    return title;
}

