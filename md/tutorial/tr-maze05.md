
[←前](./tr-maze04)&emsp;[次→](./tr-maze06)&emsp;[チュートリアル](./tutorial)&emsp;[Wikiトップ](./)

<title>チュートリアル - 実践編 - 迷路ゲーム (5/7) - スタート画面を作る</title>

### チュートリアル - 実践編 - 迷路ゲーム (5/7)
## スタート画面を作る


ゲーム開始前のスタート画面を作ってみましょう

まずスタート画面用の新規ページを作ります。  
メニューの「ファイル」＞「プロジェクトに新規ページを追加」を選びます。

![npage-menu.png](./img/npage-menu.png)

![new-title.png](./img/new-title.png)

ゲーム画面のファイルがあるディレクトリと同じディレクトリに、 start.cmmlというファイル名のページを作成します。

 ここでは単に"Press Space Key"と表示させ、スペースキーの入力が あったらゲーム画面に移動しましょう

### Press Space Key という文字を表示する

オブジェクトを作るを参考にオブジェクトを作成します ただし、「オブジェクトの種類」に「テキスト」を選択してください。

![press-space.png](./img/press-space.png)

オブジェクトクリックし、オブジェクトインスペクタでtextの値を編集します。

![press-spc-text.png](./img/press-spc-text.png)

オブジェクトをダブルクリックし、次のように入力します。

```
extends TextChar;
while(1) {
  update();
}
```

実行させると、画面にPress Space Keyと出ます。

### ページを変える

さらに、スペースキーを押すと先ほどのゲーム画面に移動するようにします。

まず少し準備が要ります。ツールメインウィンドウのprjMan.pngを選んでください。  
すると、このように$page_index、$page_startといった２つの項目が現れます。  
これは、このゲームが使用するページの一覧です

![toolprj.png](./img/toolprj.png)

ここでは、

スタート画面のページを$page_start  
ゲーム画面のページを$page_index  
としてすすめていきます。  
先ほどPress Space Keyを表示させるオブジェクトをダブルクリックし、次のように変更します。

```
extends TextChar;
while(1) {
  if (getkey(32)>0) $projectManager.loadPage($page_index);
  update();
}
```

実行させてみましょう。  
スペースキーをおすと、先ほどのゲーム画面に移動します。  
プログラムを停止させ、もう一度プロジェクトマネージャを開いてください。  
"$page_start"の欄をダブルクリックして、スタート画面に移動してください。

![sel-start.png](./img/sel-start.png)

さきほどのプログラムの解説です。

 if (getkey(32)>0)
この部分は、自機を動かすで説明したように、キーボードの入力を判定します。  
32はスペースキーを表します。  
スペースキーが押されると、次の部分を実行します。

```
  $projectManager.loadPage($page_index);
```
これは、他のページを読み込む命令で、次のような使い方をします

#### 書式
```
$projectManager.loadPage(ページ名);
```
ページ名は、さきほどプロジェクトマネージャで確認したページの名前です。

![toolprj.png](./img/toolprj.png)

### 自機が死んだらスタート画面に戻る  
先ほどのページを読み込む命令を使って、自機が死んだらスタート画面に戻るようにしましょう

プロジェクトマネージャを開いてください。  
"$page_index"の欄をダブルクリックして、ゲーム画面に移動してください。

![selindex.png](./img/selindex.png)

敵をダブルクリックし、次のように変更します。

```
extends SpriteChar;
vx=2;
while(1) {
  x+=vx;
  if (x<0) vx=2; if (x>$screenWidth) vx=-2; if (rnd(500)==0) vx=-vx;
  if (crashTo($myChar)) {
  //↑敵と自機がぶつかったときに
    if ((vx>0 && $myChar.x<x) || (vx<0 && $myChar.x>x)) {
    //↑敵が右方向、自機が左　または 敵が左方向、自機が右
      die();
      //↑ならば、敵が死ぬ
    } else {
      $myChar.die();
      //↑そうでなければ自機が死ぬ」
      $projectManager.loadPage($page_start);
    }
  }
  if (vx<0) f=1; else f=0;
  update();
}
```
これにより、自機が死ぬとスタート画面($page_start)が読み込まれます。

***

[←前](./tr-maze04)&emsp;[次→](./tr-maze06)&emsp;[チュートリアル](./tutorial)&emsp;[Wikiトップ](./)
