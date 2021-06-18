
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - PanelChar</title>

## PanelCharクラス
任意の図形（線、四角形、文字などの組み合わせ)が描けるオブジェクトです

PanelCharクラスのオブジェクトを作るには、図1のように「パネル」を選びます

図1 :  
![panel.png](./img/panel.png)

変数panelを通じて、Panelクラスに用意されている描画命令を使うことができます。

### 例1
```
extends PanelChar;
resize(200,200);
while (1) {
  x=x+1;
  panel.drawLine(0,0,200,t,$clWhite);
  t=t+1;
  update();
}
```

### メソッド一覧
|||
|-|-|
setText|aaa
setFont|
getWidth|
getHeight|
resize|
panel.drawSprite|
panel.drawDxSprite|
panel.drawLine|
panel.getPixel|
panel.fillRect|
Panel.copyRect|
panel.drawText|
panel.setTransparentColor|
panel.getTransparentColor|
panel.setPixel|

### 変数一覧

|||
|-|-|
alpha|
angle|
bold|
col|
font|
height|
italic|
panel|
scaleX|
scaley|
size|
text|
underLine|
width|

***

PanelChar.setText - パネルに描画する文字列を指定します。

書式
setText(t,c,sz) 
    
t(省略可能)
描画する文字列。省略すると変数textの値を使う
c(省略可能)
文字列の色。 省略すると変数col の値を使う
sz(省略可能)
文字列の大きさ。省略すると変数sizeの値を使う
※ 実行中は、変数textに値を代入しただけでは画面上のテキストは変わりません。必ずこのメソッドを呼び出してください。

このメソッドを呼び出すとテキストに応じてパネルの大きさが自動的に変わります。
このメソッドによりテキスト以外の図形は消去されます。テキストと他の図形を混在させたい場合、panel.drawTextメソッドを使ってください。
描画時のフォントは、font,bold,italic,underline 変数で指定します。 これらについてはパネルオブジェクトの説明を参照してください

***

PanelChar.getWidth - パネルの横幅を得ます

書式
getWidth() 
    
↑
戻り値
パネルの横幅

***

PanelChar.getHeight - パネルの縦幅（高さ）を得ます

書式
getHeight() 
    
↑
戻り値
パネルの高さ

***

PanelChar.resize - パネルの大きさを設定します。

書式
resize(w,h) 
    
w
パネルの幅
h
パネルの高さ

***

変数alpha - パネルの透明度を指定します。255が完全に不透明で、減らすにしたがって透明になっていきます。0にすると見えなくなります。

***

変数angle - パネルの回転角度を指定します。単位は度で右回りです。

***

変数bold - setTextメソッドでテキストを指定している場合のみ有効です。

1を指定すると太字になります。0で通常の書体です

***

変数col - setTextメソッドでテキストを指定している場合のみ有効です。

テキストの色を指定します。通常はcolorメソッドを使います

***

変数font - setTextメソッドでテキストを指定している場合のみ有効です。

テキストのフォント名を指定します。 ("ＭＳ ゴシック"など)

***

変数width - パネルの幅を得ます。

※widthに値を代入しても幅は変更できません。 代わりにresizeメソッドを使用してください。

***

変数height - パネルの縦幅（高さ）を得ます。

※heightに値を代入しても高さは変更できません。 代わりにresizeメソッドを使用してください。

***

変数italic - setTextメソッドでテキストを指定している場合のみ有効です。

1を指定すると斜体になります。0で通常の書体です

***

変数panel - パネル本体を表すオブジェクトです。このオブジェクトに対してはPanelクラスの各種メソッドを呼び出すことができます。

***

変数scaleX - パネルの拡大率を指定します。

scaleYを設定していない場合、縦横ともにscaleX倍拡大します。 scaleYを設定した場合、縦にscaleY倍、横にscaleX倍拡大します。

***

変数scaleY - パネルの拡大率を指定します。

scaleYを設定していない場合、縦横ともにscaleX倍拡大します。 scaleYを設定した場合、縦にscaleY倍、横にscaleX倍拡大します。

***

変数size - setTextメソッドでテキストを指定している場合のみ有効です。

テキストの大きさをptで指定します。

***

変数underLine - setTextメソッドでテキストを指定している場合のみ有効です。

1を指定すると下線付きになります。0で通常の書体です

***



***



***



***



***



***



***



***



***



***



***



***



***



***



***



***



***



***



***



***



***



***



***



***



***



***



***



***



***



***



***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

