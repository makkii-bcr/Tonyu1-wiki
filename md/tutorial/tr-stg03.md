

[←前](./tr-stg02.md)&emsp;[次→](./tr-stg04.md)&emsp;[チュートリアル](./tutorial.md)&emsp;[Wikiトップ](./)

### チュートリアル - 実践編 - シューティングゲーム (3/11)
## 敵を動かす

今度は敵を作ってみましょう。オブジェクトを作るを参考にオブジェクトを作成します

![new-enemy.png](./img/new-enemy.png)

キャラクタパターンを指定します

![sel-e-pat.png](./img/sel-e-pat.png)

とりあえず、上から下に飛んでくる動きにしてみましょう。敵をダブルクリックして次のように入力します。

```
extends SpriteChar;
while (y<$screenHeight) {
  y=y+2;
  update();
}
```

***

[←前](./tr-stg02.md)&emsp;[次→](./tr-stg04.md)&emsp;[チュートリアル](./tutorial.md)&emsp;[Wikiトップ](./)