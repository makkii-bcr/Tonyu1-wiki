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

function convMain(): void {
    console.log('run conv.ts');

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

    const tmplPath = path.join(curDir, templateDirName, 'template.html');
    const tmplHtmlData = fs.readFileSync(tmplPath);

    // 共通部品md
    const sidebarPath = path.join(mdTemplateDirName, 'tp-sidebar.md');
    const sidebarHtmlData = base.convMdToHtml(sidebarPath);
    const navPcPath = path.join(mdTemplateDirName, 'tp-nav-pc.md');
    const navPcHtmlData = base.convMdToHtml(navPcPath);
    const navMobilePath = path.join(mdTemplateDirName, 'tp-nav-mobile.md');
    const navMobileHtmlData = base.convMdToHtml(navMobilePath);
    const footerPath = path.join(mdTemplateDirName, 'tp-footer.md');
    const footerHtmlData = base.convMdToHtml(footerPath);

    const dlDirPath = path.join(curDir, 'md', 'dl');

    mdPaths.forEach(mdPath => {
        if (mdPath.match(/.md$/)) {
            if (mdPath.match(/tp-.*.md$/)) {
                return;
            }
            let htmlPath = base.toHtmlPath(mdPath).replace(/index.html$/g, 'index0.html');
            if (base.isUpdateFile(mdPath, htmlPath)) {
                // markdown -> html 変換
                const mdData = fs.readFileSync(mdPath);
                const htmlData = marked(mdData.toString());

                // テンプレートhtmlに、markdownのhtmlを埋め込み
                const tmplData = Buffer.from(tmplHtmlData).toString();
                const outData = tmplData.replace('%content', htmlData)
                    .replace(/%random/g, Math.floor(Math.random() * 1000000000).toString())
                    .replace(/%title/g, base.getTitle(htmlData))
                    .replace(/%sidebar/g, sidebarHtmlData)
                    .replace(/%nav_pc/g, navPcHtmlData)
                    .replace(/%nav_mobile/g, navMobileHtmlData)
                    .replace(/src=\"(.*?)\"/g,
                        function (match, p1, offset, string) {
                            // imgタグにwidth,heightを追加する
                            const imgSize = imageSize(path.join(path.parse(mdPath).dir, p1));
                            const width = imgSize ? 'width="' + imgSize.width + '"' : '';
                            const height = imgSize ? 'height="' + imgSize.height + '"' : '';
                            return 'src="' + p1 + '" ' + width + ' ' + height;
                        })
                    .replace(/href="\.\/"/g, 'href="./index0.html"')
                    .replace(/href=\"(\.\/)*([a-zA-Z0-9-_]*)(.md|.html)*(#[a-zA-Z0-9-_]*)*\"/g,
                        'href=\"$1$2.html$4"')
                    .replace(/%footer/g, footerHtmlData);

                fs.mkdirSync(path.dirname(htmlPath), { recursive: true });
                fs.writeFileSync(htmlPath, outData);

                console.log('convert md:', htmlPath);
            }
        } else {
            // dlフォルダはデプロイ時のみコピー
            if (!isDeploy && mdPath.indexOf(dlDirPath) != -1) {
                return;
            }
            // ファイルコピー(md -> docs)
            const relativePath = mdPath.replace(mdDir, '');
            const inPath = path.join(mdDir, relativePath);
            const outPath = path.join(curDir, docsDirName, relativePath);
            if (base.isUpdateFile(inPath, outPath)) {
                fs.mkdirSync(path.dirname(outPath), { recursive: true });
                fs.copyFileSync(inPath, outPath);
                console.log('copy file :', outPath);
            }
        }
    });

    const outPath = path.join(curDir, docsDirName, 'css', 'style.css');
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.copyFileSync(
        path.join(curDir, templateDirName, 'style.css'),
        outPath
    );
}

