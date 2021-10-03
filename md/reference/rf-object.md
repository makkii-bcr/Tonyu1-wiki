
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - Object</title>

## Objectクラス

すべてのオブジェクトの親クラスです。Objectクラスのメソッドはどのクラスからも利用できます。

### メソッド一覧
|||
|-|-|
|[abs](#objectabs)|絶対値を得ます。|
|[amod](#objectamod)|剰余を求めますが、負の値を割る場合%演算子と挙動が変わります。|
|[angle](#objectangle)|線分(1,0)-(0,0)と線分(0,0)-(x,y)のなす角を求めます|
|[angleDiff](#objectanglediff)|角度の比較を行います。|
|[appear](#objectappear)|実行中にオブジェクトを出現させます。|
|[clearAllValues](#objectclearallvalues)|全ての数値を初期化します。|
|[color](#objectcolor)|fillRect、drawLine、drawTextなどで、描画色を指定します|
|[colorHSL](#objectcolorhsl)|色相、彩度、明度から色を作成します。|
|[cos](#objectcos)|余弦(コサイン)を求めます。|
|[deleteFile](#objectdeletefile)|ファイルを削除します|
|[designMode](#objectdesignmode)|現在設計中であれば真を返します。|
|[dist](#objectdist)|線分(0,0)-(x,y)の長さを求めます。|
|[fileExists](#objectfileexists)|ファイルが存在するかどうかを調べます。|
|[floor](#objectfloor)|実数から整数への変換を、値を超えない最大の整数を得ることで行います。|
|[getBlue](#objectgetblue)|colorメソッドや色定数などの色を表す整数から青色の成分を取り出します。|
|[getClassName](#objectgetclassname)|オブジェクトのクラス名を得ます。|
|[getGlobal](#objectgetglobal)|グローバル変数の値を取得します|
|[getGreen](#objectgetgreen)|colorメソッドや色定数などの色を表す整数から緑色の成分を取り出します。|
|[getRed](#objectgetred)|colorメソッドや色定数などの色を表す整数から赤色の成分を取り出します。|
|[getTime](#objectgettime)|システムタイマの値（OS起動からの時間）をミリ秒単位で返します。|
|[getValueName](#objectgetvaluename)|オブジェクトの持つ変数名を取り出します。|
|[getkey](#objectgetkey)|キーボードのキーやマウスボタンが押されているかどうか判定します。|
|[inspect](#objectinspect)|オブジェクトをオブジェクトインスペクタに表示します。|
|[isFloat](#objectisfloat)|値が実数（浮動小数点数）であるか調べます|
|[isInt](#objectisint)|値が整数であるか調べます|
|[moveFile](#objectmovefile)|ファイル名を変更します|
|[print](#objectprint)|コンソールウィンドウとステータスバーに文字を出力します。|
|[pset](#objectpset)|ドット描画を行います。|
|[randomize](#objectrandomize)|rndメソッドが生成する乱数の系列(乱数の発生順序)を設定します。|
|[rnd](#objectrnd)|乱数(でたらめな数)を返します|
|[sin](#objectsin)|正弦(サイン)を求めます。|
|[sqrt](#objectsqrt)|平方根を得ます|
|[sub](#objectsub)|減算関数。引き算を行います。|
|[timeStop](#objecttimestop)|すべてのオブジェクトの動作を停止します。|
|[trunc](#objecttrunc)|実数から整数への変換を、小数部切捨てにより行います。|
|[valueOf](#objectvalueof)|文字列から数値への変換を行います。|

***

## Object.abs
絶対値を得ます。

**書式**
```
abs(x)
```
- **x**  
&emsp;数値

**戻り値**

xの絶対値 x>=0 なら x , x<0 なら-x

***

## Object.amod
剰余を求めますが、負の値を割る場合[%演算子](./rf-arithmetic)と挙動が変わります。

**書式**
```
amod(a,b)
```
- **a**  
&emsp;割られる数(整数)
- **b**  
&emsp;割る数(正の整数)

**戻り値**

a-(aを超えない最大のbの倍数) 

**例1**
```
extends SpriteChar;
print (amod(12,5));
print (12 % 5);
print (amod(-12,5));
print (-12 % 5);
```

***

## Object.angle
線分(1,0)-(0,0)と線分(0,0)-(x,y)のなす角を求めます

**書式**
```
angle(x,y)
```

- **x**  
&emsp;線分(0,0)-(x,y)のx
- **y**  
&emsp;線分(0,0)-(x,y)のy

**戻り値**

線分(1,0)-(0,0)と(0,0)-(x,y)のなす角(単位:度)

※angleで計算される角度はあまり正確ではありません。  
角度を45で割った余りが22付近になる場合、誤差が大きくなります。  
もっと正確に求めたい場合は、[$Math.angle](./rf-math#mathangle)メソッドを使います。

参照： [angle,sin,cos,distの関係](./rf-angle-sin-cos-dist)

***

## Object.angleDiff
角度の比較を行います。

**書式**
```
angleDiff(a,b)
```

- **a**  
&emsp;角度a
- **b**  
&emsp;角度b

**戻り値**

angleDiff(a,b) は、-180 から 179 までの値を返します。

この値は次の性質をもっています。

 angleDiff(a,b) == (a-b) + 360 * n   (nは整数)
言い換えると、angleDiff(a,b)の戻り値は、角度a-b と同じ向きを持つ、-180 から 179 までの角度です。

angleDiff(360,90) = -90

angleDiff(-50,180) = 130

angleDiffを図で表すと図1のようになります。

d=angleDiff(a,b);

![angle-diff.png](./img/angle-diff.png)

angleDiffを用いると、角度a から 角度bに到達するには右回り、左回りのどちらが早いかを判定することができます。  
angleDiff(a,b)の値が正の とき、a から b に 至るには 左回り（aを減らす)が近く、  
負のときは右回り(aを増やす) のほうが近くなります。

***

## Object.appear
実行中にオブジェクトを出現させます。

**書式**
```
appear(o)
```
- **o**  
&emsp;出現させるオブジェクト

**戻り値**

出現したオブジェクト(o自身)

[スプライトオブジェクト](./rf-spritechar)、[DXスプライトオブジェクト](./rf-dxchar)の作成には、次の形式が便利です。

**書式:**
<pre>
appear(new <b>クラス名</b>( <b>x座標</b>, <b>y座標</b>, <b>キャラクタパターン</b>, <b>反転</b> ))
</pre>

- **クラス名**  
&emsp;出現させるオブジェクトのクラスを指定します
- **x座標,y座標**  
&emsp;出現位置を指定します
- **キャラクタパターン**  
&emsp;出現したときのキャラクタパターンを指定します
- **反転(省略可)**  
&emsp;１を指定するとキャラクタパターンを左右反転します

テキストオブジェクトは次の形式で作成します

**書式:**
<pre>
appear(new <b>クラス名</b>( <b>x座標</b>, <b>y座標</b>, <b>テキスト</b>, <b>色</b>, <b>サイズ</b>))
</pre>

- **クラス名**  
&emsp;出現させるオブジェクトのクラスを指定します
- **テキスト**  
&emsp;出現したときのテキストの内容を文字列で指定します
- **色**  
&emsp;テキストの色を決めます。通常[color](#objectcolor)メソッドを使います。
- **サイズ**  
&emsp;文字の大きさを決めます。省略すると12です

**例1**
```
en=appear(new Enemy(x,y,$pat_enemy+3));
```

**例2**
 
Tama.tonyu
```
extends SpriteChar;
while(1) {
  x+=vx;y+=vy;
  update();
}
```

Jiki.tonyu
```
extends SpriteChar;
while(1) {
  if (getkey(32)==1) {
    t=new Tama(x,y,10); // t:出現させるオブジェクト
    // tの変数を初期化。←を押すと左方向、→を押すと右方向に飛んでいく
    if (getkey(37)) t.vx=-2;
    if (getkey(39)) t.vx=2;
    t.vy=-8;
    appear(t);
  }
  update();
}
```

***

## Object.clearAllValues
全ての数値を初期化します。

**書式**
```
clearAllValues()
```

全ての数値の初期化。

**(推奨されない関数)** clearAllValuesはTonyu Systemが自動的に呼び出します。  
プログラム中に記述するとゲームが正常に作動しないことが予想されます。

**例1**
```
clearAllValues();
```

▲ 全ての数値が初期化されます

***

## Object.color
[fillRect](./rf-sprite#spritefillrect)、[drawLine](./rf-sprite#spritedrawline)、[drawText](./rf-sprite#spritedrawtext)などで、描画色を指定します

**書式**
```
color(r,g,b)
```
- **r**  
&emsp;赤成分(0-255)
- **g**  
&emsp;緑成分(0-255)
- **b**  
&emsp;青成分(0-255)

**戻り値**

色を表す整数

**例1**
```
drawText(10,10,"赤巻き紙",color(255,50,50));
drawText(10,40,"青巻き紙",color(50,50,255));
drawText(10,70,"黄巻き紙",color(255,255,50));
```
また、次の8種類の色があらかじめ定義されています。


|変数名|色|colorメソッドによる定義|
|-|-|-|
|$clBlack|<span style="color: #000">■</span>|color(8, 8, 16)|
|$clRed|<span style="color: #f00">■</span>|color(255, 0, 0)|
|$clYellow|<span style="color: #ff0">■</span>|color(255, 255, 0)|
|$clGreen|<span style="color: #0f0">■</span>|color(0, 255, 0)|
|$clAqua|<span style="color: #0ff">■</span>|color(0, 255, 255)|
|$clBlue|<span style="color: #00f">■</span>|color(0, 0, 255)|
|$clPink|<span style="color: #f0f">■</span>|color(255, 0, 255)|
|$clWhite|<span style="color: #fff">■</span>|color(255, 255, 255)|

**参考**

[$clBlackの色が中途半端なのは](https://www.tonyu.jp/joyful/joyful.cgi?mode=res&no=5729)

**例2**
```
drawText(10,10,"赤巻き紙",$clRed);
drawText(10,40,"青巻き紙",$clBlue);
drawText(10,70,"黄巻き紙",$clYellow);
```

**参照**

[colorHSL](#objectcolorhsl)

***

## Object.colorHSL
色相、彩度、明度から色を作成します。

**書式**
```
colorHSL(h,s,l)
```
- **h**  
&emsp;色相
- **s**  
&emsp;彩度
- **l**  
&emsp;明度

***

## Object.cos
余弦(コサイン)を求めます。

**書式**
```
cos(t)
```
- **t**  
&emsp;度をあらわす整数(ラジアンではありません)

**戻り値**

t度の余弦を求めます。  
cosがどのような値をもっているかは、[angle,sin,cos,distの関係](./rf-angle-sin-cos-dist)を参照してください。

**例1**
 
例は[sin](#objectsin)メソッドに載っています。  
※sin,cosの計算は、三角関数表をあらかじめ用意しているため高速ですが、  
指定する角度は整数のみ有効です(角度の小数点以下は切り捨てられます)

**参照**

- [sin](#objectsin)メソッド  
- [angle](#objectangle)メソッド

***

## Object.deleteFile
ファイルを削除します

**書式**
```
deleteFile(fileName)
```
- **fileName**  
&emsp;削除するファイル名

**戻り値**

削除が成功ならば1、そうでなければ0

ファイルについては、[ファイルの扱いについて](./rf-file-handling)を参照してください。

***

## Object.designMode
現在設計中(実行コマンドを発行する前や、実行を停止した後)であれば真を返します。

**書式**
```
designMode()
```

***

## Object.dist
線分(0,0)-(x,y)の長さを求めます。

**書式**
```
dist(x,y)
```
- **x**  
&emsp;線分(0,0)-(x,y)のx
- **y**  
&emsp;線分(0,0)-(x,y)のy

**戻り値**

線分(0,0)-(x,y)の長さ

**例1**
```
extends SpriteChar;
while (1) {
  if (dist(x-$teki.x, y-$teki.y)<50) die();
  update();
}
```

▲ オブジェクト $teki との距離が50以下になるとdie(); が呼ばれます。

**参照**

[angle,sin,cos,distの関係](./rf-angle-sin-cos-dist)

***

## Object.fileExists
[ファイル](./rf-file-handling)が存在するかどうかを調べます。

**書式**
```
fileExists(f)
```
- **f**  
&emsp;ファイル名

**戻り値**

ファイルが存在すれば1、なければ0

***

## Object.floor
実数から整数への変換を、値を超えない最大の整数を得ることで行います。

**書式**
```
floor(r)
```
- **r**  
&emsp;実数値

**戻り値**

rを超えない最大の整数

※ rが正または0の場合、[trunc](#objecttrunc)(r)と同じ値を返しますが、負の場合はtrunc(r)-1 が返されます。

***

## Object.getBlue
[colorメソッドや色定数](#objectcolor)などの色を表す整数から青色の成分を取り出します。

**書式**
```
getBlue(c)
```
- **c**  
&emsp;色を表す整数

**戻り値**

c の青成分(0-255)

getBlueメソッドとcolorメソッドの関係は次のようになります。  
c = color(r,g,b) ならば、 getBlue( c ) == b

***

## Object.getClassName
オブジェクトのクラス名を得ます。

**書式**
```
getClassName()
```

**戻り値**

このオブジェクトのクラス名

***

## Object.getGlobal
グローバル変数の値を取得します

**書式**
```
getGlobal(n)
```
- **n**  
&emsp;変数名をあらわす文字列（$を含む)

**戻り値**

変数nの値

**例**
```
n="$Test";
t=getGlobal(n);
```

***

## Object.getGreen
[colorメソッドや色定数](#objectcolor)などの色を表す整数から緑色の成分を取り出します。

**書式**
```
getGreen(c)
```
- **c**  
&emsp;色を表す整数

**戻り値**

c の緑成分(0-255)

getGreenメソッドとcolorメソッドの関係は次のようになります。  
c = color(r,g,b) ならば、 getGreen( c ) == g

***

## Object.getRed
[colorメソッドや色定数](#objectcolor)などの色を表す整数から赤色の成分を取り出します。

**書式**
```
getRed(c)
```
- **c**  
&emsp;色を表す整数

**戻り値**

c の赤成分(0-255)

getRedメソッドとcolorメソッドの関係は次のようになります。  
c = color(r,g,b) ならば、 getRed( c ) == r

***

## Object.getTime
システムタイマの値（OS起動からの時間）をミリ秒単位で返します。

**書式**
```
getTime()
```

**戻り値**

システムタイマの値

***

## Object.getValueName
オブジェクトの持つ変数名を取り出します。

**書式**
```
getValueName(idx)
```
- **idx**  
&emsp;インデックスをあらわす整数。  
&emsp;インデックスは、この オブジェクトをオブジェクトインスペクタに表示させたときの、  
&emsp;一番上の変数が0で、順番に増えていきます。

**戻り値**

idx番目の変数の名前

***

## Object.getkey
キーボードのキーやマウスボタンが押されているかどうか判定します。

**書式**
```
getkey(i)
```
- **i**  
&emsp;調べたいキーのキーID

**戻り値**

0：押されていない  
1：今押されたばかり  
2以上：押しっぱなしになっている

主なキーのキーIDを示します。

|||
|-|-|
|1|マウスの左ボタン|
|2|マウスの右ボタン|
|4|マウスのホイールボタン|
|32|スペースキー|
|37|カーソルキー←|
|38|カーソルキー↑|
|39|カーソルキー→|
|40|カーソルキー↓|
|48-57|数字0-9(Q W E...の上段に並んでいるキー)|
|65-90|アルファベットA-Z|
|96-105|テンキーの0-9|
|16|左、右シフト（両方16)|

[その他のキーID](./rf-keycode)

**例1**
```
extends SpriteChar;
while (1) {
  if (getkey(32)>0) x+=1;
  update();
}
```

▲ スペースキーの状態が押されていると横移動します。

※その他のキーのキーIDの調べ方

1. 新規オブジェクト(新規クラス)を作成
1. オブジェクトをダブルクリックし、次のように入力して実行
1. 押しているキーのキーIDが表示される
```
extends SpriteChar;
while (1) {
  i=0;
  while(i<255) {
    if (getkey(i)) drawText(i,10,i,color(255,255,255));
    i=i+1;
  }
  update();
}
```

※Tonyuがアクティブでないときにgetkeyを無効にする

```
$Options.set("deactivate_disableKey",1);
```

参照： [$Options.set](./rf-options#optionsset)メソッド

***

## Object.inspect
オブジェクトをオブジェクトインスペクタに表示します。

**書式**
```
inspect()
```

***

## Object.isFloat
値が実数（浮動小数点数）であるか調べます

**書式**
```
isFloat(v)
```
- **v**  
&emsp;調べる値

**戻り値**

vが実数であれば0以外、そうでなければ0

***

## Object.isInt
値が整数であるか調べます

**書式**
```
isInt(v)
```
- **v**  
&emsp;調べる値

**戻り値**

vが整数であれば0以外、そうでなければ0

***

## Object.moveFile
ファイル名を変更します

**書式**
```
moveFile(from,to)
```
- **from**  
&emsp;変更前のファイル名
- **to**  
&emsp;変更後のファイル名

**戻り値**

変更が成功ならば1、そうでなければ0

***

## Object.print
[コンソールウィンドウ](./wnd-csl)とステータスバーに文字を出力します。

**書式**
```
print(v)
```
- **v**  
&emsp;表示する値

コンソールウィンドウはメニューの「ウィンドウ」＞「コンソール」 で表示できます。

**例1**
```
extends SpriteChar;
print(2+3);
print("Hello, world");
```

***

## Object.pset
ドット描画を行います。

**書式**
```
pset(x,y,c)
```
- **x,y,c**  
&emsp;指定した位置にドット描画を行います。  

**(使用できない関数)** 古いFormatに付き、現在は使用できないようになっています。

**例1**
```
pset(100,100,$clBlack);
```

▲ (100,100)に黒い点が現れます。

***

## Object.randomize
[rnd](#objectrnd)メソッドが生成する乱数の系列(乱数の発生順序)を設定します。

**書式**
```
randomize(seed)
```
- **seed(省略可能)**  
&emsp;乱数系列を表す整数( 0 ～ 16777215 )。 省略すると、システムタイマによって乱数系列が設定されます。

このseedの値によって、この後rndメソッドが返す値の順番が決まります。  
seedを省略した場合、プログラムを実行するたびにまったく違う乱数を返すことができます

**例1**
```
extends SpriteChar;
randomize();
while (1) {
  if (rnd(10)==0) {
    x=rnd()*$screenWidth;
    y=rnd()*$screenHeight;
  }
  update();
}
```

***

## Object.rnd
乱数(でたらめな数)を返します

**書式**
```
rnd(n)
```
- **n(省略可能)**  
&emsp;発生させる乱数の範囲。

**戻り値**

0 から n-1の整数乱数。nを省略すると0から1の実数乱数を返します。

**例1**
```
extends SpriteChar;
while (1) {
  if( rnd(10)==0) {
    x=rnd()*$screenWidth;
    y=rnd()*$screenHeight;
  }
  update();
}
```

▲ 10フレームに１回の確率で、画面上のいろいろな場所にオブジェクトが移動します。

実行のたびに違う順序で乱数を発生させるには[randomize](#objectrandomize)メソッドを使います。

***

## Object.sin
正弦(サイン)を求めます。

**書式**
```
sin(t)
```
- **t**  
&emsp;度をあらわす整数(ラジアンではありません)

**戻り値**

t度の正弦を求めます。  
sinがどのような値をもっているかは、[angle,sin,cos,distの関係](./rf-angle-sin-cos-dist)を参照してください。

**例1**
```
extends SpriteChar;
a=0;
while (1) {
  x=200+cos(a)*100;
  y=200+sin(a)*100; 
  a=a+10;
  update();
}
```

▲ オブジェクトが回転します。

※sin,cosの計算は、三角関数表をあらかじめ用意しているため高速ですが、  
指定する角度は整数のみ有効です(角度の小数点以下は切り捨てられます)

**参照**

- [cos](#objectcos)メソッド  
- [angle](#objectangle)メソッド

***

## Object.sqrt
平方根を得ます

**書式**
```
sqrt(x)
```
- **x**  
&emsp;正の数値

**戻り値**

√x

**例1**
```
extends TextChar;
while (1) {
  dx=x-$mouseX;
  dy=y-$mouseY;
  text=sqrt(dx*dx+dy*dy); 
  update();
}
```

▲ このオブジェクトとマウスカーソルの距離を計算します（本当は[dist](#objectdist)メソッドを使ったほうが楽です)

***

## Object.sub
減算関数。引き算を行います。

**書式**
```
sub(x,y)
```
- **x,y**  
&emsp;x-yの結果を出力します。

**戻り値**

x-y

**(使用できない関数)** 古いFormatに付き、現在は使用できないようになっています。

**例1**
```
sub(x,y);
print(sub(10,1));
```

▲ 10-1の結果の9を出力します。

***

## Object.timeStop
すべてのオブジェクトの動作を停止します。ただし、このメソッドを呼び出したオブジェクトだけ停止しません

**書式**
```
timeStop()
```

**戻り値**

新規作成された[TimeStopper](./rf-timestopper)オブジェクト。

TimeStopperオブジェクトは、止めた時間をふたたび動かす時に使います。

時間を動かすにはTimeStopperオブジェクトに対して、 [release](./rf-timestopper#timestopperrelease)メソッドや [releaseAll](./rf-timestopper#timestopperreleaseall)メソッドを 呼び出します。

**例1**

Ball.tonyu
```
extends SpriteChar;
while (x<$screenWidth) {
  x+=2;
  update();
}
```
Stop.tonyu
```
extends SpriteChar;
t=null;
while (1) {
  if (t==null) {// まだ時間をとめていなければ
    if (rnd(60)==0) appear(new Ball(0,rnd($screenHeight),19)); // 玉を出現させる
    if (getkey(32)==1) { //スペースキーが押されたら時間をとめる
      t=timeStop();
    }
  } else {
    // すでに時間をとめていたら
    if (getkey(32)==1) { //スペースキーが押されたら時間を動かす
      t.releaseAll();
      t=null;
    }
    // 玉にふれるとその玉は動き出す
    for (a in $chars) {
       if (a is Ball && crashTo(a)) t.release(a);
    }
  }
  if (getkey(39)>0) x+=3;
  if (getkey(37)>0) x-=3; 
  if (getkey(40)>0) y+=3;
  if (getkey(38)>0) y-=3;
  update(); 
}
```

***

## Object.trunc
実数から整数への変換を、小数部切捨てにより行います。

**書式**
```
trunc(r)
```
- **r**  
&emsp;実数値

**戻り値**

rの小数点を切り捨てた値

※ rが正または0の場合、[floor](#objectfloor)(r)と同じ値を返しますが、負の場合はfloor(r)+1 が返されます。

**例1**
```
extends SpriteChar;
x=10;
x=trunc(x/3);
print(x);
```

▲ xの値は10/3 = 3.333... の小数部を切り捨てた3になります

**参考：四捨五入**

次のようにすると、小数点以下を四捨五入します。
```
n=trunc(n+0.5);
```

***

## Object.valueOf
文字列から数値への変換を行います。

**書式**
```
valueOf(s)
```
- **s**  
&emsp;文字列 ( "123" "45.6" "-78" など)

**戻り値**

変換された値。文字列が数値を表していない場合null

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

