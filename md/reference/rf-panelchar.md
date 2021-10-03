
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - PanelChar</title>

## PanelCharクラス
任意の図形（線、四角形、文字などの組み合わせ)が描けるオブジェクトです

PanelCharクラスのオブジェクトを作るには、図1のように「パネル」を選びます

図1 :  
![panel.png](./img/panel.png)

[変数panel](#変数panel)を通じて、[Panel](./rf-panel)クラスに用意されている描画命令を使うことができます。

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
[setText](#panelcharsettext)|パネルに描画する文字列を指定します。
[getWidth](#panelchargetwidth)|パネルの横幅を得ます
[getHeight](#panelchargetheight)|パネルの縦幅（高さ）を得ます
[resize](#panelcharresize)|パネルの大きさを設定します。
[panel.drawSprite](./rf-panel#paneldrawsprite)|パネルにスプライトを描画します。
[panel.drawDxSprite](./rf-panel#paneldrawdxsprite)|回転、拡大、縮小、半透明のスプライトを描画します。
[panel.drawLine](./rf-panel#paneldrawline)|パネルに直線を描画します
[panel.getPixel](./rf-panel#panelgetpixel)|パネルの特定の点における色を得ます。
[panel.fillRect](./rf-panel#panelfillrect)|パネルに中の詰まった長方形を描画します
[Panel.copyRect](./rf-panel#panelcopyrect)|パネル間で画像をコピーします
[panel.drawText](./rf-panel#paneldrawtext)|パネルに文字を描画します。
[panel.setTransparentColor](./rf-panel#panelsettransparentcolor)|パネルの透過色を指定します。
[panel.getTransparentColor](./rf-panel#panelgettransparentcolor)|パネルの透過色を取得します。
[panel.setPixel](./rf-panel#panelsetpixel)|パネルに点を描きます。

### 変数一覧

|||
|-|-|
[alpha](#変数alpha)|パネルの透明度を指定します。 
[angle](#変数angle)|パネルの回転角度を指定します。
[bold](#変数bold)|テキストを太字にするか指定します。
[col](#変数col)|テキストの色を指定します。
[font](#変数font)|テキストのフォント名を指定します。
[width](#変数width)|パネルの幅を得ます。
[height](#変数height)|パネルの縦幅（高さ）を得ます。
[italic](#変数italic)|テキストを斜体にするか指定します。
[panel](#変数panel)|パネル本体を表すオブジェクトです。  
[scaleX](#変数scalex)|パネルの拡大率を指定します。
[scaley](#変数scaley)|パネルの拡大率を指定します。
[size](#変数size)|テキストの大きさをptで指定します。
[underLine](#変数underline)|テキストを下線付きにするか指定します。

***

## PanelChar.setText
パネルに描画する文字列を指定します。

**書式**
```
setText(t,c,sz)
```
- **t(省略可能)**  
&emsp;描画する文字列。省略すると変数textの値を使う
- **c(省略可能)**  
&emsp;文字列の色。 省略すると変数col の値を使う
- **sz(省略可能)**  
&emsp;文字列の大きさ。省略すると変数sizeの値を使う

※ 実行中は、変数textに値を代入しただけでは画面上のテキストは変わりません。必ずこのメソッドを呼び出してください。

このメソッドを呼び出すとテキストに応じてパネルの大きさが自動的に変わります。  
このメソッドによりテキスト以外の図形は消去されます。テキストと他の図形を混在させたい場合、[panel.drawText](./rf-panel#paneldrawtext)メソッドを使ってください。  
描画時のフォントは、font,bold,italic,underline 変数で指定します。   

これらについては[パネルオブジェクト](#)の説明を参照してください

***

## PanelChar.getWidth
パネルの横幅を得ます

**書式**
```
getWidth()
```

**戻り値**

パネルの横幅

***

## PanelChar.getHeight
パネルの縦幅（高さ）を得ます

**書式**
```
getHeight()
```

**戻り値**

パネルの高さ

***

## PanelChar.resize
パネルの大きさを設定します。

**書式**
```
resize(w,h)
```
- **w**  
&emsp;パネルの幅
- **h**  
&emsp;パネルの高さ

***

## 変数alpha
パネルの透明度を指定します。  
255が完全に不透明で、減らすにしたがって透明になっていきます。  
0にすると見えなくなります。

***

## 変数angle
パネルの回転角度を指定します。単位は度で右回りです。

***

## 変数bold
[setText](#panelcharsettext)メソッドでテキストを指定している場合のみ有効です。

1を指定すると太字になります。0で通常の書体です

***

## 変数col
[setText](#panelcharsettext)メソッドでテキストを指定している場合のみ有効です。

テキストの色を指定します。通常は[color](./rf-object#objectcolor)メソッドを使います

***

## 変数font
[setText](#panelcharsettext)メソッドでテキストを指定している場合のみ有効です。

テキストのフォント名を指定します。 ("ＭＳ ゴシック"など)

***

## 変数width
パネルの幅を得ます。

※widthに値を代入しても幅は変更できません。 代わりに[resize](./rf-panel#panelresize)メソッドを使用してください。

***

## 変数height
パネルの縦幅（高さ）を得ます。

※heightに値を代入しても高さは変更できません。 代わりに[resize](./rf-panel#panelresize)メソッドを使用してください。

***

## 変数italic
[setText](#panelcharsettext)メソッドでテキストを指定している場合のみ有効です。

1を指定すると斜体になります。0で通常の書体です

***

## 変数panel
パネル本体を表すオブジェクトです。  
このオブジェクトに対しては[Panel](./rf-panel)クラスの各種メソッドを呼び出すことができます。

***

## 変数scaleX
パネルの拡大率を指定します。

scaleyを設定していない場合、縦横ともにscaleX倍拡大します。  
scaleyを設定した場合、縦にscaley倍、横にscaleX倍拡大します。

***

## 変数scaley
パネルの拡大率を指定します。

scaleyを設定していない場合、縦横ともにscaleX倍拡大します。  
scaleyを設定した場合、縦にscaley倍、横にscaleX倍拡大します。

***

## 変数size
[setText](#panelcharsettext)メソッドでテキストを指定している場合のみ有効です。

テキストの大きさをptで指定します。

***

## 変数underLine
[setText](#panelcharsettext)メソッドでテキストを指定している場合のみ有効です。

1を指定すると下線付きになります。0で通常の書体です

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

