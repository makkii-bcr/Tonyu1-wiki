

[←前](./tr-basic02)&emsp;[次→](./tr-basic04)&emsp;[チュートリアル](./tutorial)&emsp;[Wikiトップ](./)

<title>チュートリアル - 基礎編 (3/9) - オブジェクトを動かす</title>

### チュートリアル - 基礎編 (3/9)
## オブジェクトを動かす

作成したオブジェクトをダブルクリックします。 エディタが開きます。

![open-ed.png](./img/open-ed.png)

ここでは、右方向に移動するという動きを定義してみます。エディタに次のように入力します。

```
extends SpriteChar;

while(x<$screenWidth) {
  x+=1;
  update();
}
```

![prog1.png](./img/prog1.png)

メニューの「実行」→「実行(F9)」を選択すると、オブジェクトが動くのが確認できます。

メニューの「実行」→「実行(F2)」で実行を停止します。

***

[←前](./tr-basic02)&emsp;[次→](./tr-basic04)&emsp;[チュートリアル](./tutorial)&emsp;[Wikiトップ](./)
