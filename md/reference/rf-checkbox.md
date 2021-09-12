
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - CheckBox</title>

## CheckBoxクラス

チェックボックスを作成します

### 例1
```
extends CheckBox; // 必ずCheckBoxを親クラスにしてください

a=new Array();
a.add("OFF");a.add("OFF");a.add("OFF");a.add("OFF");a.add("OFF");a.add("OFF");
init(6);
while(1) {
  if (create(60,120,0,$clBlack)==1) a.set(0,"ON"); else a.set(0,"OFF");
  if (create(60,140,1,$clRed)==1) a.set(1,"ON"); else a.set(1,"OFF");
  if (create(60,160,2,$clGreen)==1) a.set(2,"ON"); else a.set(2,"OFF");
  if (create(110,120,3,$clYellow)==1) a.set(3,"ON"); else a.set(3,"OFF");
  if (create(110,140,4,$clPink)==1) a.set(4,"ON"); else a.set(4,"OFF");
  if (create(110,160,5,$clWhite)==1) a.set(5,"ON"); else a.set(5,"OFF");
  drawText(75,120,a.get(0),$clBlack,10);
  drawText(75,140,a.get(1),$clBlack,10);
  drawText(75,160,a.get(2),$clBlack,10);
  drawText(125,120,a.get(3),$clBlack,10);
  drawText(125,140,a.get(4),$clBlack,10);
  drawText(125,160,a.get(5),$clBlack,10);
  update();
}
```

### メソッド一覧
|||
|-|-|
|[init](#checkboxinit)|チェックボックス作成の準備をします|
|[create](#checkboxcreate)|チェックボックスを作成します|

***

## CheckBox.init
チェックボックス作成の準備をします

**書式**
```
init(n)
```
- **n**  
&emsp;作成するチェックボックスの数

***

## CheckBox.create
チェックボックスを作成します

**書式**
```
create(x,y,number,color,zOrder)
```
- **x**  
&emsp;チェックボックスのx座標
- **y**  
&emsp;チェックボックスのy座標
- **number**  
&emsp;チェックボックスのID (0-N)  
&emsp;N=[init](#checkboxinit)で指定した個数-1
- **color**  
&emsp;色
- **zOrder**  
&emsp;表示順序

作成前に必ず[init](#checkboxinit)メソッドを呼んでください

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

