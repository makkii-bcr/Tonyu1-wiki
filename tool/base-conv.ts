import * as fs from "fs";
import * as path from "path";
import { marked } from "marked";
import * as zlib from "zlib";

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
  return path.parse(mdPath).name + ".html";
}

/**
 * ファイルの一覧を返す（サブフォルダ内のファイル含む）
 * @param dir
 * @returns ファイルパス配列（絶対パス）
 */
export function lsrSync(dir: string): string[] {
  const retAry: string[] = [];
  const pathList = fs.readdirSync(dir);
  pathList.map((p) => path.join(dir, p))
    .forEach((p) => {
      if (fs.statSync(p).isDirectory()) {
        lsrSync(p).forEach((pp) => {
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
  let title = "";
  if (start != null && end != null) {
    const startPos = start.index! + start[0].length;
    const endPos = end.index;
    title = htmlData.substring(startPos, endPos);
  }
  return title;
}

/**
 * ヘルプファイル用。aタグのhref末尾に.htmlを付加する
 * @param htmlData 
 */
export function convHelpATagHrefAddHtml(htmlData: string): string {
  htmlData = htmlData.replace(
    /(?<=.*\<a href\=\")(.*?)(?=\"\>)/g,
    (match, _offset, _string) => {
      if (
        match != "./" && match.indexOf("http") != 0 &&
        match.indexOf(".html") == -1 && match.indexOf(".htm") == -1
      ) {
        let hidx = match.indexOf("#");
        if (hidx != 0) {
          if (hidx == -1) hidx = match.length;
          match = match.slice(0, hidx) + ".html" + match.slice(hidx);
        }
      }
      // console.log(match);
      return match;
    },
  );
  return htmlData;
}

/**
 * ファイルが更新されたかどうか
 * @param srcFilePath 比較元ファイルパス
 * @param destFilePath 比較先ファイルパス
 */
export function isUpdateFile(
  srcFilePath: string,
  destFilePath: string,
): boolean {
  if (!fs.existsSync(srcFilePath) || !fs.existsSync(destFilePath)) {
    return true;
  }
  const srcTime = fs.statSync(srcFilePath).mtime.getTime();
  const destTime = fs.statSync(destFilePath).mtime.getTime();
  return srcTime > destTime;
}

export const CompressMode = {
  Gzip: "gzip",
  Brotli: "brotli",
} as const;
type CompressMode = typeof CompressMode[keyof typeof CompressMode];

/**
 * 圧縮結果とfilepathを返す
 * @param mode 圧縮タイプ
 * @param filePath 元のファイルパス
 * @param data データ
 * @returns {filePath, output}
 */
export function compress(mode: CompressMode, filePath: string, data: string): {
  filePath: string;
  output: Buffer;
} {
  let output: Buffer;
  if (mode == CompressMode.Gzip) {
    output = gzipSync(data);
    filePath += ".gz";
  } else if (mode == CompressMode.Brotli) {
    output = brotliSync(data);
    filePath += ".br";
  } else {
    output = output!;
  }
  return { filePath, output };
}

/**
 * gzip圧縮
 * @param data
 * @returns
 */
export function gzipSync(data: string): Buffer {
  const output = zlib.gzipSync(data, {
    level: 9,
  });
  return output;
}

/**
 * brotli圧縮
 * @param data
 * @returns
 */
export function brotliSync(data: string): Buffer {
  const output = zlib.brotliCompressSync(data, {});
  return output;
}
