

[←前](./tr-stg11-1.md)&emsp;[目次→](./tutorial.md)&emsp;[チュートリアル](./tutorial.md)&emsp;[Wikiトップ](./)

<title>チュートリアル - 実践編 - シューティングゲーム (11-2 / 11) - ネットランキング対応にする - ネットランキング対応のランタイムを作成する</title>

### チュートリアル - 実践編 - シューティングゲーム (11-2 / 11)
## ネットランキング対応にする
### ネットランキング対応のランタイムを作成する


先ほどまでで作成したシューティングをネットランキング対応にしましょう。

シューティングゲームのページを開いた状態で、メニューの「ウィンドウ」→「ネットランキング」を選びます

![open-net-rank.png](./img/open-net-rank.png)

URLに、前項でアップロードしたCGIのURLを設定します。

![set-rank-url.png](./img/set-rank-url.png)

自機が死んだときにランキングのページを開くようにしましょう

メニューの「オブジェクト」→「新規」を選んで新しくオブジェクトを作成します。  
オブジェクトの種類は「テキスト」です

![new-text2.png](./img/new-text2.png)

テキストオブジェクトを選択します。 オブジェクトインスペクタで、文字を変更します

![setcaption.png](./img/setcaption.png)

テキストをダブルクリックして、次のように入力します。

```
extends TextChar;
setVisible(0);
while(!$myChar.isDied()) {
  update();
}
setVisible(1);
while(getkey(13)==0) {
  update();
}
$ranking.setParam("score",$score);
$ranking.openBrowser();
```

このプログラムについて解説します。

```
setVisible(0);
```
↑これはこのテキストを一旦非表示にするための命令です。

```
while(!$myChar.isDead()) {
  update();
}
```

↑これは、$myCharつまり自機が死んでいない間、update()を繰り返します。  
isDead は、オブジェクトが死んでいる( die()メソッドがよばれている)かを検査するメソッドです。

```
setVisible(1);
while(getkey(13)==0) {
  update();
}
```

↑この部分では、 setVisible(1);によりテキスト("Press Return to Regist Hiscore")を表示します。  
さらにEnterキーが押されるまでupdate()を繰り返しながら待機します。

```
$ranking.setParam("score",$score);
$ranking.openBrowser();
```

↑この部分で実際にWeb上にスコア登録をおこないます。

```$ranking.setParam(name,value)```は、登録の際のパラメータを設定します。ここでは、scoreという名前のパラメータに$scoreの値（つまり得点)を設定します。

```$ranking.openBrowser();``` は、ブラウザから登録画面を開きます。

試しに一回実行してみましょう。  
自機が死んだ後、```Press Return to Regist Hiscore``` が表示されます。  
ここでEnterを押すとブラウザが開いて登録画面が表示されますが....

![browse-error.png](./img/browse-error.png)

エラーが発生しました。実は、開発環境からはハイスコア登録できないようになっています。  
ここでは、ブラウザが開くのとCGIが正常動作するのを確認するだけにします。  
（この後ランタイムを作成するとハイスコア登録が可能になります）

この状態で、配布するを参考にランタイムを作成します。  
このとき、ネットランキングランキング管理者パスワードの欄に、  
前項で設定した**ネットランキング管理者パスワード**を入力します。

![mkpass.png](./img/mkpass.png)

作成したランタイムをWebサーバ上に上げて、ダウンロード可能な状態にしておきます

テストします。  
Webサーバからアーカイブをダウンロード、解凍し、ゲームをやってみましょう。  
自機が死んだらEnterを押して登録画面に入ります

***

[←前](./tr-stg11-1.md)&emsp;[目次→](./tutorial.md)&emsp;[チュートリアル](./tutorial.md)&emsp;[Wikiトップ](./)
