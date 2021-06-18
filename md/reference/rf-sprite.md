
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - Sprite</title>

## Spriteクラス
画面上に出現するすべてのオブジェクト(PlainCharクラス)の親クラスです。描画命令などが定義されています


### メソッド一覧
|||
|-|-|
textWidth|
textHeight|
setFont|
drawText|
drawLine|
drawBrokenLine|
fillRect|
drawSprite|
getPatWidth|
getPatHeight|
drawMapSprite|
drawChip|
drawDxSprite|
drawScreenXY|
centerText|
drawVerticalText|
drawPolygon|
drawRect|
drawRectDx|
drawTriangle|
gradationLine|
gradationRect|
gradationText|
fillPolygon|
setPolygon|

***

Sprite.textWidth - テキストの横幅を取得します

書式
textWidth(t,s) 
    
t
テキストの内容
s
テキストサイズ(pt)
↑
戻り値
テキストtをサイズsで書いた場合の幅

***

Sprite.textHeight - テキストの縦幅（高さ）を取得します

書式
textHeight(t,s) 
    
t
テキストの内容
s
テキストサイズ(pt)
↑
戻り値
テキストtをサイズsで書いた場合の高さ

***

Sprite.setFont - drawTextメソッドで描画する文字フォントを指定します。

書式
setFont(name,bold,italic,underLine) 
    
name
フォント名
bold(省略可能)
太字にする場合は1、そうでない場合0にするか省略する
italic(省略可能)
斜体にする場合は1、そうでない場合0にするか省略する
underLine(省略可能)
下線つきにする場合は1、そうでない場合0にするか省略する
フォント名と指定できる文字列は "ＭＳ 明朝" "ＭＳ ゴシック" などです。ＭＳと明朝の間は半角スペースです

↑
例1
 
extends SpriteChar;
while (1) {
  setFont ("ＭＳ 明朝",0,1);
  drawText(x,y-30,"フォントが変わりました",$clWhite);
  update();
}
 
▲ オブジェクトの上に明朝体、斜体で"フォントが変わりました"を表示します。 なお、実行開始時は"ＭＳ Ｐゴシック"、太字、斜体、下線すべてなしに設定されます

***

Sprite.drawText - 文字を描画します。

書式
drawText(x,y,text,col,size,zOrder) 
    
x
x座標
y
y座標
text
描画する値
col
色(通常colorメソッドで指定)
size(省略可能)
サイズ
zOrder(省略可能)
描画順序。値が小さいほど手前に描画される
↑
例1
 
extends SpriteChar;
i=0;
while (1) {
  drawText(x,y-30,"Time",$clWhite);
  drawText(x,y-10,i,$clWhite);
  i=i+1/60;
  update();
}
▲ オブジェクトの頭上に1秒に1だけ増えるタイマーが表示されます

※ drawTextで描いた図形は、次のフレームを描画する前に消去されます。 必ず毎回(updateが呼ばれるたびに)drawTextを実行してください。

次のような例だと、一瞬だけ表示されてすぐ消えてしまいます。

↑
例2
 
// 悪い例：
extends SpriteChar;
drawText(x,y-30,"Time",color);  // 最初の1フレームしか表示されない
i=0;
while (1) {
  drawText(x,y-10,i,color);
  i=i+1/60;
  update();
}

***

Sprite.drawLine - 直線を描画します

書式
drawLine(sx,sy,dx,dy,col,zOrder) 
    
sx
始点のx座標
sy
始点のy座標
dx
終点のx座標
dy
終点のy座標
col
色(通常colorメソッドで指定)
zOrder(省略可能)
描画順序。値が小さいほど手前に描画される

***

Sprite.drawBrokenLine - 点線を描画します

書式
drawBrokenLine(sx,sy,dx,dy,col,zOrder,length) 
    
sx
始点のx座標
sy
始点のy座標
dx
終点のx座標
dy
終点のy座標
col
色
zOrder
描画順序(小さいほど手前に描画される)
length
点線1個の長さ

***

Sprite.fillRect - 中の詰まった長方形を描画します

書式
fillRect(sx,sy,dx,dy,col,zOrder) 
    
sx
左上点のx座標
sy
左上点のy座標
dx
右下点のx座標
dy
右下点のy座標
col
色(通常colorメソッドで指定)
zOrder(省略可能)
描画順序。値が小さいほど手前に描画される

***

Sprite.drawSprite - スプライトを描画します。

書式
drawSprite(x,y,p,f,zOrder) 
    
x
x座標
y
y座標
p
キャラクタパターン
f(省略可能)
0でない数値の場合、元のキャラクタパターンを左右反転したパターンを描画する
zOrder(省略可能)
描画順序。値が小さいほど手前に描画される
通常、オブジェクトに対して自動的にスプライトが描画されますが(updateメソッド参照)、１つの オブジェクトで複数のスプライトを描画したいときに使用します。

↑
例1
 
extends SpriteChar;
while (1) {
  drawSprite(50,50,21);
  x=100;y=100;p=5;
  update();
}
 
▲ このようにすると、update();により、自動的に(100,100)の位置に青い丸(パターン番号21)がかかれる他に、drawSpriteによって(50,50)の位置に 青い丸(パターン番号21)がかかれます。

drawSpriteを使った場合、x,y,pの値に関係なく任意の場所に任意のパターンを描画できます。

※ drawSpriteはupdate()をするたびに毎回呼び出してください。 次のような例だと、一瞬だけ表示されてすぐ消えてしまいます。

↑
例2
 
//悪い例：
drawSprite(50,50,21);  // 最初の1フレームしか表示されない
while (1) {
  x=100;y=100;p=5;
  update();
}

***

Sprite.getPatWidth - キャラクタパターンの大きさ（幅）を取得します．

書式 †
getPatWidth(p) 
p
キャラクタパターン番号
↑
戻り値 †
p の大きさ（幅）

***

Sprite.getPatHeight - キャラクタパターンの大きさ（幅）を取得します．

書式 †
getPatHeight(p) 
p
キャラクタパターン番号
↑
戻り値 †
p の大きさ（高さ）

***

Sprite.drawMapSprite - 未稿

書式
drawMapSprite() 

***

Sprite.drawDxSprite - 回転、拡大、縮小、半透明のスプライトを描画します。

書式
drawDxSprite(x,y,p,f,zOrder,angle,alpha,scaleX,scaleY) 
    
x
x座標
y
y座標
p
キャラクタパターン
f
0でない数値の場合、元のキャラクタパターンを左右反転したパターンを描画する
zOrder
描画順序。値が小さいほど手前に描画される
angle
回転角度。単位は度(°)を表す整数
alpha
不透明度を0から255の整数であらわす。小さい値ほど透けて見える
scaleX
横方向の拡大率。１が原寸
scaleY(省略可能)
縦方向の拡大率。省略するとscaleXと同じ
↑
例1
 
extends SpriteChar;
p=-1;
while (1) {
  drawDxSprite(50,50,4,0,0,i,128,2);
  i=(i+1) % 360;
  update();
}
 
▲ このようにすると、回転する立方体が見えます。

***

Sprite.drawScreenXY - 各種描画命令において、座標系にスクリーン座標を使うか、ワールド座標を使うかを指定します。

書式 †
drawScreenXY(sc) 
    
sc
0=ワールド座標を使う 1=スクリーン座標を使う
主に、画面がスクロールするゲームにおいて、スコア表示など特定のオブジェクトを スクロールさせたくない場合に用います。

オブジェクトをスクロールにあわせて動かないようにするには次のようなメソッドを定義します。

↑
例1 †
 
extends TextChar;
function draw() {
  drawScreenXY(1);
  super.draw();
  drawScreenXY(0);
}
x=100;
y=20;
text="Score : 0";
wait();
▲ このオブジェクトはスクロールしても必ず画面上の(100,20)の位置にあります

drawScreenXYメソッドは、drawSprite、drawDXSprite、drawText、drawLine、fillRectの各メソッドにおける引数xとyに機能します。

ワールド座標を用いた場合、(x,y)の値をワールド座標として解釈します。この場合スクロールした位置により画面上の表示位置が変化します。
スクリーン座標を用いた場合、スクロールしても画面上の位置は変化しません。
スクリーン座標、ワールド座標についてはスクロールのサンプル ( http://tonyu.jp/html/scroll/html/HID00000001.htm )を参照してください。

***

Sprite.centerText - 指定された座標が中心になるように文字を描画します。

書式
centerText(x,y,text,col,size,zOrder) 
    
x
テキストの中心のx座標
y
テキストの中心のy座標
text
描画する値
col
色(通常colorメソッドで指定)
size(省略可能)
文字のサイズ
zOrder(省略可能)
描画順序。値が小さいほど手前に描画される

***

Sprite.drawVerticalText - 縦書きの文字を描画します。

書式
drawVerticalText(x,y,text,col,size,zOrder) 
    
x
テキストの中心のx座標
y
テキストの中心のy座標
text
描画する値
col
色(通常colorメソッドで指定)
size(省略可能)
サイズ
zOrder(省略可能)
描画順序。値が小さいほど手前に描画される

***

Sprite.drawRect - 中空の四角形を描画します。

書式 †
drawRect(sx,sy,dx,dy,col,zOrder) 
    
sx
左上の頂点のx座標
sy
左上の頂点のy座標
dx
右下の頂点のx座標
dy
右下の頂点のy座標
col
色(通常colorメソッドで指定)
zOrder(省略可能)
描画順序。値が小さいほど手前に描画される

***

Sprite.drawRectDx - 中空の四角形を描画します。回転が可能です

書式
drawRectDx(sx,sy,dx,dy,col,angle,zOrder) 
    
sx
中心のx座標
sy
中心のy座標
dx
幅
dy
高さ
col
色(通常colorメソッドで指定)
angle
回転角度
zOrder(省略可能)
描画順序。値が小さいほど手前に描画される

***

Sprite.drawTriangle - 指定された座標が中心になるように文字を描画します。

書式
drawTriangle(ax,ay,bx,by,cx,cy,col,angle,zOrder) 
    
ax
頂点Aのx座標(※)
ay
頂点Aのy座標(※)
bx
頂点Bのx座標(※)
by
頂点Bのy座標(※)
cx
頂点Cのx座標(※)
cy
頂点Cのy座標(※)
col
色(通常colorメソッドで指定)
angle(省略可能)
回転角
zOrder(省略可能)
描画順序。値が小さいほど手前に描画される
(※) : angle=0 のときの座標です。angleの値に応じて、右回転します。

***

Sprite.gradationLine - グラデーション付きの直線を描画します

書式 †
gradationLine(sx,sy,dx,dy,cols,cold,zOrder) 
    
sx
始点のx座標
sy
始点のy座標
dx
終点のx座標
dy
終点のy座標
cols
始点の色(通常colorメソッドで指定)
cold
終点の色(通常colorメソッドで指定)
zOrder(省略可能)
描画順序。値が小さいほど手前に描画される

***

Sprite.gradationRect - グラデーションつき長方形を描画します

書式
gradationRect(sx,sy,dx,dy,type,cols,cold,zOrder) 
    
sx
左上点のx座標
sy
左上点のy座標
dx
右下点のx座標
dy
右下点のy座標
type
0 - 左→右にグラデーションをかける 1 - 上→下にグラデーションをかける
cols
左端（上端）の色(通常colorメソッドで指定)
cold
右端（下端）(通常colorメソッドで指定)
zOrder(省略可能)
描画順序。値が小さいほど手前に描画される

***

Sprite.gradationText - グラデーションつき文字を描画します。

書式
gradationText(x,y,text,colL,colR,size,zOrder) 
    
x
x座標
y
y座標
text
描画する値
colL
左端の色(通常colorメソッドで指定)
colR
右端の色(通常colorメソッドで指定)
size(省略可能)
サイズ
zOrder(省略可能)
描画順序。値が小さいほど手前に描画される

***

Sprite.fillPolygon - 多角形を描画し，塗りつぶします。

書式 †
fillPolygon(x,y,points,color,zOrder) 
    
x
基準点のx座標
y
基準点のy座標
points
頂点の数
col
色(通常colorメソッドで指定)
zOrder(省略可能)
描画順序。値が小さいほど手前に描画される
各点の座標は，Sprite.setPolygonで指定します．

extends SpriteChar;
setPolygon(0,-50,0);
setPolygon(1,50,-30);
setPolygon(2,30,130);
$panel.fillPolygon(x,y,3,$clRed);
while (1) {
  for (i=0  ; i<6 ; i++) {
    sz=100;
    setPolygon(i,sin(i*60+x)*sz,cos(i*60+x)*sz);
  }
  fillPolygon(x,y,6,$clGreen,zOrder);
  fillPolygon(x+30,y+30,6,$clBlack,zOrder+1);
  x++;
  update();
}

***

Sprite.setPolygon - Sprite.fillPolygon における頂点を指定します．

書式 †
setPolygon(seq,x,y)
seq
点番号．seq==0,1,2... の順に点を結んで多角形を描画する．最大99
x
点の x 座標
y
点の y 座標

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

