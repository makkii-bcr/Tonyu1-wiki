
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - $SelectBox</title>

## $SelectBoxオブジェクト

選択肢を表示するダイアログボックスです

※ [waitSelect](./rf-plainchar#plaincharwaitselect)も参考にしてください。

### 例1

```
extends TextChar;
$SelectBox.open("何を買いますか？", "ここは武器屋です", "剣", "槍", "斧", "杖");
while (1) {
  select=$SelectBox.getStatus();
  if (select==0) text="選択中";
  else if (select==1) text="剣を買いました";
  else if (select==2) text="槍を買いました";
  else if (select==3) text="斧を買いました";
  else if (select==4) text="杖を買いました";
  else if (select==-1) text="何も買いませんでした";
  update();
}
```

### メソッド一覧
|||
|-|-|
|[open](#selectboxopen)|はい・いいえ選択用ダイアログボックスを開きます。|
|[getStatus](#selectboxgetstatus)|はい・いいえ選択用のウィンドウの状態を調べます|

***

## $SelectBox.open
はい・いいえ選択用ダイアログボックスを開きます。

**書式**
```
open(prompt,title,st1,st2,st3,st4) 
```
- **prompt**  
&emsp;メッセージ
- **title**  
&emsp;
タイトルバーの文字列（省略すると"確認")
- **st1**  
&emsp;
1個目のボタンの文字列 （省略すると"はい")
- **st2**  
&emsp;
2個目のボタンの文字列 （省略すると"いいえ")
- **st3**  
&emsp;
3個目のボタンの文字列 （省略すると表示しない)
- **st4**  
&emsp;
4個目のボタンの文字列 （省略すると表示しない)

[waitSelect](./rf-plainchar#plaincharwaitselect)と異なり、ボタンが押されるまで処理を中断しません。

どのボタンが押されたか[$SelectBox.getStatus](#selectboxgetstatus)で調べます。

***

## $SelectBox.getStatus

はい・いいえ選択用のウィンドウの状態を調べます

**書式**
```
getStatus() 
```

**戻り値**

-1：ダイアログを閉じた  
0：まだボタンを選択していない（選択中）  
1：左から1番目のボタンを選択した  
2：左から2番目のボタンを選択した  
3：左から3番目のボタンを選択した  
4：左から4番目のボタンを選択した  

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

