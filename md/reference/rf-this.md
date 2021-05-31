
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - this</title>

## this

thisは自分自身を表す特殊な変数です。

### 例1
```
extends SpriteChar;
while (1) {
  for (a in $chars) {
    if (a!= this && crashTo(a)) die();
  }
  update();
}
```

▲ このオブジェクトは、自分以外のオブジェクトに衝突すると、死亡します。  
※ this=式 という形の代入はできません。

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

