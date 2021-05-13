import * as fs from 'fs';
import * as path from 'path';
// import marked from 'marked';
import marked = require('marked');

/**
 * mdファイルを読み込んで、変換、HTMLデータを返す
 * @param htmlPath 
 * @returns htmlのデータ
 */
export function convMdToHtml(htmlPath: string): string {
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
export function toHtmlPath(mdPath: string): string {
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
export function lsrSync(dir: string): string[] {
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
export function getTitle(htmlData: string): string {
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

/**
 * ファイルが更新されたかどうか
 * @param srcFilePath 比較元ファイルパス
 * @param destFilePath 比較先ファイルパス
 */
export function isUpdateFile(srcFilePath: string, destFilePath: string): boolean {
    let srcTime = fs.statSync(srcFilePath).mtime.getTime();
    let destTime = fs.statSync(destFilePath).mtime.getTime();
    return srcTime > destTime;
}


