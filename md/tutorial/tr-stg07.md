

[←前](./tr-stg06)&emsp;[次→](./tr-stg08)&emsp;[チュートリアル](./tutorial)&emsp;[Wikiトップ](./)

<title>チュートリアル - 実践編 - シューティングゲーム (7/11) - 敵の動きに変化をつける</title>

### チュートリアル - 実践編 - シューティングゲーム (7/11)
## 敵の動きに変化をつける

### 新しい動きを追加する

今の敵は、上から下に直線で飛んでくるだけなので、ちょっと変わった動きをつけましょう

途中までは今までどおり下に飛んできて、その後自機のいる方向に曲がって飛んでくるようにします。  
敵をダブルクリックして、次のようにかきかえましょう。

<pre>
extends SpriteChar;
function onDie() {
  appear(new Bomb(x , y ,$pat_Sample+4));
}

<span style="color: #f00">nexty=rnd(50)+100;</span>
while (y< nexty ) {
  y=y+2;
  for (t in $chars) {
    if ( t is Tama && crashTo(t) ) die();
  }
  if (crashTo($myChar)) $myChar.die();
  update();
}

<span style="color: #f00">if (x<$myChar.x) vx=2; else vx=-2;
while (y<$screenHeight) {
  y=y+3;
  x=x+vx;
  update();
}</span>
</pre>

変更した部分を順番に見ていきましょう

```
 nexty=rnd(50)+100;
```

まず rnd(50)は、敵を出現させるでも登場した、乱数を返すメソッドです。  
この場合、0から49の整数の乱数が返されます。  
それに100が加算されるので結果として、nextyには100から149の乱数が代入されます。  
次のwhileの条件が変わっています

```
 while (y< nexty ) {
```

yがnextyより小さい(nextyより上)にいるまでは、先ほどまでと同じ処理をするようになります。  
つまり、上のほうにいるときはまっすぐ降りてきます。

そして、動きが変化するところでは、次のような処理を行います

```
 if (x<$myChar.x) vx=2; else vx=-2;
```

vxは、後で説明するように、移動方向のx成分です。

**x<$myChar.x**ならば（つまり、敵の位置が自機より左なら）右に移動するために、  
vx=2のように移動方向を正の値(右方向)にします。

その後ろについている elseは「そうでなかったら」という意味です。  
すなわち x<$myChar.x**でない**ならば（つまり、敵の位置が自機より右なら）左に移動するために、  
vx=-2のように移動方向を負の値(左方向)にします。

上のようにしてvxを設定し、次の処理で実際に移動を行います。

```
while (y<$screenHeight) {
  y=y+3;
  x=x+vx;
  update();
}
```

### 追加した部分でも当たり判定を行う

しかし、これで実行させるとわかりますが、敵が曲がった後、当たり判定（自機が破壊される、弾にあたるとやられる）がまったくなくなってしまいます。  
曲がった後のwhileの中で当たり判定の処理を書き忘れているためです。  
そこで、最初のwhileで書いてある当たり判定の処理をコピーして持ってきましょう。

<pre>
extends SpriteChar;
function onDie() {
  appear(new Bomb(x , y ,$pat_Sample+4));
}
nexty=rnd(50)+100;
while (y&lt;nexty) {
  y=y+2;
  for (t in $chars) {
    if ( t is Tama && crashTo(t) ) die();
  }
  if (crashTo($myChar)) $myChar.die();
  update();
}
if (x<$myChar.x) vx=2; else vx=-2;
while (y<$screenHeight) {
  y=y+3;
  x=x+vx;
  <span style="color: #f00">for (t in $chars) {
    if ( t is Tama && crashTo(t) ) die();
  }
  if (crashTo($myChar)) $myChar.die();</span>
  update();
}
</pre>

メソッドを使うともっと整理できます。  
当たり判定を行うatariHanteiメソッドを作成してみましょう。

<pre>
extends SpriteChar;
function onDie() {
  appear(new Bomb(x, y, $pat_Sample+4));
}

<span style="color: #f00">function atariHantei() {
  for (t in $chars) {
    if ( t is Tama && crashTo(t) ) die();
  }
  if (crashTo($myChar)) $myChar.die();
}</span>

nexty=rnd(50)+100;
while (y&lt;nexty) {
  y=y+2;
  <span style="color: #f00">atariHantei();</span>
  update();
}
if (x<$myChar.x) vx=2; else vx=-2;
while (y<$screenHeight) {
  y=y+3;
  x=x+vx;
  <span style="color: #f00">atariHantei();</span>
  update();
}
</pre>

***

[←前](./tr-stg06)&emsp;[次→](./tr-stg08)&emsp;[チュートリアル](./tutorial)&emsp;[Wikiトップ](./)
