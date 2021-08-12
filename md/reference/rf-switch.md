
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
<pre>
extends SpriteChar;
<a href="./rf-selectbox">$SelectBox</a>.<a href="./rf-selectbox#selectboxopen">open</a>("何を買いますか？", "ここは武器屋です", "剣", "槍", "斧", "杖");
while (1) {
  select=<a href="./rf-selectbox">$SelectBox</a>.<a href="./rf-selectbox#selectboxgetstatus">getStatus</a>();
  switch (select) {
    case 0:
      text="選択中";
      break;
    case 1:
      text="剣を買いました";
      break;
    case 2:
      text="槍を買いました";
      break;
    case 3:
      text="斧を買いました";
      break;
    case 4:
      text="杖を買いました";
      break;
    default:
      text="何も買いませんでした";
  }
  drawText(10, 10, text, $clWhite, 20); // textの値を表示
  update();
}
</pre>
▲ 選択ダイアログが表示され、以下の動作となります
- ボタンを押していない間は、selectが0となりcase 0:下の「text="選択中";」が実行されます
- 左から1番目のボタンを押すと、selectが1となりcase 1:の下、「text="剣を買いました";」が実行されます
- 左から2番目のボタンを押すと、selectが2となりcase 2:の下、「text="槍を買いました";」が実行されます
- 左から3番目のボタンを押すと、selectが3となりcase 3:の下、「text="斧を買いました";」が実行されます
- 左から4番目のボタンを押すと、selectが4となりcase 4:の下、「text="杖を買いました";」が実行されます
- ダイアログを×ボタンで閉じると、selectが-1となりcase文で書いてある0～4のいずれにも一致しないので、default:の下、「text="何も買いませんでした";」が実行されます

下記のif文と同じ動作になります。

```
extends SpriteChar;
$SelectBox.open("何を買いますか？", "ここは武器屋です", "剣", "槍", "斧", "杖");
while (1) {
  select=$SelectBox.getStatus();
  if (select == 0) {
    text="選択中";
  } else if (select == 1) {
    text="剣を買いました";
  } else if (select == 2) {
    text="槍を買いました";
  } else if (select == 3) {
    text="斧を買いました";
  } else if (select == 4) {
    text="杖を買いました";
  } else {
    text="何も買いませんでした";
  }
  drawText(10, 10, text, $clWhite, 20); // textの値を表示
  update();
}
```

### 例2

breakがcaseと対になっていない例です。  
breakが無いとswitch文から即座に抜け出さないので、条件に一致したcaseから次々に処理が実行されてしまいますが、  
その性質をあえて利用することもできます。
```
extends SpriteChar;
$SelectBox.open("何を買いますか？", "ここは売店です", "お茶", "ジュース", "高い弁当", "弁当");
while (1) {
  select=$SelectBox.getStatus();
  text="";
  switch (select) {
    case 0:
      text="選択中";
      break;
    case 1:
    case 2:
      text="飲み物を買いました";
      break;
    case 3:
      text="高級な";
    case 4:
      text=text+"弁当を買いました";
      break;
    default:
      text="何も買いませんでした";
  }
  drawText(10, 10, text, $clWhite, 20); // textの値を表示
  update();
}
```

▲ 選択ダイアログが表示され、以下の動作となります
- ボタンを押していない間は、selectが0となりcase 0:下の「text="選択中";」が実行されます
- 左から1番目と2番目のボタンを押した場合、どちらも「text="飲み物を買いました";」が実行されます
- 左から3番目のボタンを押すと、case 3:の下「text="高級な";」が実行されますが、break;は無いのでcase 4:の下「text=text+"弁当を買いました";」も実行されます  
「高級な弁当を買いました」と表示されます
- 左から4番目のボタンを押すと、case 4:の下、「text=text+"弁当を買いました";」が実行されます  
「弁当を買いました」と表示されます
- ダイアログを×ボタンで閉じると、selectが-1となりcase文で書いてある0～4のいずれにも一致しないので、default:の下、「text="何も買いませんでした";」が実行されます

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

