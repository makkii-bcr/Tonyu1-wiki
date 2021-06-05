# Tonyu1-wiki

Tonyu System 1 の 新Wiki　（作成中）

[新Wikiページ](https://makkii-bcr.github.io/Tonyu1-wiki/)

Tonyu1 Wikiを更新しやすくするため、[旧Wiki](http://hoge1e3.sakura.ne.jp/tonyu/wiki/)から移植中です。

今後Tonyu1の最新版リリースは、この新Wikiで公開します。

## 指摘・修正など

- 指摘・情報提供などを、Issue登録や連絡などいただいた場合は、何か対応するかもしれません
- Pull requestで修正・ページ追加等していただいた場合は、取り込むかもしれません

## wiki作り方

1. mdディレクトリ内のmdファイルを編集します
   - フォーマットはGFM（GitHub Flavored Markdown）です
1. node.jsをインストールし、`npm start`を実行します
   - HTMLが生成され、ブラウザが起動してWikiページが表示されます

## 仕組み

- Wikiページは１つのhtmlで複数ページを表示する、独自のSinglePageです。
- Wikiはmdファイルが原本で、変換スクリプト(conv.ts)でhtmlを生成します。
  - htmlが原本のページもあり、その場合はそのままそのhtmlを使います。
- templete.htmlはテンプレートのhtmlで、mdファイルから変換したhtml・js・css等を埋め込んで、各々のページを生成します。
- mainブランチにpushした際、Github ActionsでWikiページに自動的に反映されるようにしています。

[![Deploy (Github Pages)](https://github.com/makkii-bcr/Tonyu1-wiki/actions/workflows/ghpages-deploy.yml/badge.svg)](https://github.com/makkii-bcr/Tonyu1-wiki/actions/workflows/ghpages-deploy.yml)
