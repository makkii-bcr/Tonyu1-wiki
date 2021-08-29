
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - $mouseManager</title>

## $mouseManagerオブジェクト

マウスの制御(マウスカーソルの強制移動、マウスの非表示など)を行います。

### 例1
```
extends SpriteChar;
$mouseManager.showCursor(0);
while (1) {
  $mouseManager.moveCursor(100,100);
  x+=($mouseManager.relX);
  y+=($mouseManager.relY);
  update();
}
```
▲ Windows標準のマウスが消え、代わりにこのオブジェクトがマウスカーソルとして働きます。

### メソッド一覧
|||
|-|-|
|[moveCursor](#mousemanagermovecursor)|マウスカーソルを指定した場所に移動します。|
|[showCursor](#mousemanagershowcursor)|マウスカーソルの表示、非表示を設定します|
|[refreshXY](#mousemanagerrefreshxy)|直ちに$mouseX,$mouseYを更新します|

### 変数一覧
|||
|-|-|
|[relX](#mousemanagerrelx)|マウスカーソルの相対移動量のx成分を読み出します。|
|[relY](#mousemanagerrely)|マウスカーソルの相対移動量のy成分を読み出します。|

***

## $mouseManager.moveCursor
マウスカーソルを指定した場所に移動します。

**書式**
```
moveCursor(x,y)
```

- **x**  
&emsp;移動先x座標。メインウィンドウの左端はx=0
- **y**  
&emsp;移動先y座標。メインウィンドウの上端はy=0

このメソッドを実行すると[$mouseManager.relX](#mousemanagerrelx), [$mouseManager.relY](#mousemanagerrely)にカーソルの相対移動量が設定されます。

***

## $mouseManager.showCursor
マウスカーソルの表示、非表示を設定します

**書式**
```
showCursor(s)
```

- **s**  
&emsp;0=非表示 / 1=表示

***

## $mouseManager.refreshXY
[$mouseX,$mouseY](./rf-mouse-xy)は、通常、１フレームが終わる毎に自動的に更新されますが、  
このメソッドを呼び出すと、呼び出した時点で直ちに$mouseX,$mouseYが更新されます。  
通常は呼び出す必要はありません。

**書式**
```
refreshXY()
```

***

## $mouseManager.relX  
マウスカーソルの相対移動量（直前の位置からどれだけ動いたか）のx成分を読み出します。

この値を調べる前に、[$mouseManager.moveCursor](#mousemanagermovecursor)を実行してください。

***

## $mouseManager.relY  
マウスカーソルの相対移動量（直前の位置からどれだけ動いたか）のy成分を読み出します。

この値を調べる前に、[$mouseManager.moveCursor](#mousemanagermovecursor)を実行してください。

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

