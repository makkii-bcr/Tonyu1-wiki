
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - Matrix</title>

## Matrixクラス
2次元配列を格納するオブジェクトです。

### 例1
```
extends TextChar;
m=new Matrix(10); // 横10列の配列を作成
m.addRows(5); // 縦に5行追加
for (y=0; y<5; y++) {
  for (x=0; x<10; x++) {
     m.set(x,y,x+y);
  }
}
while (1) {
  x=valueOf(waitInput("Xの値?"));
  y=valueOf(waitInput("Yの値?"));
  text="("+x+","+y+")="+m.get(x,y);
  update();
}
```

### メソッド一覧
|||
|-|-|
|[get](#matrixget)|2次元配列の内容を取得します。|
|[set](#matrixset)|2次元配列の内容を更新します。|

***

## Matrix.get
2次元配列の内容を取得します。

**書式**
```
get(x,y)
```
- **x**  
&emsp;横位置
- **y**  
&emsp;縦位置

**戻り値**

(x,y) に格納されている値。

***

## Matrix.set
2次元配列の内容を更新します。

**書式**
```
set(x,y,value)
```
- **x**  
&emsp;横位置
- **y**  
&emsp;縦位置
- **value**  
&emsp;新しい値

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

