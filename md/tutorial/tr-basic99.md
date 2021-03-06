

[←前](./tr-basic09)&emsp;[目次→](./tutorial)&emsp;[チュートリアル](./tutorial)&emsp;[Wikiトップ](./)

<title>チュートリアル - 基礎編 (付録) - キャラクタパターン用ビットマップの作り方</title>

### チュートリアル - 基礎編 (付録)
## キャラクタパターン用ビットマップの作り方

Tonyuに読み込むキャラクタパターンは、bmpファイルまたはpngファイルから読み込みます。  
その際、bmp/png画像は次の規則に従って描画してください。  

まず、全体を同じ色で塗ります。これがこの画像全体の「背景色」になります

![trans.png](./img/init-bmp.png)

キャラクタパターンを描画するには、まず描画したい矩形領域全体を同じ色で塗ります。  
これがこのパターンの「透過色」になります。左上の1ドットは背景色を残して下さい。

![trans.png](./img/trans.png)

この領域にキャラクタパターンを描くのですが、周囲1ドットは透過色以外を塗らないでください。

![how2bmp.png](./img/how2bmp.png)

同様に他のパターンを描きます。このとき、パターン同士が隣接しないようにしてください。

![how3bmp.png](./img/how3bmp.png)

※ここで書いた方式に従っていない画像を読み込むと、次のようにパターンの切り分けに失敗した場所に×が点滅します。  
&emsp;この場合は全体を1枚のパターンとみなします。

![fail-ana.png](./img/fail-ana.png)

***

[←前](./tr-basic09)&emsp;[目次→](./tutorial)&emsp;[チュートリアル](./tutorial)&emsp;[Wikiトップ](./)
