
[←前](./tr-maze01.md)&emsp;[次→](./tr-maze03.md)&emsp;[チュートリアル](./tutorial.md)&emsp;[Wikiトップ](./)

<title>チュートリアル - 実践編 - 迷路ゲーム (2/7) - 自機を動かす</title>

### チュートリアル - 実践編 - 迷路ゲーム (2/7)
## 自機を動かす

### 自機を作る

自機を作ってみましょう。オブジェクトを作るを参考にオブジェクトを作成します

![mkmychar.png](./img/mkmychar.png)

オブジェクトのキャラクタパターンを指定するを参考に、自機のパターンを指定します。  
先ほど用いたSamplesの下のMaze.bmpを使います

![sel-patmy-m.png](./img/sel-patmy-m.png)

### 自機の動きを定義する

自機をダブルクリックし、次のように入力します。

```
extends SpriteChar;
while(1) {
  if (getkey(39)>0) x+=3;
  if (getkey(37)>0) x-=3;
  update();
}
```

実行してみましょう。カーソルキーの右と左で自機を動かせます。

### 下に落ちる

しかし、これだと自機が空中に浮いています。  
下に落ちる処理を付け加えて見ましょう。

```
extends SpriteChar;
while(1) {
  if (getkey(39)>0) x+=3;
  if (getkey(37)>0) x-=3;
  y+=3;
  update();
}
```

これで実行すると、自機はどんどん下におちていきます。

### 床やはしごの判定を加える

今度は、ずっと落ちっぱなしですね。  
床やはしごにあたったら止まるようにしないといけません。

```
extends SpriteChar;
while(1) {
  if (getkey(39)>0) x+=3;
  if (getkey(37)>0) x-=3;
  if ($map.getAt(x,y)==$pat_Maze+1) y+=3;
  update();
}
```

ここで新しく$map.getAt(x,y)という命令がでてきますが、これは

「(x,y)地点にあるマップのキャラクタパターンを返す」

という働きがあります

(x,y)とは自分のいる地点ですから、  
自分が床でもはしごでもない場所（紺色の空間）にいる場合だけ落ちるようにすればよいのです。

### めり込みを修正する

さて、実行させてみると、確かに床で止まるのですが、  
ちょっとめりこんだ格好になっています。

この仕組みを説明しましょう。次の図をみてください。

![merikomi.png](./img/merikomi.png)

これで、すこしめりこんだ理由はわかったでしょうか  
めりこまないようにするには、もう少し下の点で判定をすればよいのです。

![merikomi2.png](./img/merikomi2.png)

```
extends SpriteChar;
while(1) {
  if (getkey(39)>0) x+=3;
  if (getkey(37)>0) x-=3;
  if ($map.getAt(x,y+16 )==$pat_Maze+1) y+=3;
  update();
}
```

さて、これでうごかしてみましょう。 まだ足りないものがあります。  
はしごを使っての上下移動ができません。

そこで、自分がはしごの上にいたら上下キーで移動できるようにしましょう

```
extends SpriteChar;
while(1) {
  if (getkey(39)>0) x+=3; 
  if (getkey(37)>0) x-=3;
  if ($map.getAt(x,y+16)==$pat_Maze+1) y+=3;
  if ($map.getAt(x,y)==$pat_maze+2) {
     if (getkey(40)>0) y+=3;
     if (getkey(38)>0) y-=3;
  }
  update();
}
```

追加した部分の解説をします。

```
 if ($map.getAt(x,y)==$pat_maze+2) {
```

↑ここは、自分のいる場所にはしご（キャラクタパターン番号：$pat_maze+2)があるかどうかの判定です

はしごがある場合はif文の中の処理を行います


```
if (getkey(40)>0) y+=3;   
if (getkey(38)>0) y-=3;
```

↑それぞれ、上や下がおされたら上または下に移動します。

実行させてみましょう。  
とりあえずはしごを使って上下移動ができるようですが...  
ずっと下を押していたら、壁にめりこんでしまいました。

![merikomi3.png](./img/merikomi3.png)

プログラムをもう一度みてみましょう

```
extends SpriteChar;
while(1) {
  if (getkey(39)>0) x+=3;
  if (getkey(37)>0) x-=3;
  if ($map.getAt(x,y+16)==$pat_Maze+1) y+=3;
  if ($map.getAt(x,y)==$pat_maze+2) {
    if (getkey(40)>0) y+=3;
    if (getkey(38)>0) y-=3; 
  }
  update();
}
```

下を押したら、下に移動するという処理は

```
 if (getkey(40)>0) y+=3;
```

でやっていますが、  ここに「下のほうに壁があったらとまる」という 判定を加えたほうがよさそうです。  
逆にいえば「下が押されていて、かつ下に壁がなかったら、下に移動できる」と書けばよいのです。  
先ほどの

```
 if ($map.getAt(x,y+16)==$pat_Maze+1) y+=3;
```

という処理は 「下になにもない空間があった場合、下に移動する（落ちる）」 という処理でした。  
これにならって、次のようにかきなおします

```
extends SpriteChar;
 while(1) {
  if (getkey(39)>0) x+=3;
  if (getkey(37)>0) x-=3;
  if ($map.getAt(x,y+16)==$pat_Maze+1) y+=3;
  if ($map.getAt(x,y)==$pat_maze+2) {
    if (getkey(40)>0  && $map.getAt(x,y+16)!=$pat_Maze+0 ) y+=3; 
    if (getkey(38)>0) y-=3;
  }
  update();
}
```

実行させてみましょう。自機の動きはひとまず完成です。

***

[←前](./tr-maze01.md)&emsp;[次→](./tr-maze03.md)&emsp;[チュートリアル](./tutorial.md)&emsp;[Wikiトップ](./)
