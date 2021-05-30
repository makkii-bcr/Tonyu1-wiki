

[←前](./tr-stg05.md)&emsp;[次→](./tr-stg07.md)&emsp;[チュートリアル](./tutorial.md)&emsp;[Wikiトップ](./)

<title>チュートリアル - 実践編 - シューティングゲーム (6/11) - 敵を破壊する</title>

### チュートリアル - 実践編 - シューティングゲーム (6/11)
## 敵を破壊する

### 敵と弾がぶつかったら、敵が死ぬ

自機がやられっぱなしではゲームになりませんので、敵も破壊されるようにしましょう。  
敵が弾に当たったら敵が死ぬようにすればいいのですから、自機を破壊するを参考にこんなプログラムを思いつくかもしれません。  
敵をクリックして、次のような行を追加します。

<pre>
extends SpriteChar;
while (y<$screenHeight) {
  y=y+2;
  <span style="color: #f00">if (crashTo($tama)) die();</span>
  if (crashTo($myChar)) $myChar.die();
  update();
}
</pre>

しかし、これで実行しても、敵は死んでくれません。  
この文は「$tamaが当たったら(敵が)死ぬ」ということを意味しています。  
$tamaとは、設計時に作った弾(実行を止めても画面上にいるオブジェクト)で、  
しかも$tamaは実行するとすぐ上に飛んで行って消えてしまいます。

一方、自分が撃つ弾は、実行時に新しく発生しているものなので、$tamaというように名前をつけることができません。  
しかも弾が画面上にいくつあるのかも状況によって変わってきます。  
そこで、実行時に作られたオブジェクトを参照するための仕組みが必要となります。  
それが

```
for (xx in $chars) {}
```

という文です。さっきの行を消して次のように書いてみましょう。

<pre>
extends SpriteChar;
while (y<$screenHeight) {
  y=y+2;
  <span style="color: #f00">for (t in $chars) {
    if ( t is Tama && crashTo(t) ) die();
  }</span>
  if (crashTo($myChar)) $myChar.die();
  update();
}
</pre>

まず、最初の行

```
  for (t in $chars) {
```

について解説します これは、今画面上にいる全部のオブジェクトを調べ上げて、変数tに順番代入しながら、内の文を実行します。  
例えば、今画面に自機と敵が１つづつ、弾が２つあるとします。  
すると、 for (t in $chars) {は まずtに自機オブジェクトを代入し、{ }内の文を実行します。  
それが終わると今度はtに敵オブジェクトを代入し、同様に実行し、  
さらに弾オブジェクトの１個目を代入し実行  
さらに弾オブジェクトの２個目を代入し実行  
という処理を行います。  
(※ただし、どのオブジェクトが何番目に代入されるかは決まっていません)

次に{}内の処理について解説します。

```
    if ( t is Tama && crashTo(t) ) die();
```

ifの条件部が&&で区切られているので、"t is Tama"と、"crashTo(t)"が両方成り立ったときだけ、ifの条件部が成立します（自機を動かす参照)  
t is Tama という式は、オブジェクトtのクラスがTamaであるかという判定を行います。  
前述のとおり、 for (t in $chars) {は、画面上の「全部の」オブジェクトを順番に代入していくので、そこには弾以外の自機や敵も含まれます。  
弾に当たった場合にだけ破壊されなければならないので、tが弾オブジェクトであるかの判定が必要となります。  
つまり ( t is Tama && crashTo(t) )は、tが弾で、その弾にぶつかっていれば、という意味になります。  
そして、この条件が成り立つと die();によって敵自身が死にます。

実行してみましょう。敵を弾に当てると敵が死ぬようになりました。

### 敵の爆発パターンを作る

敵にも爆発パターンつけてみましょう（自機を破壊する参照)

<pre>
extends SpriteChar;
<span style="color: #f00">function onDie() {
  appear(new Bomb(x , y ,$pat_Sample+4));
}</span>
while (y<$screenHeight) {
  y=y+2;
  for (t in $chars) {
    if ( t is Tama && crashTo(t) ) die();
  }
  if (crashTo($myChar)) $myChar.die();
  update();
}
</pre>

***

[←前](./tr-stg05.md)&emsp;[次→](./tr-stg07.md)&emsp;[チュートリアル](./tutorial.md)&emsp;[Wikiトップ](./)
