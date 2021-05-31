
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - extends</title>

## extends

親クラスを設定します。親クラスを設定すると、親クラスの持っているすべての変数およびメソッドを利用できるようになります。

#### 書式
```
extends クラス名;
```

extendsはかならずファイルの先頭に書いてください。
クラス名で指定されたクラスを親クラスにします。

### 例1

Enemy.tonyu
```
extends SpriteChar;
function atariHantei() {
   if (crashTo($Jiki)) $Jiki.die();
}
```

Teki1.tonyu
```
extends Enemy;
while (1) {
    x=x+1;
    atariHantei();
    update();
}
```

Teki2.tonyu
```
extends Enemy;
while (1) {
    y=y+1;
    atariHantei();
    update();
}
```

Jiki.tonyu (オブジェクト名は$Jikiにします)
```
extends SpriteChar;
while (1) {
   if (getkey(39)>0) x+=3;
   if (getkey(37)>0) x-=3;
   if (getkey(40)>0) y+=3;
   if (getkey(38)>0) y-=3;
   update();
}
```

Teki1,Teki2 からatariHanteiを呼び出していますが、atariHanteiは親クラスのEnemyで定義されています。

このように同じメソッドを複数のクラスで使うときは親クラスを設定すると便利です。

特に、atariHanteiの内容を変更するときに、各クラスに同じメソッドが複数のクラスにあると、  
すべてのメソッドを変更する必要がありますが、親クラスに定義すれば１箇所のみの変更ですみます。

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

