
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - $TextEditor</title>

## $TextEditorオブジェクト

[$InputBox](./rf-inputbox)より小型の、テキスト入力ウィンドウを表示します。

### 例1

```
extends SpriteChar;

$TextEditor.setPosition(10,10,200,100);
$TextEditor.setFont(11,"ＭＳ ゴシック");
$TextEditor.setText("何か入力してください");
$TextEditor.edit();
while($TextEditor.isEditing()) {
  update();
}
while (1) {
  drawText(x,y,$TextEditor.getText(),$clWhite);
  x++;
  update();
}
```

### メソッド一覧
|||
|-|-|
|[setPosition](./rf-texteditor-setposition)|テキストエディタの表示位置と大きさを指定します|
|[setFont](./rf-texteditor-setfont)|エディット中に使うフォントを指定します|
|[setText](./rf-texteditor-settext)|テキストの内容を設定します|
|[edit](./rf-texteditor-edit)|テキストエディタを表示し、編集を開始します|
|[isEditing](./rf-texteditor-isediting)|テキストをエディット中かどうか判定します|
|[getText](./rf-texteditor-gettext)|テキストの内容を読み出します|


***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

