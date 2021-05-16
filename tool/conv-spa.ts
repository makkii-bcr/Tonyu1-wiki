import * as fs from 'fs';
import * as path from 'path';
// import marked from 'marked';
import marked = require('marked');
import imageSize from 'image-size';
import * as base from './base-conv';

const docsDirName = 'docs';
const mdDirName = 'md';
const templateDirName = 'template';
const mdTemplateDirName = path.join('md', 'template');

convMain();

export function convMain(): void {
    console.log('run conv-spa.ts');

    const isDeploy = process.argv.some((v) => v === '--deploy');
    const curDir = process.cwd();

    const mdDir = path.join(curDir, mdDirName);
    const mdPaths = base.lsrSync(mdDir);

    const tmplPath = path.join(curDir, templateDirName, 'template-spa.html');
    const tmplHtmlData = Buffer.from(fs.readFileSync(tmplPath)).toString();
    const tmplJsPath = path.join(curDir, templateDirName, 'template-spa.js');
    const tmplJsData = Buffer.from(fs.readFileSync(tmplJsPath)).toString();
    const tmplCssPath = path.join(curDir, templateDirName, 'style.css');
    const tmplCssData = Buffer.from(fs.readFileSync(tmplCssPath)).toString();

    // 共通部品md
    const sidebarPath = path.join(mdTemplateDirName, 'tp-sidebar.md');
    const sidebarHtmlData = base.convMdToHtml(sidebarPath);
    const navPcPath = path.join(mdTemplateDirName, 'tp-nav-pc.md');
    const navPcHtmlData = base.convMdToHtml(navPcPath);
    const navMobilePath = path.join(mdTemplateDirName, 'tp-nav-mobile.md');
    const navMobileHtmlData = base.convMdToHtml(navMobilePath);
    const footerPath = path.join(mdTemplateDirName, 'tp-footer.md');
    const footerHtmlData = base.convMdToHtml(footerPath);

    const imgAry: { path: string; width: number; height: number; }[] = [];

    let htmlDataSum = '';
    const dlDirPath = path.join(curDir, 'md', 'dl');

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
            // 画像のwidth,heightを取得する
            if (path.parse(mdPath).ext == '.png') {
                const imgSize = imageSize(mdPath);
                imgAry.push({
                    path: mdPath,
                    width: imgSize.width || 0,
                    height: imgSize.height || 0
                });
            }
            const relativePath = mdPath.replace(mdDir, '');
            const inPath = path.join(mdDir, relativePath);
            const outPath = path.join(curDir, docsDirName, relativePath);
            if (base.isUpdateFile(inPath, outPath)) {
                // ファイルコピー(md -> docs)
                fs.mkdirSync(path.dirname(outPath), { recursive: true });
                fs.copyFileSync(inPath, outPath);
                console.log('copy file :', outPath);
            }
        }
    });

    // テンプレートhtmlに、markdownのhtmlを埋め込み
    const outData = tmplHtmlData.replace(/%content/g, htmlDataSum)
        .replace(/%title/g, base.getTitle(htmlDataSum))
        .replace(/%sidebar/g, sidebarHtmlData)
        .replace(/%nav_pc/g, navPcHtmlData)
        .replace(/%nav_mobile/g, navMobileHtmlData)
        .replace(/"%script"/g, tmplJsData)
        .replace(/\/\*%css\*\//g, tmplCssData)
        .replace(/src=\"(.*?)\"/g,
            function (match, p1, offset, string) {
                // <img src="xxx.png">を<img src-t="xxx.png">にする
                // imgタグにwidth,heightを追加する
                const img = imgAry.find(obj => path.join(mdDir, p1).indexOf(obj.path) != -1);
                const width = img ? ' width="' + img.width + '" ' : '';
                const height = img ? ' height="' + img.height + '" ' : '';
                return 'src-t="' + p1 + '"' + width + height;
            })
        .replace(/href=\"(\.\/)*([a-zA-Z0-9-_]*)(.md|.html)*(#[a-zA-Z0-9-_]*)*\"/g,
            function (match, p1, p2, p3, p4, offset, string) { // <a href="./xxx.html">を<a href="#!xxx">にする
                if (p2 == 'index0') return match; // Normal版ページへ遷移できるように普通のリンクにしておく
                //console.log(arguments.length, match, p1, p2, p3, offset);
                if (p2 == '') p2 = 'index';
                if (p4 == null) p4 = '';
                return 'href="#!' + p2 + p4 + '" onclick="showPage(\'' + p2 + '\');"';
            })
        .replace(/%footer/g, footerHtmlData);

    const htmlPath = base.toHtmlPath('index.html');
    fs.mkdirSync(path.dirname(htmlPath), { recursive: true });
    fs.writeFileSync(htmlPath, outData);
}

