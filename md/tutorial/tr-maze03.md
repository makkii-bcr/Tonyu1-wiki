
[←前](./tr-maze02)&emsp;[次→](./tr-maze04)&emsp;[チュートリアル](./tutorial)&emsp;[Wikiトップ](./)

<title>チュートリアル - 実践編 - 迷路ゲーム (3/7) - 敵を動かす</title>

### チュートリアル - 実践編 - 迷路ゲーム (3/7)
## 敵を動かす


敵を作ってみましょう 敵は次にあげるようなごく単純な動きしかしないものとします

- 左右移動しかしない
- 画面端にくるか、一定の確率で移動方向が反転する

### 敵を作る

[オブジェクトを作る](./tr-basic02)を参考にオブジェクトを作成します

![new-enemy.png](./img/new-enemy.png)

[オブジェクトのキャラクタパターンを指定する](./tr-basic06)を参考に、自機のパターンを指定します。  
先ほど用いたSamplesの下のMaze.bmpを使います

![selenemy.png](./img/selenemy.png)

### 敵の動きを定義する

敵をダブルクリックし、次のように入力します。

```
extends SpriteChar;
vx=2;
while(1) {
  x+=vx;
  if (x<0) vx=2; 
  if (x>$screenWidth) vx=-2;
  if (rnd(500)==0) vx=-vx;
  update();
}
```

実行してみましょう。  
左に進んでいるとき、向きが反対になっています。  
そこで、次のような部分を追加してください

<pre>
extends SpriteChar;
vx=2;
while(1) {
  x+=vx;
  if (x&lt;0) vx=2;
  if (x&gt;$screenWidth) vx=-2;
  if (rnd(500)==0) vx=-vx;
  <span style="color: #f00">if (vx&lt;0) f=1; else f=0;</span>
  update();
}
</pre>

変数fは、0以外の値を設定すると、パターンが左右反転します。

### 敵をたくさん配置する

敵が１匹ではおもしろくないので、敵をたくさん配置してみましょう。  
まず敵をクリックし、そのあとメニューの 「オブジェクト」＞「コピー」を選んでください  
さらに、 「オブジェクト」＞「貼り付け」を選んでください  
敵がふえました。 この要領で敵をいくつか配置してみてください。


***

[←前](./tr-maze02)&emsp;[次→](./tr-maze04)&emsp;[チュートリアル](./tutorial)&emsp;[Wikiトップ](./)
