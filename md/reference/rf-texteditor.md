
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
|[setPosition](#texteditorsetposition)|テキストエディタの表示位置と大きさを指定します|
|[setFont](#texteditorsetfont)|エディット中に使うフォントを指定します|
|[setText](#texteditorsettext)|テキストの内容を設定します|
|[edit](#texteditoredit)|テキストエディタを表示し、編集を開始します|
|[isEditing](#texteditorisediting)|テキストをエディット中かどうか判定します|
|[getText](#texteditorgettext)|テキストの内容を読み出します|


***

## $TextEditor.setPosition

テキストエディタの表示位置と大きさを指定します

**書式**
```
setPosition(x, y, w, h)
```

- **x**  
&emsp;左上のx座標
- **y**  
&emsp;左上のy座標
- **w**  
&emsp;幅
- **h**  
&emsp;高さ

hを0にすると、1行のみエディット可能になります。高さはフォントの大きさにしたがって自動的に設定されます。  
hを0より大きくすると、複数行のエディットが可能になります。

***

## $TextEditor.setFont
エディット中に使うフォントを指定します

**書式**
```
setFont(size, name)
```
- **size**  
&emsp;文字の大きさ
- **name**  
&emsp;フォント名

***

## $TextEditor.setText
テキストの内容を設定します

**書式**
```
setText(text)
```
- **text**  
&emsp;テキストの内容

***

## $TextEditor.edit
テキストエディタを表示し、編集を開始します

**書式**
```
edit()
```

***

## $TextEditor.isEditing
テキストをエディット中かどうか判定します

**書式**
```
isEditing()
```

**戻り値**
エディット中なら真、エディット完了なら偽

$TextEditor.editを呼び出した直後から、エディタ以外の場所をクリックして  
エディタが隠れるまでが「エディット中」とみなされます。

***

## $TextEditor.getText
テキストの内容を読み出します
**書式**
```
getText()
```

**戻り値**
テキストの内容

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

