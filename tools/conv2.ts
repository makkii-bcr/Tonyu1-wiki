import * as fs from 'fs';
import * as path from 'path';
// import marked from 'marked';
import marked = require('marked');

const docsDirName = 'docs';
const mdsDirName = 'mds';
const templatesDirName = 'templates';

convMain();

function convMain(): void {
    const isDeploy = process.argv.some((v) => v === "--deploy");
    const curDir = process.cwd();

    // docsを全削除
    fs.rmSync(path.join(curDir, 'docs'), { recursive: true, force: true });

    const mdDir = path.join(curDir, mdsDirName);
    const mdPaths = lsrSync(mdDir);

    const tmplPath = path.join(curDir, templatesDirName, 'template.html');
    const tmplHtmlData = fs.readFileSync(tmplPath);

    // 共通部品md
    const sidebarPath = path.join(mdDir, 'tp-sidebar.md');
    const sidebarHtmlData = convMdToHtml(sidebarPath);
    const navPcPath = path.join(mdDir, 'tp-nav-pc.md');
    const navPcHtmlData = convMdToHtml(navPcPath);
    const navMobilePath = path.join(mdDir, 'tp-nav-mobile.md');
    const navMobileHtmlData = convMdToHtml(navMobilePath);
    const footerPath = path.join(mdDir, 'tp-footer.md');
    const footerHtmlData = convMdToHtml(footerPath);

    const dlDirPath = path.join(curDir, 'mds', 'dl');

    mdPaths.forEach(mdPath => {
        if (mdPath.match(/.md$/)) {
            if (mdPath.match(/tp-.*.md$/)) {
                return;
            }
            // markdown -> html 変換
            const mdData = fs.readFileSync(mdPath);
            const htmlData = marked(mdData.toString());

            // テンプレートhtmlに、markdownのhtmlを埋め込み
            const tmplData = Buffer.from(tmplHtmlData).toString();
            const outData = tmplData.replace('%content', htmlData)
                .replace(/%title/g, getTitle(htmlData))
                .replace(/%sidebar/g, sidebarHtmlData)
                .replace(/%nav_pc/g, navPcHtmlData)
                .replace(/%nav_mobile/g, navMobileHtmlData)
                .replace(/%footer/g, footerHtmlData);

            const htmlPath = toHtmlPath(mdDir, mdPath);
            fs.mkdirSync(path.dirname(htmlPath), { recursive: true });
            fs.writeFileSync(htmlPath, outData);

            console.log("convert md:", htmlPath);
        } else {
            // dlフォルダはデプロイ時のみコピー
            if (!isDeploy && mdPath.indexOf(dlDirPath) != -1) {
                return;
            }
            // ファイルコピー(mds -> docs)
            const relativePath = mdPath.replace(mdDir, '');
            const outPath = path.join(curDir, docsDirName, relativePath);
            fs.mkdirSync(path.dirname(outPath), { recursive: true });
            fs.copyFileSync(
                path.join(mdDir, relativePath),
                outPath
            );
            console.log("copy file :", outPath);
        }
    });
}

/**
 * mdファイルを読み込んで、変換、HTMLデータを返す
 * @param {String} htmlPath 
 * @returns htmlのデータ
 */
function convMdToHtml(htmlPath: string): string {
    const mdData = fs.readFileSync(htmlPath);
    const htmlData = marked(mdData.toString());
    return htmlData;
}

/**
 * mdファイルパスをhtmlファイルパスにする
 * @param {String} mdDir 
 * @param {String} mdPath 
 * @returns 
 */
function toHtmlPath(mdDir: string, mdPath: string): string {
    const relativePath = mdPath.replace(mdDir, '');
    const tempPath = path.join(process.cwd(), 'docs', relativePath);
    const htmlPath = tempPath.replace(/.md$/, '.html');
    return htmlPath;
}

/**
 * ファイルの一覧を返す（サブフォルダ内のファイル含む）
 * @param {String} dir 
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
 * @param {String} htmlData
 * @returns 
 */
function getTitle(htmlData: string): string {
    const start = htmlData.match(/<h[1-3]\s*.*?>/);
    const end = htmlData.match(/<\/h[1-3]>/);
    let title = "";
    if (start != null && end != null) {
        const startPos = start.index! + start[0].length;
        const endPos = end.index;
        title = htmlData.substring(startPos, endPos);
    }
    return title;
}
