

[←前](./tr-stg01)&emsp;[次→](./tr-stg03)&emsp;[チュートリアル](./tutorial)&emsp;[Wikiトップ](./)

<title>チュートリアル - 実践編 - シューティングゲーム (2/11) - 弾を撃つ</title>

### チュートリアル - 実践編 - シューティングゲーム (2/11)
## 弾を撃つ

### 弾を作る
[オブジェクトを作る](./tr-basic02)を参考に弾のオブジェクトを作ります。

![new-tama.png](./img/new-tama.png)

[オブジェクトのキャラクタパターンを指定する](./tr-basic06)を参考に、弾のパターンを指定します

![tamapat.png](./img/tamapat.png)

弾をダブルクリックし、次のように入力します。

```
extends SpriteChar;
while(y>0) {
  y=y-8;
  update();
}
```

実行すると、弾が上に飛んでいくのが見えます。 よく見えなかった場合、F2で止めて、弾をドラッグして下の方にもっていくと見やすいでしょう。

### スペースキーを押すと弾が出る
しかし実際には弾は自機から発射するものです。 スペースキーを押すと自機から弾が出るようにしましょう。

自機をダブルクリックし、次のように変更します

<pre>
extends SpriteChar;
while(1) {
  if (getkey(39)>0 && x<$screenWidth) x=x+3;
  if (getkey(37)>0 && x>0) x=x-3;
  <span style="color: #f00">if (getkey(32)==1) appear(new Tama(x,y,$pat_Sample+1));</span>
  update();
}
</pre>

まず前半部(if文の条件)から解説します

```
if (getkey(32)==1) ...
```

これは、[自機を動かす](./tr-stg01)でも出てきましたが、キーの状態を判定します 32はスペースキーを表す番号です。  
スペースキーが押された瞬間だけ if文のあとの処理を行います(押しっぱなしでは弾が撃てません)

そして、スペースキーがおされていた場合の、弾を撃つ処理です

```
... appear(new Tama(x,y,$pat_Sample+1));
```

これは、新しいオブジェクトを作るときの決まり文句で、次のような パラメータを指定します。

#### 書式
```
appear(new クラス名 ( x座標 , y座標 ,キャラクタパターン ))
```
クラス名には、作成したいオブジェクトのクラス名を指定します。  
...といっても、クラスの話は少し難しいので、ここでは次の手順でクラス名を決めてください。

まず、今は弾を出したいのですから、とりあえず画面上の弾をクリックします。

すると、オブジェクトインスペクタに弾の内容が表示されますが、「クラス名」という欄に注目してください。  
ここに「Tama」とかいてあります。これが弾のクラス名になります

![tamaclass.png](./img/tamaclass.png)

### x座標 , y座標
作成するオブジェクトの位置を指定します。ここでは、自機から発射されるので、自機のx,y座標をそのまま使います

### キャラクタパターン
作成するオブジェクトのキャラクタパターンを指定します。  
キャラクタパターンを指定するには、下図のように、キャラクタパターンウィンドウからキャラクタパターンを選ぶと、ステータスバーのところにキャラクタパターンの値が表示されます。  
この値（$pat_Sample+1）をパラメータとして記述します。  
同時に、この値がクリップボードにコピーされます。

![sel-tama-p.png](./img/sel-tama-p.png)

さて、これで実行させてみましょう。スペースキーを押すと弾が発射されるようになりました。

***

[←前](./tr-stg01)&emsp;[次→](./tr-stg03)&emsp;[チュートリアル](./tutorial)&emsp;[Wikiトップ](./)
