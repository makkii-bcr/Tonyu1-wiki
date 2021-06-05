
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - switch</title>

## switch

変数の値によって、手続きを振り分けます。

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

※ break を書き忘れると、条件が一致したcase以降の行も次々に実行されてしまうので、注意してください。

どの case にも一致しない場合、**default**の下の手続きが実行されます。  

case はいくつも書くことができます。  
default は一番下に１つだけ書くことができ、省略可能です。

### 例1
```
extends SpriteChar;
a=0;
while (1) {
  if (getkey(32)==1) a++;
  drawText(10, 10, a, $clWhite, 20); // aの値を表示
  switch (a) {
    case 0:
      x++;
      break;
    case 1:
      y++;
      break;
    case 2:
      x--;
      break;
    case 3:
      y--;
      break;
    default:
      a=0;
  }
  update();
}
```

▲ スペースキーを1回押すと、aが1ずつ増加します  
aが0の場合は、「x++;」が実行されるので、右へ移動します。  
1の場合は、「y++;」が実行されるので、下へ移動します。  
2の場合は、「x--;」が実行されるので、左へ移動します。  
3の場合は、「y--;」が実行されるので、上へ移動します。  
aが4になると0～3のどれにも一致しないので、defaultの下の「a=0;」が実行されて、aが0に戻ります。

下記のif文と同じ動作になります。

```
extends SpriteChar;
a=0;
while (1) {
  if (getkey(32)==1) a++;
  drawText(10, 10, a, $clWhite, 20); // aの値を表示
  if (a == 0) {
    x++;
  } else if (a == 1) {
    y++;
  } else if (a == 2) {
    x--;
  } else if (a == 3) {
    y--;
  } else {
    a=0;
  }
  update();
}
```

### 例2

breakがcaseと対になっていない例です。  
条件に合ったcaseがあると、該当caseからbreakに到達するまで次の行以降が次々に実行されます。  
breakが無いとswitchの{}内から抜けないため、以下の動作となります。  

```
extends SpriteChar;
a=0;
while (1) {
  if (getkey(32)==1) a++;
  drawText(10, 10, a, $clWhite, 20); // aの値を表示
  switch (a) {
    case 0:
    case 1:
    case 2:
      x++;
      p=5;
      break;
    case 3:
      y++;
    case 4:
      x--;
    case 5:
      p=10;
      break;
    case 6:
      a=0;
  }
  update();
}
```

▲ スペースキーを1回押すと、aが1ずつ増加します  
aが0～2の場合は、「x++;」と「p=5;」が実行されるので、右へ移動し、黄色になります。  
3の場合は、「y++;」「x--;」「p=10;」が実行されるので、左下へ移動し、青色になります。  
4の場合は、「x--;」「p=10;」が実行されるので、左へ移動し、青色になります。  
5の場合は、「p=10;」が実行されるので、移動はせず、青色になります。  
aが6になると「a=0;」が実行されるので、aが0に戻ります。


***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

