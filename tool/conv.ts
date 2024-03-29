import * as fs from "fs";
import * as path from "path";
import { marked } from "marked";
import imageSize from "image-size";
import { minify } from "html-minifier-terser";
import { performance } from "perf_hooks";
import * as base from "./base-conv";

const repoName = "Tonyu1-wiki";
const rootPubDirName = "docs";
const testPubDirName = path.join("docs", repoName);
const deployPubDirName = "docs";
const mdDirName = "md";
const templateDirName = "template";
const mdTemplateDirName = path.join("md", "template");

convMain();

function convMain() {
  console.log("run conv.ts");

  const time3 = performance.now();

  const isDeploy = process.argv.some((v) => v === "--mode=deploy"); // Github Pages公開用：ファイル複数生成、html圧縮、
  const isStaging = process.argv.some((v) => v === "--mode=staging"); // デバッグ用(本番に近い版)：ファイル複数生成、gzip圧縮
  const isHelpFile = process.argv.some((v) => v === "--mode=helpfile"); // Tonyu1同封help用
  const isClean = process.argv.some((v) => v === "--clean"); // ビルドファイル削除
  const isDevelop = !(isDeploy || isStaging || isHelpFile); // 引数無し：デバッグ用：ファイル1つ生成、gzip圧縮
  const isFullBuild = isDeploy || isStaging /*  || isHelpFile */;
  const curDir = process.cwd();
  const pubDirName = isDeploy ? deployPubDirName : testPubDirName;

  // docsを全削除
  if (isFullBuild || isClean) {
    try {
      // node v14
      fs.rmSync(path.join(curDir, "docs"), { recursive: true, force: true });
    } catch (_e) {
      //fs.rmdirSync(path.join(curDir, 'docs'), { recursive: true });
    }
  }
  if (isClean) return;

  const mdDir = path.join(curDir, mdDirName);
  const mdPaths = base.lsrSync(mdDir);

  // テンプレートhtml, js, css
  const tmplHtmlPath = path.join(
    curDir,
    templateDirName,
    isHelpFile ? "template-help.html" : "template.html",
  );
  const tmplHtmlData = Buffer.from(fs.readFileSync(tmplHtmlPath)).toString();
  const tmplJsPath = path.join(curDir, templateDirName, "template.js");
  const tmplJsData = Buffer.from(fs.readFileSync(tmplJsPath)).toString();
  const tmplCssPath = path.join(curDir, templateDirName, "style.css");
  const tmplCssData = Buffer.from(fs.readFileSync(tmplCssPath)).toString();

  // 共通部品md
  const sidebarPath = path.join(mdTemplateDirName, "tp-sidebar.md");
  let sidebarHtmlData = base.convMdToHtml(sidebarPath);
  const navPcPath = path.join(mdTemplateDirName, "tp-nav-pc.md");
  let navPcHtmlData = base.convMdToHtml(navPcPath);
  const navMobilePath = path.join(mdTemplateDirName, "tp-nav-mobile.md");
  let navMobileHtmlData = base.convMdToHtml(navMobilePath);
  const footerPath = path.join(mdTemplateDirName, "tp-footer.md");
  let footerHtmlData = base.convMdToHtml(footerPath);

  const htmlAry: { name: string; mdPath: string; data: string }[] = [];
  const imgAry: { path: string; width: number; height: number }[] = [];

  const dlDirPath = path.join(curDir, "md", "dl");

  // mdディレクトリ読み込み
  mdPaths.forEach((mdPath) => {
    if (mdPath.match(/.md$/)) {
      if (mdPath.match(/tp-.*.md$/)) {
        return;
      }
      // markdown -> html 変換
      const mdData = fs.readFileSync(mdPath);
      const htmlData = marked(mdData.toString());

      const mdName = path.parse(mdPath).name;
      htmlAry.push({
        name: mdName,
        mdPath: mdPath,
        data: htmlData,
      });

      console.log("convert md:", mdPath);
    } else {
      // dlフォルダはデプロイ時のみコピー
      if (!isDeploy && mdPath.indexOf(dlDirPath) != -1) {
        return;
      }
      // 画像のwidth,heightを取得する
      if (path.parse(mdPath).ext == ".png") {
        const imgSize = imageSize(mdPath);
        imgAry.push({
          path: mdPath,
          width: imgSize.width || 0,
          height: imgSize.height || 0,
        });
      }
      const relativePath = mdPath.replace(mdDir, "");
      const inPath = path.join(mdDir, relativePath);
      const outPath = path.join(curDir, pubDirName, relativePath);
      if (isFullBuild || base.isUpdateFile(inPath, outPath)) {
        // ファイルコピー(md -> docs)
        fs.mkdirSync(path.dirname(outPath), { recursive: true });
        fs.copyFileSync(inPath, outPath);
        console.log("copy file :", outPath);
      }
    }
  });
  if (isHelpFile) {
    // style.cssをコピー
    const outPath = path.join(curDir, pubDirName, "style.css");
    if (isFullBuild || base.isUpdateFile(tmplCssPath, outPath)) {
      fs.copyFileSync(tmplCssPath, outPath);
      console.log("copy file :", outPath);
    }
    // img/old, ver118 を削除
    const rmDirPath = [
      path.join(curDir, testPubDirName, "img", "old"),
      path.join(curDir, testPubDirName, "ver118")
    ];
    rmDirPath.forEach((_rmDirPath) => {
      try { // node v14
        fs.rmSync(_rmDirPath, { recursive: true, force: true });
        console.log("remove " + _rmDirPath);
      } catch (_e) {
        console.log("failed remove " + _rmDirPath);
      }
    });
  }

  const time2 = performance.now();

  // 作業用にhtmlAryをコピー
  let htmlAryTemp = Array.from(htmlAry);

  // htmlを生成
  htmlAry.forEach(async (htmlObj) => {
    // デバッグ時は404.htmlのみ作成
    if (isDevelop && htmlObj.name != "404") {
      return;
    }
    const time = performance.now();

    // 全htmlをまとめたhtmlを生成（content部分のみ）
    const fileName = htmlObj.name;
    let titleHtmlData = "";
    let htmlDataSum = "";
    let allPageMd = "";

    // 自分のページを最初に持ってくる（低速回線で表示したいページが先に読み込まれるようにするため）
    let delIdx = htmlAryTemp.findIndex((obj) => fileName == obj.name);
    let delData = htmlAryTemp.splice(delIdx, 1);
    htmlAryTemp.unshift(delData[0]);

    htmlAryTemp.forEach((obj) => {
      const name = obj.name;
      const isSelfPage = name == fileName;
      // ヘルプファイルの場合は、1つのhtmlに1つのhtmlのみ入れる（1対1）
      if (isHelpFile && !isSelfPage) {
        return;
      }
      const displayStyle = isSelfPage ? "block" : "none";

      let htmlData = obj.data;

      // title取得
      let title = base.getTitle(htmlData);
      htmlData = htmlData.replace(
        /\<title\>(.*)\<\/title\>/g,
        (_match, p1, _offset, _string) => {
          title = p1;
          return "";
        },
      );
      // title末尾にサイト名を付ける
      let titleAndSiteName = title;
      if (name != "index") {
        titleAndSiteName += " - Tonyu1 Wiki";
      }
      if (isSelfPage) { // 最初に表示するページ
        titleHtmlData = titleAndSiteName;
      }

      // aタグのhref末尾に.htmlを付加する
      if (isHelpFile) {
        htmlData = base.convHelpATagHrefAddHtml(htmlData);
      }

      // 非表示のページはimgタグsrcをsrc-tにして画像を読まないようにする
      // 表示時にjs側でsrcに戻す
      htmlData = htmlData.replace(
        /(\<img)(.*?)(\>)/g,
        (_pmatch, pp1, pp2, pp3, _poffset, _pstring) => {
          // imgタグにwidth,heightがあるかチェックする
          const isNotExistWH = pp2.indexOf('width=')==-1 && pp2.indexOf('height=')==-1;
          pp2 = pp2.replace(
            /src=\"(.*?)\"/g,
            (_match: string, p1: string, _offset: string, _string: string) => {
              // <img src="xxx.png">を<img src-t="xxx.png">にする
              // imgタグにwidth,heightを追加する
              const img = imgAry.find((obj) =>
                path.join(mdDir, p1).indexOf(obj.path) != -1
              );
              // imgタグにwidth,heightが無ければ追加する
              const width = isNotExistWH && img ? ' width="' + img.width + '"' : "";
              const height = isNotExistWH && img ? ' height="' + img.height + '"' : "";
              if (isSelfPage) {
                return 'src="' + p1 + '"' + width + height;
              } else {
                return 'src-t="' + p1 + '"' + width + height;
              }
            }
          );
          return pp1 + pp2 + pp3;
        }
      );

      htmlDataSum += '<div style="display:' + displayStyle + '" id="' + name +
        '" class="pagediv" title2="' + titleAndSiteName + '">\n';
      htmlDataSum += htmlData;
      htmlDataSum += "\n</div>\n";

      allPageMd += "1. [" + title + "](" + name + ")  \n";
    });
    let allPageHtmlData = marked(allPageMd);
    // 組み込み定数の文字を置き換える
    let tmplJsDataFixed = tmplJsData.replace(
      "$isDev",
      !(isDeploy || isStaging) && htmlObj.name == "404" ? "true" : "false",
    );
    if (isHelpFile) { // ヘルプファイルの場合JSを除去する
      tmplJsDataFixed = "";
      // aタグのhref末尾に.htmlを付加する
      titleHtmlData = base.convHelpATagHrefAddHtml(titleHtmlData);
      sidebarHtmlData = base.convHelpATagHrefAddHtml(sidebarHtmlData);
      navPcHtmlData = base.convHelpATagHrefAddHtml(navPcHtmlData);
      navMobileHtmlData = base.convHelpATagHrefAddHtml(navMobileHtmlData);
      footerHtmlData = base.convHelpATagHrefAddHtml(footerHtmlData);
      allPageHtmlData = base.convHelpATagHrefAddHtml(allPageHtmlData);
    }

    // テンプレートhtmlに、markdownのhtmlを埋め込み
    let outData: string | Buffer = tmplHtmlData.replace(
      /%content%/g,
      htmlDataSum,
    )
      .replace(/%title%/g, titleHtmlData)
      .replace(/%sidebar%/g, sidebarHtmlData)
      .replace(/%nav_pc%/g, navPcHtmlData)
      .replace(/%nav_mobile%/g, navMobileHtmlData)
      .replace(/"%script%"/g, tmplJsDataFixed)
      .replace(/\/\*%css%\*\//g, tmplCssData)
      .replace(/%footer%/g, footerHtmlData)
      .replace(/%allpage%/g, allPageHtmlData);

    let htmlPath = path.join(
      curDir,
      pubDirName,
      base.toHtmlPath(htmlObj.mdPath),
    );

    if (isDeploy || isHelpFile) {
      // Github Pagesは.gzファイルを置いても静的gzipとして扱ってくれないので、deploy時は.htmlを置く
      // ヘルプファイルの場合は.htmlを置く
      // html, js, css のminify
      // if (isDeploy) {
        outData = await minify(outData, {
          continueOnParseError: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
          processConditionalComments: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeTagWhitespace: true,
        });
      // }
    } else {
      // 開発時は404.htmlのみでSPAするので、404.htmlはルートに作る
      if (isDevelop && htmlObj.name == "404") {
        htmlPath = path.join(
          curDir,
          rootPubDirName,
          base.toHtmlPath(htmlObj.mdPath),
        );
      }
      // htmlをgzip圧縮
      const ret = base.compress(base.CompressMode.Gzip, htmlPath, outData);
      htmlPath = ret.filePath;
      outData = ret.output;
    }

    fs.mkdirSync(path.dirname(htmlPath), { recursive: true });
    fs.writeFileSync(htmlPath, outData);

    console.log(
      "write file :",
      (performance.now() - time).toFixed(3),
      htmlPath,
    );
  });

  console.log("write time :", (performance.now() - time2).toFixed(3));
  console.log("  all time :", (performance.now() - time3).toFixed(3));
}
