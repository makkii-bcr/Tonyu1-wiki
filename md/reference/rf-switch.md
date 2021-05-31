
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - switch</title>

## switch

条件にしたがって、手続きを振り分けます。

#### 書式
```
switch (変数) {
  case 値1:
    手続き1;
    break;
  case 値2:
    手続き2;
    break;
  ...
  default:
    手続きn;
}
```

**変数**に書かれた変数の値が**case**の**値**に一致する場合、その下の**手続き**を実行します。   
**break**に到達すると**switch**の **{}内**から抜けます。

※ break を書き忘れると、条件が一致したcase以降の行もどんどん実行されてしまうので、注意してください。

どの case にも一致しない場合、**default**の下の手続きが実行されます。  

case はいくつも書くことができます。  
default は一番下に１つだけ書くことができ、省略可能です。

### 例1
```
extends SpriteChar;
randomize(); // rndメソッドが実行ごとにランダムになるよう設定する
a = rnd(4); // 0～3がランダムでaに代入される
print("aの値は" + a + "です");
while (1) {
  switch (a) {
    case 0:
      x=x+1;
      break;
    case 1:
      y=y+1;
      break;
    case 2:
      x=x+1;
      y=y+1;
      break;
    default:
      p=10;
  }
  update();
}
```

▲ 実行をするごとにaの値が0～3の値になります。  
aが0の場合は右へ移動、  
1の場合は下へ移動、  
2の場合は右下へ移動、  
3の場合は移動せず青い箱になります。

下記のif文と同じ動作になります。

```
extends SpriteChar;
randomize();
a = rnd(4);
print("aの値は" + a + "です");
while (1) {
  if (a == 0) {
      x=x+1;
  } else if (a == 1) {
      y=y+1;
  } else if (a == 2) {
      x=x+1;
      y=y+1;
  } else {
      p=10;
  }
  update();
}
```

### 例2

breakがcaseと対になっていない例です。  
条件に合ったcaseがあると、該当caseからbreakに到達するまで次の行以降がどんどん実行されます。  
breakが無いとswitchの{}内から抜けないため、以下の動作となります。  

```
extends SpriteChar;
randomize();
a = rnd(7); // 0～6がランダムでaに代入される
print("aの値は" + a + "です");
while (1) {
  switch (a) {
    case 0:
    case 1:
    case 2:
      p=5;
      break;
    case 3:
      x=x+1;
    case 4:
      y=y+1;
    case 5:
      p=10;
      break;
  }
  update();
}
```

▲ 実行をするごとにaの値が0～3の値になります。  
aが0～2の場合、黄色になります。  
3の場合、右下移動しながら青色になります。  
4の場合、下移動しながら青色になります。  
5の場合、移動はせず青色になります。  
6の場合、移動も色も変わりません。  


***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

