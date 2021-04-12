import marked from 'marked';
import fs from 'fs';
import path from 'path';

const docsDirName = 'docs';
const mdsDirName = 'mds';
const templateDirName = 'template';

convMain();

function convMain() {
    const curDir = process.cwd();

    fs.rmSync(path.join(curDir, 'docs'), { recursive: true, force: true });

    const mdDir = path.join(curDir, mdsDirName);
    const mdPaths = lsrSync(mdDir);

    const tmplPath = path.join(curDir, templateDirName, 'template.html');
    const tmplHtmlData = fs.readFileSync(tmplPath);

    const sidebarPath = path.join(mdDir, 'sidebar.md');
    const sidebarMdData = fs.readFileSync(sidebarPath);
    const sidebarHtmlData = marked(sidebarMdData.toString());

    mdPaths.forEach(mdPath => {
        if (!mdPath.match(/.md$/)) {
            // ファイルコピー(mds -> docs)
            const relativePath = mdPath.replace(mdDir, '');
            const outPath = path.join(curDir, docsDirName, relativePath);
            fs.mkdirSync(path.dirname(outPath), { recursive: true });
            fs.copyFileSync(
                path.join(mdDir, relativePath),
                outPath
            );
        } else {
            // markdown -> html 変換
            const mdData = fs.readFileSync(mdPath);
            const htmlData = marked(mdData.toString());

            // テンプレートhtmlに、markdownのhtmlを埋め込み
            const tmplData = Buffer.from(tmplHtmlData).toString();
            const outData = tmplData.replace('%content', htmlData)
                .replace('%title', getTitle(htmlData))
                .replace('%sidebar', sidebarHtmlData);

            const htmlPath = toHtmlPath(mdDir, mdPath);
            fs.mkdirSync(path.dirname(htmlPath), { recursive: true });
            fs.writeFileSync(htmlPath, outData);

            console.log(htmlPath);
        }
    });
}

/**
 * mdファイルパスをhtmlファイルパスにする
 * @param {String} mdDir 
 * @param {String} mdPath 
 * @returns 
 */
function toHtmlPath(mdDir, mdPath) {
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
function lsrSync(dir) {
    const retAry = [];
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
function getTitle(htmlData) {
    const start = htmlData.match(/<h[1-3]\s*.*?>/);
    const end = htmlData.match(/<\/h[1-3]>/);
    let title = "";
    if (start != null && end != null) {
        const startPos = start.index + start[0].length;
        const endPos = end.index;
        title = htmlData.substring(startPos, endPos);
    }
    return title;
}

