

[←前](./tr-stg04)&emsp;[次→](./tr-stg06)&emsp;[チュートリアル](./tutorial)&emsp;[Wikiトップ](./)

<title>チュートリアル - 実践編 - シューティングゲーム (5/11) - 自機を破壊する</title>

### チュートリアル - 実践編 - シューティングゲーム (5/11)
## 自機を破壊する

### 敵と自機がぶつかったら、自機が死ぬ

敵を作りましたが、このままでは弾があたっても、自機がぶつかっても何もおきません。  
まず、敵が自機にあたると自機が破壊されるようにしましょう

敵オブジェクトをダブルクリックして、次の行を追加します

<pre>
extends SpriteChar;
while (y<$screenHeight) {
  y=y+2;
  <span style="color: #f00">if (crashTo($MyChar)) $MyChar.die();</span>
  update();
}
</pre>

まずifの条件部から見ていきましょう

```
if (crashTo($MyChar)) ...
```

[crashTo](./rf-plainchar#plaincharcrashto)は、この敵が自機($MyChar)に当たっているかという判定を行います。 当たっている場合はif文の後ろが実行されます。  
なお、自機の名前は、自機をクリックし、オブジェクトインスペクタで確認できます。

![mycharname.png](./img/mycharname.png)

ぶつかった場合の処理は次のようになります

```
... $MyChar.die();
```

これによって自機が死にます。

xx.[die](./rf-plainchar#plainchardie)();は、xxで表されるオブジェクトを殺す命令で、殺されたオブジェクトはただちに処理が止まり、画面上からいなくなります。

それでは実行してみましょう。敵が自機にふれると、自機が消えてしまいました。

### 爆発パターンを作る

しかし、いきなり消えるのはあっけないので、爆発するアニメーションをつけてみましょう。

新規オブジェクトを作成します。

![mkbomb.png](./img/mkbomb.png)

キャラクタパターンを、爆発パターンの一番先頭のパターンにします。

![mkbombp.png](./img/mkbombp.png)

ダブルクリックして、動作を次のように書きます

```
extends SpriteChar;
wait(5);
p=p+1;
wait(5);
p=p+1;
wait(5);
p=p+1;
wait(5);
```

新しくwait(5);という命令が出てきました。これはupdate();に似ています。

#### 書式
```
wait(待機フレーム数);
```

これを行うことにより待機フレーム(コマ)数で指定しただけオブジェクトの動作が止まります。  
ここでは5フレーム(5コマ)待機します。

その後、変数pの値を１増やしています。変数pは、このオブジェクトのキャラクタパターンを表します。  
つまり、pを1増やすことにより、キャラクタパターンが次のように変化していきます

![bpats.png](./img/bpats.png)

実行してみると、爆発しているようなアニメーションを見ることができます。

### 爆発パターンを出現させる

爆発パターンを、自機が死んだときに発生させるようにしましょう。  
自機オブジェクトをダブルクリックして、次のように変更します

<pre>
extends SpriteChar;

<span style="color: #f00">function onDie() {
  appear(new Bomb($MyChar.x , $MyChar.y ,$pat_Sample+4));
}</span>

while(1) {
  if (getkey(39)>0 && x<$screenWidth ) x=x+3;
  if (getkey(37)>0 && x>0) x=x-3;
  if (getkey(32)==1) appear(new Tama(x,y,$pat_Sample+1));
  update();
}
</pre>

[敵を出現させる](./tr-stg04)で出てきたメソッドを使いました。  
しかし、先ほどと違ってこの [onDie](./rf-plainchar#plaincharondie)というメソッドはプログラム中から呼ばれていません。

実はこの onDieという名前をつけたメソッドは特別な意味を持ち、そのオブジェクトが死んだときに行わせる処理を記述できます。  
実際には、敵のオブジェクトが$MyChar.die(); を呼んだときに、自動的にこの onDieメソッドが呼ばれます。

onDieメソッドの中では、次の処理によって爆発オブジェクトを出現させています。

```
 appear(new Bomb($MyChar.x , $MyChar.y ,$pat_Sample+4));
```

[appear](./rf-object#objectappear)の使い方をもう一度復習しておきましょう

- **Bomb**は、出現させたいオブジェクトのクラスです。  
- **$MyChar.x** , **$MyChar.y** は、オブジェクトの出現する座標です。  
- **$pat_Sample+4**は、オブジェクトのキャラクタパターンを指定します。ここでは![bomp.png](./img/bomp.png)です。  

**$MyChar.x**は、「$MyChar**の**x」と解釈できます。  
このように、オブジェクトに続いてドット(.)と変数名書くと、そのオブジェクトが持っている変数を参照することができます。  
ここでは、自機のいる場所に爆発を出現させるのにこの参照を用いています。  

***

[←前](./tr-stg04)&emsp;[次→](./tr-stg06)&emsp;[チュートリアル](./tutorial)&emsp;[Wikiトップ](./)
