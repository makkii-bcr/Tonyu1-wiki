
[←前](./tr-maze05.md)&emsp;[次→](./tr-maze07.md)&emsp;[チュートリアル](./tutorial.md)&emsp;[Wikiトップ](./)

### チュートリアル - 実践編 - 迷路ゲーム (6/7)
## 次の面に移る


敵をすべて倒すと、次の面に移る処理を行いましょう。

### 2面を作る

といっても、今のところゲーム画面が１つしかないので もう１つ面をつくることにしましょう。  
今までのゲーム画面を１面、これから新しく作る面を２面とします。

まず１面のページを開きます。 そして「ファイル」の「名前をつけて保存」を選びます。

![saveasmenu.png](./img/saveasmenu.png)

ここではstage2.cmmlという名前で保存します。

![saveas.png](./img/saveas.png)

これで、１面の内容が２面にコピーされました。  
今は２面が開いているので、２面のパターンを作ってみましょう  
 敵の数をふやしたり、はしごの配置をかえたり、いろいろ変更をくわえてみてください。

1面をクリアしたら、2面を開始する処理を作る

さらに、1面をクリアしたらこの2面が始まるようにしましょう  
プロジェクトマネージャを開き、再び１面を開きます。

![1men.png](./img/1men.png)

まず、クリアしたかどうかの判定を行いましょう  
クリアしたら２面に移動するという動作を行うオブジェクトを作ります。

オブジェクトを作るを参考にオブジェクトを作成します。ここでは$stage1という名前にします。

さらに、「オブジェクトの種類」を「シークレット」にします。  
このオブジェクトは、クリアしたかどうかの判定だけを行うので、実行中は表示する必要がありません。  
「シークレット」にすると実行中に表示されないオブジェクトになります。

![mk-stage1.png](./img/mk-stage1.png)

オブジェクトをダブルクリックし、次のように入力します。

```
extends SecretChar;
enemyLives=1;
while (enemyLives==1) {
  enemyLives=0;
  for (e in $chars) {
    if (e is Enemy) enemyLives=1;
  }
  update();
}
$projectManager.loadPage( $page_stage2 );
```

$page_stage2の部分は、２面のページの名前です。  
これはプロジェクトマネージャで確認して、もし違う名前だったらその名前にしてください。

実行してみると、敵が全滅すると２面が開始します。

ここで、$stage1オブジェクトの動作を説明します。

まず、敵が全滅するまでは、この部分を実行します:


```
enemyLives=1;
while (enemyLives==1) {
  enemyLives=0;
  for (e in $chars) {
    if (e is Enemy) enemyLives=1;
  }
  update();
}
```

while文の働きにより、enemyLivesが１のときは次の部分(while文の中)を実行します。


```
  enemyLives=0;
  for (e in $chars) {
    if (e is Enemy) enemyLives=1;
  }
  update();
```

↑この処理は、enemyLivesが０になるまで繰り返します。

enemyLivesは

```
  enemyLives=0;
```
によって、一旦０になりますが


```
  for (e in $chars) {
    if (e is Enemy) enemyLives=1;
  }
```

によって、画面内に敵が１つでもいる場合、１になります

結果として、敵がまったくいなくなると、enemyLivesが０になり、while文以降の処理に以降します。

while文以降の処理では、２面を読み込みます。


```
 $projectManager.loadPage($page_stage2);
```

2面をクリアしたときの処理を追加する

今回は簡単のため、２面クリアしたら終わりにして、タイトルに戻るようにしましょう。

まず２面を読み込みます

オブジェクトを作るを参考にオブジェクトを作成します。  
ここでは$stage2という名前にします。  
また、先ほどと同じく、「シークレット」を選択します。

![mk-stage2.png](./img/mk-stage2.png)

オブジェクトをダブルクリックし、次のように入力します。

```
extends SecretChar;
enemyLives=1;
while (enemyLives==1) {
  enemyLives=0;
  for (e in $chars) {
    if (e is Enemy) enemyLives=1;
  }
  update();
}
```
$projectManager.loadPage( $page_start );
$page_startの部分は、スタート画面のページの名前です。  
これはプロジェクトマネージャで確認して、もし違う名前だったらその名前にしてください。

***

[←前](./tr-maze05.md)&emsp;[次→](./tr-maze07.md)&emsp;[チュートリアル](./tutorial.md)&emsp;[Wikiトップ](./)
