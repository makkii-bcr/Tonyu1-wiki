
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - $TextEditor</title>

## $mapオブジェクト

マップパターンの設定や取得、画面のスクロールを行います

### メソッド一覧
|||
|-|-|
|[set](#mapset)|マップパターンを設定します|
|[get](#mapget)|マップパターンを取得します|
|[getAt](#mapgetat)|画面上の座標からマップパターンを取得します|
|[scrollTo](#mapscrollto)|画面をスクロールします|
|[setBGColor](#mapsetbgcolor)|画面の背景色を設定します|
|[getBGColor](#mapgetbgcolor)|画面の背景色を得ます|

***

## $map.set

マップパターンを設定します

**書式**
```
set(mx,my,p)
```

- **mx**  
&emsp;マップパターン上のx座標
- **my**  
&emsp;マップパターン上のy座標
- **p**  
&emsp;設定するキャラクタパターン番号

マップの(mx,my)のパターンをpに設定します

***

## $map.get

マップパターンを取得します

**書式**
```
get(mx,my)
```
- **mx**
&emsp;マップパターン上のx座標
- **my**
&emsp;マップパターン上のy座標

**戻り値**

マップ上のmx,myにおけるキャラクタパターン番号を返します


**例1**

```
 pa=$map.get(4,3);
```

▲ 図1の緑枠の部分のキャラクタパターンを返します

![map-get.png](./img/map-get.png)

***

## $map.getAt

画面上の座標からマップパターンを取得します

**書式**
```
getAt(sx,sy)
```

- **sx**  
&emsp;画面の座標上のx座標
- **sy**  
&emsp;画面の座標上のy座標

**戻り値**

画面の座標sx,syにおけるキャラクタパターン番号を返します。  

「画面の座標」とは、図1のように1ドットを単位とした座標です。


**例1**

```
pa=$map.getAt(72,56);
```

▲ 図1の緑枠の部分のキャラクタパターンを返します


図1 :  
![map_getAt](./img/map-get-at.png)

***


## $map.scrollTo

画面をスクロールします

**書式**
```
scrollTo(sx,sy)
```
- **sx**  
&emsp;スクロール方向のx座標
- **sy**  
&emsp;スクロール方向のy座標

画面全体を、最初の位置から右方向にsxドット,下方向にsyドットだけずらして表示します。

左や上にずらすには、sx,syを負の値にします。


**例1**

ここに書いてあるプログラムは、実行する前に画面に
マップを描くことをおすすめします(マップを描く参照)

```
extends SpriteChar;
while(1) {
  $map.scrollTo(t,t);t+=1;
  update();
}
```

▲ 画面全体を右下にスクロールさせます

**参考**

[スクロールのサンプル](./html/jump/jump_html/html/HID00000001.htm)

***

## $map.getBGColor

画面の背景色を得ます

**書式**
```
getBGColor()
```

**戻り値**

画面の背景色

***

## $map.setBGColor

画面の背景色を設定します

**書式**
```
setBGColor(col)
```
- **col**  
&emsp;色（通常、colorメソッドで指定)

**例1**

```
$map.setBGColor(color(200,255,255));
```

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

