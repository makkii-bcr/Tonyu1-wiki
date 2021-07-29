

[←前](./tr-stg03)&emsp;[次→](./tr-stg05)&emsp;[チュートリアル](./tutorial)&emsp;[Wikiトップ](./)

<title>チュートリアル - 実践編 - シューティングゲーム (4/11) - 敵を出現させる</title>

### チュートリアル - 実践編 - シューティングゲーム (4/11)
## 敵を出現させる

### UFOを作る

この敵はすぐ下に消えてしまうので、次々と新しいオブジェクトを出現させる仕組みを作ります。

ここでは、UFOを作り、UFOから敵があらわれるという設定にします。 [オブジェクトを作る](./tr-basic02)を参考にUFOのオブジェクトを作成します

![mkufo.png](./img/mkufo.png)

キャラクタパターンを設定します。

![mkufop.png](./img/mkufop.png)

ダブルクリックして次のように動きを記述します。

```
extends SpriteChar;
while(1) {
  while(x<$screenWidth) {
    x=x+2;
    update();
  }
  while(x>0) {
    x=x-2;
    update();
  }
}
```

実行させると、UFOが画面を横方向に往復します。

### UFOから敵が出現する

さらに、このUFOから敵が出現するようにします。

<pre>
extends SpriteChar;
while(1) {
  while(x<$screenWidth) {
    x=x+2;
    <span style="color: #f00">if (rnd(100)==0) appear(new Enemy(x,y,$pat_Sample+2));</span>
    update();
  }
  while(x>0) {
    x=x-2;
    update();
  }
}
</pre>

追加した部分について解説します。

```
 if (rnd(100)==0) ..
```

[rnd](./rf-object#objectrnd)(100)は、0から99までの整数乱数を返します。その値が0のとき、つまり100分の１の確率でifの後ろが実行されます。

```
 .. appear(new Enemy(x,y,$pat_Sample+2));
```

これによって、敵クラス(Enemy)のオブジェクトが作成されます。 出現場所はUFOのいる場所、キャラクタパターンは $pat_Sample+2 ()です ([弾を撃つ](./tr-stg02)参考)

上の処理では、左から右に移動しているときしか敵が出現しません。 右から左に移動中にもこの処理を挿入する必要があります。

<pre>
extends SpriteChar;
while(1) {
  while(x<$screenWidth) {
    x=x+2;
    if (rnd(100)==0) appear(new Enemy(x,y,$pat_Sample+2));
    update();
  }
   
  <span style="color: #f00">while(x>0) {
    x=x-2;
    if (rnd(100)==0) appear(new Enemy(x,y,$pat_Sample+2));
    update();
  }</span>
}
</pre>

### メソッドを定義する

このプログラムでは敵を出現させるために、全く同じ処理を２箇所に書いたことになります。  
これでもプログラムは正しく動くのですが、いくつか不便な点があります。  
例えば出現確率を変えたいとか、敵のキャラクタパターンを変えたいとかいったときに、両方書き換える必要があります。

そこで、この敵出現処理をまとめることを行います。

<pre>
extends SpriteChar;

<span style="color: #f00">function appearEnemy() {
  if (rnd(100)==0) appear(new Enemy(x,y,$pat_Sample+2));
}</span>

while(1) {
  while(x<$screenWidth) {
    x=x+2;
    <span style="color: #f00">appearEnemy();</span>
    update();
  }
  while(x>0) {
    x=x-2;
    <span style="color: #f00">appearEnemy();</span>
    update();
  }
}
</pre>

まず、一番上に書いた部分について解説します。

```
function appearEnemy() {
  if (rnd(100)==0) appear(new Enemy(x,y,$pat_Sample+2));
}
```

これは[メソッド](./rf-method-define)と呼ばれ、ある処理に名前をつけて何度も使えるようにしたものです。  
ここでは、1/100の確率で敵を出現させる処理に appearEnemyという名前（メソッド名）をつけています。  
この部分は、最初にいきなり実行されるわけではなく、あとからこのメソッドを呼び出すことによって実行されます。

その呼び出しを行うのが、下のほうに書いた

```
appearEnemy();
```

です。このように

#### 書式メソッドの呼び出し
```
メソッド名();
```

と書くことで、いつでもメソッドを呼ぶことができます。

試しに、敵の出現確率を1/50に変えてみましょう。それにはappearEnemyの一箇所を書き換えればよいのです。  
このようにメソッドを使って、よく使う処理をまとめておくと、後で修正が楽になります。

<pre>
extends SpriteChar;
function appearEnemy() {
  if (rnd(<span style="color: #f00">50</span>)==0) appear(new Enemy(x,y,$pat_Sample+2));
}
while(1) {
  while(x<$screenWidth) {
    x=x+2;
    appearEnemy();
    update();
  }
  while(x>0) {
    x=x-2;
    appearEnemy();
    update();
  }
}
</pre>

***

[←前](./tr-stg03)&emsp;[次→](./tr-stg05)&emsp;[チュートリアル](./tutorial)&emsp;[Wikiトップ](./)
