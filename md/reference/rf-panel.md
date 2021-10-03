
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - Panel</title>

## Panelクラス

通常の描画メソッド([drawText](./rf-sprite#spritedrawtext),[drawLine](./rf-sprite#spritedrawline),[drawSprite](./rf-sprite#spritedrawsprite),[fillRect](./rf-sprite#spritefillrect))では、描画されたものは１フレームごとに消去されてしまいます。  
一度描画したグラフィックスを消さないでおくときは、パネルを使うと便利です。

パネルにアクセスするには、次の２通りがあります。

- $panelという変数を頭につけて、通常の描画命令と同様にメソッドを呼びます。
- [パネルオブジェクト](./rf-panelchar)を作成します。

**例1**

例１(パネルを使わない)：
```
extends SpriteChar;
i=0;
while(i<$screenHeight) {
  drawLine(0,0,$screenWidth,i,color(255,255,255));
  i+=3;
  update();
}
```

**例2**

例２：(パネルを使う)：
<pre>
extends SpriteChar;
i=0;
while(i<$screenHeight) {
  <b>$panel.</b>drawLine(0,0,$screenWidth,i,color(255,255,255));
  i+=3;
  update();
}
</pre>

▲ 例１では、一本の線が上から下に流れる様子が見えますが、例２では、線の描いた跡が全部残ります。

※ 一度パネルに描いた内容を消去するには、パネルを黒（ color(0,0,0)で指定する色）で塗りつぶします。

**例3**

例3：(パネルの消去)：
```
extends SpriteChar;
i=0;
while(i<$screenHeight) {
  $panel. drawLine(0,0,$screenWidth,i,color(255,255,255));
  i+=3;
  update();
}
$panel.fillRect(0,0,$screenWidth,$screenHeight,color(0,0,0));
// ↑パネルに描画した内容を消去
while(i>0) {
  $panel. drawLine($screenWidth,0,0,i,color(255,255,255));
  i-=3;
  update();
}
```

### メソッド一覧
|||
|-|-|
|[drawSprite](#paneldrawsprite)|パネルにスプライトを描画します。|
|[drawDxSprite](#paneldrawdxsprite)|回転、拡大、縮小、半透明のスプライトを描画します。|
|[drawLine](#paneldrawline)|パネルに直線を描画します|
|[drawBrokenLine](#paneldrawbrokenline)|点線を描画します|
|[getPixel](#panelgetpixel)|パネルの特定の点における色を得ます。|
|[fillRect](#panelfillrect)|パネルに中の詰まった長方形を描画します|
|[drawText](#paneldrawtext)|パネルに文字を描画します。|
|[copyRect](#panelcopyrect)|パネル間で画像をコピーします|
|[resize](#panelresize)|パネルの大きさを変更します|
|[setTransparentColor](#panelsettransparentcolor)|パネルの透過色を指定します。|
|[getTransparentColor](#panelgettransparentcolor)|パネルの透過色を取得します。|
|[setPixel](#panelsetpixel)|パネルに点を描きます。|
|[load](#panelload)|ファイルから画像を読み込みます|
|[save](#panelsave)|パネルの画像をファイルに保存します|

### 変数一覧
|||
|-|-|
|[alpha](#panelalpha)|パネルの透明度を指定します。|
|[angle](#panelangle)|パネルの回転角度を指定します。単位は度で右回りです。|
|[height](#panelheight)|Panelの高さ（ピクセル）が格納されています。|
|[width](#panelwidth)|Panelの横幅（ピクセル）が格納されています。|
|[zOrder](#panelzorder)|Panelの表示の前後を指定します。|

***

## Panel.drawSprite
パネルにスプライトを描画します。

**書式**
```
drawSprite(x,y,p,f)
```
- **x**  
&emsp;x座標
- **y**  
&emsp;y座標
- **p**  
&emsp;キャラクタパターン
- **f(省略可能)**  
&emsp;0でない数値の場合、元のキャラクタパターンを左右反転したパターンを描画する

パネルについては、[パネルの使い方](#)を参照してください。 [$panelとpanelの違い](./rf-panel-diff)

***

## Panel.drawDxSprite
回転、拡大、縮小、半透明のスプライトを描画します。

**書式**
```
drawDxSprite(x,y,p,f,angle,scaleX,scaleY)
```
- **x**  
&emsp;x座標
- **y**  
&emsp;y座標
- **p**  
&emsp;キャラクタパターン
- **f**  
&emsp;0でない数値の場合、元のキャラクタパターンを左右反転したパターンを描画する
- **angle**  
&emsp;回転角度。単位は度(°)を表す整数
- **scaleX**  
&emsp;横方向の拡大率。１が原寸
- **scaleY(省略可能)**  
&emsp;縦方向の拡大率。省略するとscaleXと同じ

***

## Panel.drawLine
パネルに直線を描画します

**書式**
```
drawLine(sx,sy,dx,dy,col)
```
- **sx**  
&emsp;始点のx座標
- **sy**  
&emsp;始点のy座標
- **dx**  
&emsp;終点のx座標
- **dy**  
&emsp;終点のy座標
- **col**  
&emsp;色(通常colorメソッドで指定)

パネルについては、[パネルの使い方](#)を参照してください。

参考： [$panelとpanelの違い](./rf-panel-diff)

***

## Panel.drawBrokenLine
点線を描画します

**書式**
```
drawBrokenLine(sx,sy,dx,dy,col,length)
```
- **sx**  
&emsp;始点のx座標
- **sy**  
&emsp;始点のy座標
- **dx**  
&emsp;終点のx座標
- **dy**  
&emsp;終点のy座標
- **col**  
&emsp;色
- **length**  
&emsp;点線1個の長さ

***

## Panel.getPixel
パネルの特定の点における色を得ます。

**書式**
```
getPixel(x,y)
```
- **x**  
&emsp;点のx座標
- **y**  
&emsp;点のy座標

**戻り値**

パネル上(x,y)における色を整数値で返します

戻り値は次の意味を持ちます。

戻り値 ＝ 赤成分 + 緑成分 * 256 + 青成分 * 65536

**例1**

```
extends TextChar;
$panel.fillRect(30,30,50,50,$clRed);
$panel.fillRect(130,30,150,50,$clGreen);
$panel.fillRect(30,130,50,150,$clBlue);
while(1) {
  text="色 ="+$panel.getPixel($mouseX,$mouseY);
  update();
}
```

パネルについては、[パネルの使い方](#)を参照してください。 [$panelとpanelの違い](./rf-panel-diff)

***

## Panel.fillRect
パネルに中の詰まった長方形を描画します

**書式**
```
fillRect(sx,sy,dx,dy,col)
```
- **sx**  
&emsp;左上点のx座標
- **sy**  
&emsp;左上点のy座標
- **dx**  
&emsp;右下点のx座標
- **dy**  
&emsp;右下点のy座標
- **col**  
&emsp;色(通常colorメソッドで指定)

参考： [$panelとpanelの違い](./rf-panel-diff)

***

## Panel.drawText
パネルに文字を描画します。

**書式**
```
drawText(x,y,t,col,size)
```
- **x**  
&emsp;x座標
- **y**  
&emsp;y座標
- **t**  
&emsp;描画する値
- **col**  
&emsp;色(通常colorメソッドで指定)
- **size**  
&emsp;サイズ

パネルについては、[パネルの使い方](#)を参照してください [$panelとpanelの違い](./rf-panel-diff)

***

## Panel.drawText
パネルに文字を描画します。

**書式**
```
drawText(x,y,t,col,size)
```
- **x**  
&emsp;x座標
- **y**  
&emsp;y座標
- **t**  
&emsp;描画する値
- **col**  
&emsp;色(通常colorメソッドで指定)
- **size**  
&emsp;サイズ

パネルについては、[パネルの使い方](#)を参照してください [$panelとpanelの違い](./rf-panel-diff)

***

## Panel.copyRect
パネル間で画像をコピーします

**書式**
```
copyRect(dlx,dty,drx,dby,src,slx,sty,srx,sby)
```
- **dlx**  
&emsp;コピー先の左上のx座標
- **dty**  
&emsp;コピー先の左上のy座標
- **drx**  
&emsp;コピー先の右下のx座標
- **dby**  
&emsp;コピー先の右下のy座標
- **src**  
&emsp;コピー元のパネル
- **slx**  
&emsp;コピー元の左上のx座標
- **sty**  
&emsp;コピー元の左上のy座標
- **srx**  
&emsp;コピー元の右下のx座標
- **sby**  
&emsp;コピー元の右下のy座標

***

## Panel.resize
パネルの大きさを変更します

**書式**
```
resize(width,height)
```
- **width**  
&emsp;幅
- **height**  
&emsp;高さ

***

## Panel.setTransparentColor
パネルの透過色を指定します。

**書式**
```
setTransparentColor(c)
```
- **c**  
&emsp;透過色（[color](./rf-object#objectcolor)メソッドで指定)

***

## Panel.getTransparentColor
パネルの透過色を取得します。

**書式**
```
getTransparentColor()
```

**戻り値**

透過色を表す値

**参考**
[Panel.setTransparentColor](#panelsettransparentcolor)

***

## Panel.setPixel
パネルに点を描きます。

**書式**
```
setPixel(x,y,c)
```
- **x**  
&emsp;点のx座標
- **y**  
&emsp;点のy座標
- **c**  
&emsp;パネル上(x,y)に設定する色（整数値） ＝赤成分 + 緑成分 * 256 + 青成分 * 65536

パネルについては、[パネルの使い方](#)を参照してください。

参考： [$panelとpanelの違い](./rf-panel-diff)

***

## Panel.load
ファイルから画像を読み込みます

**書式**
```
load(fileName)
```
- **fileName**  
&emsp;ファイル名(bmpファイルのみ)

読み込みが起きると、パネルの大きさは読み込んだ画像の大きさに自動的に変更されます。

***

## Panel.save
パネルの画像をファイルに保存します

**書式**
```
save(fileName,sx,sy,dx,dy)
```
- **fileName**  
&emsp;ファイル名(bmpのみ)
- **sx(省略可能)**  
&emsp;保存する範囲(左上のx座標)
- **sy(省略可能)**  
&emsp;保存する範囲(左上のy座標)
- **dx(省略可能)**  
&emsp;保存する範囲(右下のx座標)
- **dy(省略可能)**  
&emsp;保存する範囲(右下のy座標)

保存する範囲を省略すると、パネル全体を保存します。

***

## Panel.alpha
パネルの透明度を指定します。  
255が完全に不透明で、減らすにしたがって透明になっていきます。  
0にすると見えなくなります。

参考： パネルオブジェクトの透明度は、次の例のように指定します。

**例1**
```
extends PanelChar;
resize(100,100);
panel.fillRect(0,0,100,100,$clWhite);
panel.drawText(0,0,"パネル",$clBlue,18);
wait(60);
alpha=128; // 透明度を128にする
wait();
```

**例2**

悪い例
```
extends PanelChar;
resize(100,100);
panel.fillRect(0,0,100,100,$clWhite);
panel.drawText(0,0,"パネル",$clBlue,18);
wait(60);
panel.alpha=128; // panel.alpha に代入しても透明度は変化しません
wait();
```

***

## Panel.angle
パネルの回転角度を指定します。単位は度で右回りです。

参考： パネルオブジェクトの回転角度は、次のように指定します。

**例1**
```
extends PanelChar;
resize(100,100);
panel.fillRect(0,0,100,100,$clWhite);
panel.drawText(0,0,"パネル",$clBlue,18);
wait(60);
angle=128; // 回転角度を128度にする
wait();
```

**例2**

悪い例
```
extends PanelChar;
resize(100,100);
panel.fillRect(0,0,100,100,$clWhite);
panel.drawText(0,0,"パネル",$clBlue,18);
wait(60);
panel.angle=128; // panel.alpha に代入しても回転しません
wait();
```

***

## Panel.height
Panelの高さ（ピクセル）が格納されています。

※ この変数に代入してもPanelの大きさは変わりません。  
Panelの大きさを変える場合は、[resize](#panelresize)メソッドを使います。

***

## Panel.width
Panelの横幅（ピクセル）が格納されています。

※ この変数に代入してもPanelの大きさは変わりません。  
Panelの大きさを変える場合は、[resize](#panelresize)メソッドを使います。

***

## Panel.zOrder
複数のオブジェクトが重なった場合、この値が小さいオブジェクトのほうが手前に表示されます。

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

