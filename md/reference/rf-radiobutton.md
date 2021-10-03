
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - RadioButton</title>

## RadioButtonクラス
ラジオボタンを作成します

### 例1
```
extends RadioButton; //必ずRadioButtonを親クラスにしてください。
a=new Array();
a.add("OFF");a.add("OFF");a.add("OFF");a.add("OFF");a.add("OFF");a.add("OFF");
init(3,3);
while(1) {
  if (create(300,120,0,0,3,$clBlack)==1) a.set(0,"ON");else a.set(0,"OFF");
  if (create(300,140,0,1,3,$clRed)==1) a.set(1,"ON");else a.set(1,"OFF");
  if (create(300,160,0,2,3,$clGreen)==1) a.set(2,"ON");else a.set(2,"OFF");
  if (create(350,120,1,0,3,$clYellow)==1) a.set(3,"ON");else a.set(3,"OFF");
  if (create(350,140,1,1,3,$clPink)==1) a.set(4,"ON");else a.set(4,"OFF");
  if (create(350,160,1,2,3,$clWhite)==1) a.set(5,"ON");else a.set(5,"OFF");
  drawText(320,120,a.get(0),$clBlack,10);
  drawText(320,140,a.get(1),$clBlack,10);
  drawText(320,160,a.get(2),$clBlack,10);
  drawText(370,120,a.get(3),$clBlack,10);
  drawText(370,140,a.get(4),$clBlack,10);
  drawText(370,160,a.get(5),$clBlack,10);
  update();
}
```

### メソッド一覧
|||
|-|-|
|[init](#radiobuttoninit)|ラジオボタン作成の準備をします|
|[create](#radiobuttoncreate)|ラジオボタンを作成します|

***

## RadioButton.init
ラジオボタン作成の準備をします

**書式**
```
init(group,number)
```
- **group**  
&emsp;作成するグループの数
- **number**  
&emsp;1グループに存在するラジオボタンの最大数

***

## RadioButton.create
ラジオボタンを作成します

**書式**
```
create(x,y,group,number,maxNumber,color,zOrder)
```
- **x**  
&emsp;ラジオボタンのx座標
- **y**  
&emsp;ラジオボタンのy座標
- **group**  
&emsp;グループID (0-N) N=[init](#radiobuttoninit)で指定したグループの個数-1
- **number**  
&emsp;グループ内の通し番号 (0 - maxNumber-1)
- **maxNumber**  
&emsp;グループ内にあるラジオボタンの個数(0-N) N=[init](#radiobuttoninit)における、group-1
- **color**  
&emsp;色
- **zOrder**  
&emsp;表示順序

作成前に必ず[init](#radiobuttoninit)メソッドを呼んでください

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

