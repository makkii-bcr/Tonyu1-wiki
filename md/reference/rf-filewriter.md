
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - FileWriter</title>

## FileWriterクラス

ファイルにデータを書き出します。

※ ファイルについてはファイルの扱いについてを参照してください

### 例1

1. オブジェクトを作成し、次のようなコードを書いて実行します。
1. 現在開いているページのフォルダのなかにある filesというフォルダを開きます。
1. filesフォルダにあるtest.txtという テキストファイルを開きます

```
extends SpriteChar;
a=new FileWriter("test.txt");
a.writeLn("ファイル出力");
a.writeLn(1+1);
a.writeLn("終了");
a.close();
```

### メソッド一覧
|||
|-|-|
|[close](#filewriterclose)|ファイルの読み込みを終了します。|
|[write](#filewriterwrite)|ファイルへ１バイトを書き出します。|
|[writeStr](#filewriterwritestr)|テキストファイルへ文字列を書き出します。|
|[writeLn](#filewriterwriteln)|ファイルに文字列を書き出し、最後に改行をいれます。|
|[error](#filewritererror)|ファイルの書き込み時にエラーが発生したかを調べます。|

***

## FileWriter.close
ファイルの読み込みを終了します。FilerWriterオブジェクトを使ったら最後に必ず呼び出してください。

**書式**
```
close()
```

***

## FileWriter.write
ファイルへ１バイトを書き出します。

**書式**
```
write(d)
```

- **d**  
&emsp;書き出す1バイト分のデータ。

***

## FileWriter.writeStr
テキストファイルへ文字列を書き出します。

**書式**
```
writeStr(s)
```
- **s**  
&emsp;書き出す文字列

***

## FileWriter.writeLn
ファイルに文字列を書き出し、最後に改行をいれます。

**書式**
```
writeLn(s)
```
- **s**  
&emsp;書き出す文字列

***

## FileWriter.error
ファイルの書き込み時にエラーが発生したかを調べます。

**書式**
```
error()
```

**戻り値**

エラーなら１。エラーでなければ０

他のアプリケーションがファイルを使っていたり（共有違反）、ディスクの調子が悪い時などにエラーになります。

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

