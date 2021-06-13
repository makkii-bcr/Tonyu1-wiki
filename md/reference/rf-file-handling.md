
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - ファイルの扱いについて</title>

## ファイルの扱いについて

FileReaderオブジェクト、FileWriterオブジェクト、Array.loadメソッド、Array.saveメソッドを用いると、  
ファイルに対する読み込み、書き込み操作ができます。

セキュリティの観点から、Tonyuで扱えるファイルは、次のディレクトリにあるファイルのみです。

<b>(現在のページフォルダ)\\files\\</b>

例えば、現在開いているページが

**C:\\My Documents\\Tonyu\\test\\index.cmml**

の場合、読み書きできるファイルは、フォルダ

<b>C:\\My Documents\\Tonyu\\test\\files\\</b>

にあるファイルのみです。

### 注意

- filesフォルダの中にサブフォルダを作成することはできません。
- FileWriter,FileReaderオブジェクトでファイル名を指定する場合、ドライブ名やフォルダの区切り文字は除去されます。
- FileWriterオブジェクトは、filesフォルダが存在しない場合はこれを自動的に作成します
- ページフォルダに"files"という名前のファイル（フォルダではない）があるとファイルは扱えません

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

