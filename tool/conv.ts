import * as fs from 'fs';
import * as path from 'path';
import marked from 'marked';
import imageSize from 'image-size';
import { minify } from 'html-minifier-terser';
import { performance } from 'perf_hooks';
import * as base from './base-conv';

const docsDirName = 'docs';
const mdDirName = 'md';
const templateDirName = 'template';
const mdTemplateDirName = path.join('md', 'template');

convMain();

export function convMain() {
    console.log('run conv.ts');

    const time3 = performance.now();

    const isDeploy = process.argv.some((v) => v === '--deploy');
    const isFullBuild = isDeploy || process.argv.some((v) => v === '--fullbuild');
    const curDir = process.cwd();

    // docsを全削除
    if (isFullBuild) {
        try {
            // node v14
            fs.rmSync(path.join(curDir, 'docs'), { recursive: true, force: true });
        } catch (e) {
            //fs.rmdirSync(path.join(curDir, 'docs'), { recursive: true });
        }
    }

    const mdDir = path.join(curDir, mdDirName);
    const mdPaths = base.lsrSync(mdDir);

    // テンプレートhtml, js, css
    const tmplPath = path.join(curDir, templateDirName, 'template.html');
    const tmplHtmlData = Buffer.from(fs.readFileSync(tmplPath)).toString();
    const tmplJsPath = path.join(curDir, templateDirName, 'template.js');
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

    const htmlAry: { name: string; mdPath: string; data: string; }[] = [];
    const imgAry: { path: string; width: number; height: number; }[] = [];

    const dlDirPath = path.join(curDir, 'md', 'dl');

    // mdディレクトリ読み込み
    mdPaths.forEach(mdPath => {
        if (mdPath.match(/.md$/)) {
            if (mdPath.match(/tp-.*.md$/)) {
                return;
            }
            // markdown -> html 変換
            const mdData = fs.readFileSync(mdPath);
            let htmlData = marked(mdData.toString());

            const mdName = path.parse(mdPath).name;
            htmlAry.push({
                name: mdName,
                mdPath: mdPath,
                data: htmlData
            });

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
            if (isFullBuild || base.isUpdateFile(inPath, outPath)) {
                // ファイルコピー(md -> docs)
                fs.mkdirSync(path.dirname(outPath), { recursive: true });
                fs.copyFileSync(inPath, outPath);
                console.log('copy file :', outPath);
            }
        }
    });

    const time2 = performance.now();

    // htmlを生成
    htmlAry.forEach(htmlObj => {
        // if (htmlObj.name != 'index') return;
        const time = performance.now();

        // 全htmlをまとめたhtmlを生成（content部分のみ）
        const fileName = htmlObj.name;
        let htmlTitle = '';
        let htmlDataSum = '';
        htmlAry.forEach(obj => {
            const name = obj.name;
            const isSelfPage = name == fileName;
            const displayStyle = isSelfPage ? 'block' : 'none';

            let htmlData = obj.data;
            if (isSelfPage) { // 最初に表示するページ
                htmlTitle = base.getTitle(htmlDataSum);
            } else {
                // 非表示のページはimgタグsrcをsrc-tにして画像を読まないようにする
                // 表示時にjs側でsrcに戻す
                htmlData = htmlData.replace(/src=\"(.*?)\"/g,
                    function (match, p1, offset, string) {
                        // <img src="xxx.png">を<img src-t="xxx.png">にする
                        // imgタグにwidth,heightを追加する
                        const img = imgAry.find(obj => path.join(mdDir, p1).indexOf(obj.path) != -1);
                        const width = img ? ' width="' + img.width + '" ' : '';
                        const height = img ? ' height="' + img.height + '" ' : '';
                        return 'src-t="' + p1 + '"' + width + height;
                    });
            }
            htmlDataSum += '<div style="display:' + displayStyle + '" id="' + name + '" class="pagediv">\n';
            htmlDataSum += htmlData;
            htmlDataSum += '\n</div>\n';
        });

        // テンプレートhtmlに、markdownのhtmlを埋め込み
        let outData = tmplHtmlData.replace(/%content/g, htmlDataSum)
            .replace(/%title/g, htmlTitle)
            .replace(/%sidebar/g, sidebarHtmlData)
            .replace(/%nav_pc/g, navPcHtmlData)
            .replace(/%nav_mobile/g, navMobileHtmlData)
            .replace(/"%script"/g, tmplJsData)
            .replace(/\/\*%css\*\//g, tmplCssData)
            .replace(/href=\"(\.\/)*([a-zA-Z0-9-_]*)(.md|.html)*(#[a-zA-Z0-9-_]*)*\"/g,
                function (match, p1, p2, p3, p4, offset, string) { // <a href="./xxx.html">を<a href="#!xxx">にする
                    if (p2 == '') p2 = 'index';
                    if (p4 == null) p4 = '';
                    return 'href="' + p2 + p4 + '"';
                })
            .replace(/%footer/g, footerHtmlData);

        // html, js, css のminify
        outData = minify(outData, {
            continueOnParseError: true,
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
            processConditionalComments: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeTagWhitespace: true
        });

        // htmlをgzip圧縮
        const outDataBuf = isDeploy ? base.zopfliSync(outData) : base.gzipSync(outData);

        const htmlPath = base.toHtmlPath(htmlObj.mdPath);
        fs.mkdirSync(path.dirname(htmlPath), { recursive: true });
        fs.writeFileSync(htmlPath, outDataBuf);

        console.log('write file :', performance.now() - time, htmlPath);
    });

    console.log('write time :', performance.now() - time2);
    console.log('  all time :', performance.now() - time3);
}

