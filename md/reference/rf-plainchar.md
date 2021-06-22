
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - PlainChar</title>

## PlainCharクラス
画面上に表示されるオブジェクト(SpriteChar、DXChar、TextChar、SecretChar)の親クラスです。

これら4種類のオブジェクトに共通な変数やメソッドが用意されています。

このページで示したものの他にも、Spriteクラスのメソッド（描画命令）も使えます。併せて参照してください。

### メソッド一覧

|||
|-|-|
[onMouseDown](#plaincharonmousedown)|オブジェクト上でマウスが押されたときに特別な処理をしたいときにユーザが定義するメソッドです。
[onMouseDownForDesign](#plaincharonmousedownfordesign)|未稿
[onMouseDrag](#plaincharonmousedrag)|マウスボタンが押された状態で、オブジェクト上でマウスが動いたときに特別な処理をしたいときにユーザが定義するメソッドです。
[crashTo](#plaincharcrashto)|他のオブジェクトと衝突しているかどうかを判定します。
[crashAt](#plaincharcrashat)|未稿
[onDraw](#plaincharondraw)|オブジェクトに描画をするときに、特別な処理をする場合にユーザが定義するメソッドです。
[draw](#plainchardraw)|未稿
[onUpdate](#plaincharonupdate)|updateメソッド、updateExメソッドが呼び出されたときに特別な処理をしたいときにユーザが定義するメソッドです。
[update](#plaincharupdate)|オブジェクトの書き換え処理を行います。
[updateEx](#plaincharupdateex)|updateメソッドを指定した回数分実行します。これにより、指定したフレーム数だけ待機することができます。
[onDie](#plaincharondie)|オブジェクトが死んだときに特別な処理をしたいときにユーザが定義するメソッドです。
[die](#plainchardie)|オブジェクトを殺します。
[isDead](#plaincharisdead)|オブジェクトが死んでいるかどうかを判定します。
[wait](#plaincharwait)|オブジェクトの動作を一時的に停止し、待機状態にします。
[notify](#plaincharnotify)|waitメソッドで待機状態にあるオブジェクトの動作を再開します。
[setVisible](#plaincharsetvisible)|オブジェクトの表示・非表示を設定します。
[getVisible](#plainchargetvisible)|オブジェクトの表示・非表示状態を取得します。
[screenOut](#plaincharscreenout)|オブジェクトが画面外に出たかどうかを判定します。
[getScreenX](#plainchargetscreenx)|オブジェクトのスクリーン座標のx座標を得ます。
[getScreenY](#plainchargetscreeny)|オブジェクトのスクリーン座標のy座標を得ます。
[gotoScreen](#plainchargotoscreen)|オブジェクトの位置をスクリーン座標を用いて指定します。
[onAppear](#plaincharonappear)|実行開始時またはappearメソッドによりオブジェクトが出現したときに、特別な処理をする場合にユーザが定義するメソッドです。
[waitSelect](#plaincharwaitselect)|はい・いいえ選択用のウィンドウを開き、ユーザがウィンドウを閉じるまで処理を中断します。
[waitInput](#plaincharwaitinput)|文字入力用のウィンドウを開き、ユーザがボタン（「Ok」 または「キャンセル」）を押すまで処理を中断します。
[crashToLine](#plaincharcrashtoline)|オブジェクトと線分の衝突判定を行います。

***

## PlainChar.onMouseDown

オブジェクト上でマウスが押されたときに特別な処理をしたいときにユーザが定義するメソッドです。

**書式**
```
function onMouseDown(x,y,lb,rb) {
  処理内容
}
```
- **x**  
&emsp;マウスカーソルのx座標（ウィンドウの左端が0)
- **y**  
&emsp;マウスカーソルのy座標（ウィンドウの上端が0)
- **lb**  
&emsp;左ボタンがおされていれば1,そうでなければ0
- **rb**  
&emsp;右ボタンがおされていれば1,そうでなければ0

※ onMouseDownはユーザが直接呼び出さないでください。

<span style="color: #f00">※ このメソッドの中でupdateメソッドを呼ばないようにしてください</span>

***

## PlainChar.onMouseDownForDesign

未稿

**書式**
```
onMouseDownForDesign()
```

***

## PlainChar.onMouseDrag

マウスボタンが押された状態で、オブジェクト上でマウスが動いたときに特別な処理をしたいときにユーザが定義するメソッドです。

**書式**
```
function onMouseDrag(sx,sy,dx,dy,lb,rb) {
  処理内容
}
```
- **sx**  
&emsp;移動前のマウスカーソルのx座標（ウィンドウの左端が0)
- **sy**  
&emsp;移動前のマウスカーソルのy座標（ウィンドウの上端が0)
- **dx**  
&emsp;移動後のマウスカーソルのx座標（ウィンドウの左端が0)
- **dy**  
&emsp;移動後のマウスカーソルのy座標（ウィンドウの上端が0)
- **lb**  
&emsp;左ボタンがおされていれば1,そうでなければ0
- **rb**  
&emsp;右ボタンがおされていれば1,そうでなければ0

onMouseDragはユーザが直接呼び出さないでください。

<span style="color: #f00">※ onMouseDragの中でupdateメソッドを呼ばないようにしてください</span>

***

## PlainChar.crashTo

他のオブジェクトと衝突しているかどうかを判定します。

**書式**
```
crashTo(t)
```
- **t**  
&emsp;判定対象のオブジェクト

**戻り値**

tと衝突していれば真(0以外の値)、そうでなければ偽(0)

**例1**
```
extends SpriteChar;
while(1) {
  if (crashTo($Teki)) die();
  update();
}
```

▲ $Tekiとぶつかっていたら、die()メソッドを呼び、このオブジェクトが死にます。

※ crashToは自分で定義することもできます。  
これを利用して、当たり判定の大きさの調整などができます。

**例2**
```
extends SpriteChar;
function crashTo(t) {
  return dist(t.x-x,t.y-y)<50;
}
while(1) {
  if (crashTo($Teki)) die();
  update();
}
```

▲ この例では、他のオブジェクト(t)との距離が50未満のときにcrashToは真に（このオブジェクトとtがぶつかった）なります。

**関連**

for (xx in $chars)

***

## PlainChar.crashAt

未稿

**書式**
```
crashAt()
```

***

## PlainChar.onDraw

オブジェクトに描画をするときに、特別な処理をする場合にユーザが定義するメソッドです。

**書式**
```
function onDraw() {
  処理内容
}
```

onDrawはユーザが直接呼び出さないでください。

<span style="color: #f00">※ このメソッドの中でupdateメソッドを呼ばないようにしてください</span>

**例1**

```
function onDraw() {
  drawText(x,y-30,"Text",$clWhite);
}
```

▲ このようにすると、オブジェクトの上にTextという文字が表示されまず。  
(設計中でも表示されます)

<span style="color: #f00">※ このメソッド内部でエラーが起きると、設計時にオブジェクトが正しく表示されなくなります。  
その場合は、onDrawの部分を注釈にするなどして、表示の問題を回避してください。</span>

***

## PlainChar.draw

未稿

**書式**
```
draw()
```

***

## PlainChar.onUpdate

updateメソッド、updateExメソッドが呼び出されたときに特別な処理をしたいときにユーザが定義するメソッドです。

**書式**
```
onUpdate()
```
※ onUpdateはupdateメソッドから自動的に呼ばれます。ユーザが直接呼び出さないでください。

※ このメソッドの中でupdateメソッドを呼ぶことが可能です。但しその場合onUpdateが重複して呼ばれることはありません。

**例1**
```
function onUpdate() {
  drawText(x,y-10,"Text",color(255,255,255));  
}
```
▲ このように定義しておくと、オブジェクトの上にTextという文字が書かれるようになります。


***

## PlainChar.update

オブジェクトの書き換え処理を行います。

**書式**
```
update()
```

updateは１フレーム（コマ）が終了する毎に必ず呼び出してください。

通常のスプライトオブジェクトは、updateが呼ばれた時点で、次にあげる変数の内容にしたがってスプライトが描画されます。

- **x**  
&emsp;x座標
- **y**  
&emsp;y座標
- **p**  
&emsp;キャラクタパターン
- **f**  
&emsp;0でない数値の場合、元のキャラクタパターンを左右反転したパターンを描画する
- **zOrder**  
&emsp;このスプライトの表示順序を決める。描画時に、この値の小さいスプライトが手前にくるように描画される。

***

## PlainChar.updateEx

updateメソッドを指定した回数分実行します。これにより、指定したフレーム数だけ待機することができます。

**書式**
```
updateEx(t)
```
- **t**  
&emsp;update(); を呼び出す回数。

※ この命令はwaitメソッドと似ていますが、 updateExの実行中はフレーム毎にonUpdateメソッドが呼ばれます。

***

## PlainChar.onDie

オブジェクトが死んだときに特別な処理をしたいときにユーザが定義するメソッドです。

**書式**
```
function onDie() {
  処理内容
}
```

※ onDieは自動的に呼ばれます。ユーザが直接呼び出さないでください。

<span style="color: #f00">※ onDieの中でupdateメソッドを呼ばないようにしてください</span>

**例1**
```
function onDie() {
  $score=$score+10;
}
```

▲ このように定義しておくと、このオブジェクトが死ぬ度に$scoreが10増えます。

***

## PlainChar.die

オブジェクトを殺します。殺されたオブジェクトは次にupdate();が呼ばれた段階で処理を終了し、画面上から消えます。

**書式**
```
die()
```

**例1**
```
die();
```

▲ 自分自身が死にます

**例2**
```
$teki.die();
```
▲ オブジェクト$tekiが死にます

***

## PlainChar.isDead

オブジェクトが死んでいるかどうかを判定します。

**書式**
```
isDead()
```

**戻り値**

死んでいる場合は真(0以外の値)、そうでなければ偽(0)

※ このメソッドは1.09以前では isDied という名前でした。今後はisDeadを使用してください。  
互換性を保つため、isDied を使用したプログラムも従来通り動作するようになっています。

dieメソッドが呼ばれるか、プログラムの最後に到達すると そのオブジェクトは死んだとみなされます、

**例1**

Object1.tonyu
```
extends SpriteChar;
i=0;
while (i<100) {
  i+=1;update();
}
```
Object2.tonyu
```
extends SpriteChar;
while (! $Object1.isDead()) {
  x+=1; update();
}
```

▲ この例では、$Object1は100フレームたつとプログラムが終了し、死にます。  
$Object2は$Object1が死ぬのを監視しながら、$Object1が死んでない間移動を続け $Object1が死ぬと一緒に死にます。

***

## PlainChar.wait

オブジェクトの動作を一時的に停止し、待機状態にします。

**書式**
```
wait(frames)
```
- **frames(省略可能)**  
&emsp;待機するフレーム数。省略するとnotify()が呼ばれるまで永久に待機する。

**例1**
```
extends SpriteChar;
while(1) {
  x+=8;
  wait(8);
}
```
▲ 8フレームに1回、8ドット横に移動します。

updateExメソッドと異なり、待機中はonUpdateメソッドは呼ばれませんが、  
updateExより処理が軽くなります。

***

## PlainChar.notify

waitメソッドで待機状態にあるオブジェクトの動作を再開します。

**書式**
```
notify()
```

**例1**

WaitObj.tonyu ($waitObj)
```
extends SpriteChar;
wait();
while(1) {
  x+=8;
  wait(8);
}
```

NotifyObj.tonyu ($notifyObj)
```
extends SpriteChar;
while(getkey(32)==0) {
  update();
}
$waitObj.notify();
```

▲ $waitObjは、プログラム開始時にwait()によって待機状態になります。  
スペースキーを押すと、$notifyObjが$waitObjに対してnotify() を呼び、 $waitObjの動作が始まります。

***

## PlainChar.setVisible

オブジェクトの表示・非表示を設定します。

**書式**
```
setVisible(v)
```
- **v**  
&emsp;0= 非表示、 1= 表示

**例1**
```
extends SpriteChar;
while(1) {
  setVisible(0);
  update();
  setVisible(1);
  update();
}
```

▲ オブジェクトが高速に点滅します

***

## PlainChar.getVisible

オブジェクトの表示・非表示状態を取得します。

**書式**
```
getVisible()
```

**戻り値**

0: 非表示、 1以外: 表示

**参考**

setVisible

***

## PlainChar.screenOut

オブジェクトが画面外に出たかどうかを判定します。

**書式**
```
screenOut()
```

**戻り値**

画面外に出ていない場合は0、 画面外に出ている場合は0より大きい値を返す。  
その値は x方向にはみだしたドット数＋y方向にはみだしたドット数

**例1**
```
extends SpriteChar;
while(1) {
  if (screenOut()>0) die();
  if (getkey(39)>0) x+=3;
  if (getkey(37)>0) x-=3;
  if (getkey(40)>0) y+=3;
  if (getkey(38)>0) y-=3;
  update();
}
```

▲ カーソルキーでオブジェクトを動かしていくと、画面外に出た瞬間に死亡します  
なお、 if (screenOut()>0) die(); は if (screenOut()) die(); と書いても同じ動作をします。

***

## PlainChar.getScreenX

オブジェクトのスクリーン座標のx座標を得ます。

**書式**
```
getScreenX()
```

**戻り値**

スクリーン座標(x座標)

※スクリーン座標についてはスクロールのサンプルを参考してください。

**例1**

ここに書いてあるプログラムは、実行する前に画面にマップを描くことをおすすめします(チュートリアル参照)

```
extends SpriteChar;
while(1) {
  if (getkey(39)>0 && getScreenX()<$screenWidth-16) x+=3;
  if (getkey(37)>0 && getScreenX()>16) x-=3; 
  if (getkey(40)>0 && getScreenY()<$screenHeight-16) y+=3;
  if (getkey(38)>0 && getScreenY()>16) y-=3;
  $map.scrollTo(0,t);
  y-=1;
  t-=1;
  update();
}
```
▲ この例では、カーソルキーでオブジェクトを動かしますが、 スクロール位置に関係なく画面端を飛び出さないようにします。  
※試しにgetScreenY()をyに変えてみると、しばらくすると上に動けなくなります。

***

## PlainChar.getScreenY

オブジェクトのスクリーン座標のy座標を得ます。

**書式**
```
getScreenY()
```

**戻り値**

スクリーン座標(y座標)

※スクリーン座標についてはスクロールのサンプルを参考してください。

**例1**

getScreenX参照

***

## PlainChar.gotoScreen

オブジェクトの位置をスクリーン座標を用いて指定します。

**書式**
```
gotoScreen(xx,yy)
```
- **xx**  
&emsp;移動先x座標（スクリーン座標）
- **yy**  
&emsp;移動先y座標（スクリーン座標）

※スクリーン座標についてはスクロールのサンプルを参考してください。

**例1**

ここに書いてあるプログラムは、実行する前に  
画面にマップを描くことをおすすめします(チュートリアル参照)
```
extends SpriteChar;
sx=x;sy=y;
while (1) {
  gotoScreen(sx,sy);
  $map.scrollTo(0,t);
  t-=1;
  update();
}
```

▲ この例では、プログラム開始時の位置をsx,syに覚えた後、 その場にとどまりつづけます。
スクロールしても画面上での位置は変わりません

***

## PlainChar.onAppear

実行開始時またはappearメソッドによりオブジェクトが出現したときに、  
特別な処理をする場合にユーザが定義するメソッドです。

**書式**
```
function onAppear() {
  処理内容
}
```
※ onAppearはユーザが直接呼び出さないでください。

<span style="color: #f00">※ このメソッドの中でupdateメソッドを呼ばないようにしてください。</span>

***

## PlainChar.waitSelect

はい・いいえ選択用のウィンドウを開き、ユーザがウィンドウを閉じるまで処理を中断します。

**書式**
```
waitSelect(prompt,title)
```
- **prompt**  
&emsp;質問文
- **title**  
&emsp;文字入力用のウィンドウのタイトルバーに表示する文字列

**戻り値**

「はい」を押したなら1 「いいえ」を押すか、ウィンドウ右上のxでウィンドウを閉じた場合0

※ 処理を中断したくないときは$SelectBox.openを用います。

※ onMouseDown,onMouseDragメソッドの中ではこのメソッドを呼ばないでください

**例1**
```
extends TextChar;
text="ここは武器屋です";
if (waitSelect("剣を買いますか")) {
  text="ありがとうございました";
} else {
  if (waitSelect("それでは、もっといい剣を買いますか")) {
    text="お金がたりません";
  } else {
    text="またどうぞ";
  }
}
wait();
```

***

## PlainChar.waitInput

文字入力用のウィンドウを開き、ユーザがボタン（「Ok」 または「キャンセル」）を押すまで処理を中断します。

**書式**
```
waitInput(title,prompt,default)
```
- **title**  
&emsp;文字入力用のウィンドウのタイトルバーに表示する文字列
- **prompt**  
&emsp;プロンプト部分（入力部分のすぐ上）に表示する文字列。改行文字(\n)を使うと複数行表示できます。
- **default**  
&emsp;入力部分にあらかじめ入っている文字列

**戻り値**

入力された文字列。 ユーザが「Ok」「キャンセル」のどちらを押したかは$InputBox.getStatusで調べることができます。

処理を中断したくないときは$InputBox.openを用います。  
onMouseDown,onMouseDragメソッドの中ではこのメソッドを呼ばないでください

**例1**
```
extends SpriteChar;
while (1) {
  // rに入力結果をいれる
  r=waitInput("どっちへいきますか","\"L\":←  \"R\":→ "); 
  if ($InputBox.getStatus()==2) die(); // キャンセル押したら死亡
  if (r=="Left") { // "Left" を入力したら 、左に移動
    for (i=0 ; i<16 ; i++) {
      x--;
      update();
    }
  }
  if (r=="Right") { // "Right" を入力したら 、左に移動
    for (i=0 ; i<16 ; i++) {
      x++;
      update();
    }
  }
  update();
}
```

***

## PlainChar.crashToLine

オブジェクトと線分の衝突判定を行います。

**書式**
```
crashToLine(sx,sy,dx,dy,width,xx,yy)
```
- **sx**  
&emsp;始点のx座標
- **sy**  
&emsp;始点のy座標
- **dx**  
&emsp;終点のx座標
- **dy**  
&emsp;終点のy座標
- **width**  
&emsp;線分の幅
- **xx(省略可能)**  
&emsp;判定する点のx座標。省略するとオブジェクトのxの値
- **yy(省略可能)**  
&emsp;判定する点のy座標。省略するとオブジェクトのyの値

**戻り値**

(sx,sy)と(dx,dy)を結ぶ、幅がwidthドットの線分と点(xx,yy)がぶつかっていれば 真(0でない値)。そうでなければ偽 (0)

※ (sx,sy)と(dx,dy) が一致してしまうとエラーになります

**例1**

LineRoll.tonyu
```
extends SpriteChar;
a=0;
while (1) {
  sx=x+cos(a)*100;
  sy=y+sin(a)*100;
  drawLine(x,y,sx,sy,$clWhite);
  update();
  a+=rnd(10);
}
```
Jiki.tonyu
```
extends SpriteChar;
while(1) {
  if (getkey(39)>0) x+=3;
  if (getkey(37)>0) x-=3; 
  if (getkey(40)>0) y+=3;
  if (getkey(38)>0) y-=3;
  if (crashToLine($LineRoll.x,$LineRoll.y,$LineRoll.sx,$LineRoll.sy,10)) {
    die();
  }
  update();
}
```

***

## 変数x

オブジェクトのx座標をあらわす変数です

***

## 変数y

オブジェクトのy座標をあらわす変数です

***

## 変数zOrder

複数のオブジェクトが重なった場合、この値が小さいオブジェクトのほうが手前に表示されます。

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

