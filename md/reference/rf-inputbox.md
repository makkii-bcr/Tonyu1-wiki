
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - $InputBox</title>

## $InputBoxオブジェクト

テキストを入力するためのウィンドウを表示します

参考：[waitInput](./rf-plainchar#plaincharwaitinput)メソッド

### メソッド一覧

|||
|-|-|
|[open](#inputboxopen)|文字入力用のウィンドウを開きます。|  
|[getStatus](#inputboxgetstatus)|文字入力用のウィンドウの状態を調べます|  
|[getText](#inputboxgettext)|文字入力用のウィンドウに入力された文字列を調べます。|  

***

## $InputBox.open

文字入力用のウィンドウを開きます。

**書式**
```
open(title, prompt, default, left, top, width, height) 
```

- **title**  
&emsp;文字入力用のウィンドウのタイトルバーに表示する文字列
- **prompt**  
&emsp;プロンプト部分（入力部分のすぐ上）に表示する文字列。改行文字( )を使うと複数行表示できます。(Ver1.12から)
- **default**  
&emsp;入力部分にあらかじめ入っている文字列
- **left**  
&emsp;ウィンドウの横位置（省略可）
- **top**  
&emsp;ウィンドウの縦位置（省略可）
- **width**  
&emsp;ウィンドウの幅（省略可）
- **height**  
&emsp;ウィンドウの高さ（省略可）

waitInputと異なり、ユーザがボタン（「Ok」 または「キャンセル」）を押すまで処理を中断しません。

ユーザがボタン（「OK」 または「キャンセル」）を押したかは[$InputBox.getStatus](#inputboxgetstatus) で調べることができます。  
入力された文字の内容は [$InputBox.getText](#inputboxgettext) で調べることができます。

**例1**
```
extends TextChar;
$InputBox.open("名前の入力","あなたは\nだあれ","ななしの　ごんべ");
while ($InputBox.getStatus()==0) {
  text="名前を入力しています..."+$InputBox.getText();
  update();
}
if ($InputBox.getStatus()==1) {  
   text=$InputBox.getText()+"さん、よろしく！";
} else {
   text="キャンセルしました";
}
wait();
```

***

## $InputBox.getStatus

文字入力用のウィンドウの状態を調べます

**書式**
```
getStatus()
```

**戻り値**
- 0: 文字入力用のウィンドウが表示されている（＝ユーザからの入力を待っている）  
- 1: 「OK」ボタンが押され、ウィンドウが閉じられた  
- 2: 「キャンセル」ボタン、または右上の「x」が押され、ウィンドウが閉じられた

**例1**

[$InputBox.open](#inputboxopen)参照

***

## $InputBox.getText

[$InputBox.open](#inputboxopen) によって開かれた文字入力用のウィンドウに入力された文字列を調べます。

**書式**
```
getText()
```

**戻り値**
入力された文字列

**例1**

[$InputBox.open](#inputboxopen)参照

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

