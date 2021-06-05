
[$InputBox](./rf-inputbox)&emsp;[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - $InputBox.open</title>

## $InputBox.open

文字入力用のウィンドウを開きます。

#### 書式
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

ユーザがボタン（「OK」 または「キャンセル」）を押したかは[$InputBox.getStatus](./rf-inputbox-getstatus) で調べることができます。  
入力された文字の内容は [$InputBox.getText](./rf-inputbox-gettext) で調べることができます。

### 例1
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

[$InputBox](./rf-inputbox)&emsp;[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

