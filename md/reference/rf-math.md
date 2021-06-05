
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - $Math</title>

## $Mathオブジェクト

高度な数学関数を提供します

### メソッド一覧
|||
|-|-|
|[$Math.pow](./rf-math#mathpow)|e(ネイピア数)を累乗した値を返します。|
|[$Math.exp](./rf-math#mathexp)|e(ネイピア数)を底とした対数を返します。|
|[$Math.log](./rf-math#mathlog)|べき乗を求めます。|
|[$Math.pi](./rf-math#mathpi)|円周率πを返します|
|[$Math.atan](./rf-math#mathatan)|逆正接(アークタンジェント)を求めます。|
|[$Math.setAtanAccuracy](./rf-math#mathsetatanaccuracy)|[$Math.atan](./rf-math#mathatan)の精度を変更します。|
|[$Math.angle](./rf-math#mathangle)|高精度なangleメソッドです|
|[$Math.tan](./rf-math#mathtan)|正接(タンジェント)を求めます。|
|[$Math.cot](./rf-math#mathcot)|余接（コタンジェント）を求めます。|
|[$Math.sec](./rf-math#mathsec)|正割（セカント）を求めます。|
|[$Math.csc](./rf-math#mathcsc)|余割（コセカント）を求めます。|
|[$Math.asin](./rf-math#mathasin)|逆正弦(アークサイン)を求めます。|
|[$Math.acos](./rf-math#mathacos)|逆余弦(アークコサイン)を求めます。|
|[$Math.degrees](./rf-math#mathdegrees)|ラジアンを表す値から、度を計算します|
|[$Math.radians](./rf-math#mathradians)|度を表す値から、ラジアンを計算します|
|[$Math.roll](./rf-math#mathroll)|座標を回転させます|
|[$Math.isOdd](./rf-math#mathisodd)|値が奇数であるかどうかを調べます|
|[$Math.isEven](./rf-math#mathiseven)|値が偶数であるかどうかを調べます|
|[$Math.randBetween](./rf-math#mathrandbetween)|2つの値の間を範囲とする、整数乱数を返します|
|[$Math.randBetweenFloat](./rf-math#mathrandbetweenfloat)|2つの値の間を範囲とする、実数乱数を返します|

***

## $Math.pow
べき乗 a^b を求めます。  
引数に実数も渡すことができます。

**書式**
```
$Math.pow(a,b)
```
- **a**  
&emsp;基数
- **b**  
&emsp;指数

**戻り値**

aをb乗した値

***

[↑最上部へ](./rf-math#)

## $Math.exp

e(ネイピア数)をxで累乗した値を返します。

**書式**
```
$Math.exp(x)
```
- **x**  
&emsp;指数

**戻り値**
e(ネイピア数)をxで累乗した値

***

[↑最上部へ](./rf-math#)

## $Math.log

e(ネイピア数) を底とした x の対数を返します。

**書式**
```
$Math.log(x)
```
- **x**  
&emsp;値

**戻り値**
e(ネイピア数) を底とした x の対数

***

[↑最上部へ](./rf-math#)

## $Math.pi

円周率πを返します

**書式**
```
pi()
```

**戻り値**  

πの近似値(3.141592653589793)

***

[↑最上部へ](./rf-math#)

## $Math.atan

逆正接(アークタンジェント)を求めます。

**書式**
```
atan(t)
```
- **t**  
&emsp;実数値

**戻り値**  

tan(x)=tとなるような x。単位は度(ラジアンでありません)

**参考**  

$Math.setAtanAccuracy

***

[↑最上部へ](./rf-math#)

## $Math.setAtanAccuracy

$Math.atanの精度を変更します。

**書式**
```
setAtanAccuracy(accuracy)
```
- **accuracy**  
&emsp;精度

accuracyに逆正接の精度を設定します。  
accuracyが大きくするとatanの値が正確に 求められますが、計算に時間がかかります。  
標準値は10000で、精度、速度のバランスがとれた値です。  
精度優先なら1000000、速度優先なら100～1000が適切です。  
10000000より大きいと計算が終わらなくなるので注意してください。  

***

[↑最上部へ](./rf-math#)

## $Math.angle

高精度なangleメソッドです

**書式**

```
angle(x,y)
```

- **x**  
&emsp;線分(0,0)-(x,y)のx
- **y**  
&emsp;線分(0,0)-(x,y)のy

**戻り値**

線分(1,0)-(0,0)と(0,0)-(x,y)のなす角(単位:度)

$Math.atanを利用して、従来のangleより高い精度で角度を計算します。

***

[↑最上部へ](./rf-math#)

## $Math.tan

正接(タンジェント)を求めます。

**書式**

```
tan(t)
```
- **t**  
&emsp;度をあらわす整数(ラジアンではありません)

**戻り値**

t度の正接を求めます。

***

[↑最上部へ](./rf-math#)

## $Math.cot

余接（コタンジェント）を求めます。

**書式**
```
cot(t)
```
- **t**  
&emsp;度をあらわす整数(ラジアンではありません)

**戻り値**

t度の余接を求めます。

cot(t)=1/tan(t) です

***

[↑最上部へ](./rf-math#)

## $Math.sec

正割（セカント）を求めます。

**書式**
```
sec(t)
```
- **t**  
&emsp;度をあらわす整数(ラジアンではありません)

**戻り値**

t度の正割を求めます。

sec(t)=1/cos(t) です

***

[↑最上部へ](./rf-math#)

## $Math.csc

余割（コセカント）を求めます。

**書式**
```
csc(t)
```
- **t**  
&emsp;度をあらわす整数(ラジアンではありません)

**戻り値**

t度の余割を求めます。

csc(t)=1/sin(t) です

***

[↑最上部へ](./rf-math#)

## $Math.asin

逆正弦(アークサイン)を求めます。

**書式**
```
asin(t)
```
- **t**  
&emsp;実数値

**戻り値**

sin(x)=tとなるような x。単位は度(ラジアンでありません)

***

[↑最上部へ](./rf-math#)

## $Math.acos

逆余弦(アークコサイン)を求めます。

**書式**
```
acos(t)
```
- **t**  
&emsp;実数値

**戻り値**

cos(x)=tとなるような x。単位は度(ラジアンでありません)

***

[↑最上部へ](./rf-math#)

## $Math.degrees

ラジアンを表す値から、度を計算します

**書式**
```
degrees(r)
```
- **r**  
&emsp;実数

**戻り値**

ラジアンrを表す角度

***

[↑最上部へ](./rf-math#)

## $Math.radians

度を表す値から、ラジアンを計算します

**書式**
```
radians(t)
```
- **t**  
&emsp;実数

**戻り値**

t度のラジアン

***

[↑最上部へ](./rf-math#)

## $Math.roll

座標を回転させます

**書式**
```
roll(sx,sy,angle,cx,cy)
```
- **sx**  
&emsp;回転させたい点のx座標
- **sy**  
&emsp;回転させたい点のy座標
- **angle**  
&emsp;回転角
- **cx** (省略可能)  
&emsp;回転の中心のx座標(省略時は0)
- **cy** (省略可能)  
&emsp;回転の中心のy座標(省略時は0)

**戻り値**

$Math.rx, $Math.ryに、回転後の座標

***

[↑最上部へ](./rf-math#)

## $Math.isOdd

値が奇数であるかどうかを調べます

**書式**
```
isOdd(n)
```
- **n**  
&emsp;整数値

**戻り値**

nが奇数のとき真

***

[↑最上部へ](./rf-math#)

## $Math.isEven

値が偶数であるかどうかを調べます

**書式**
```
isOdd(n)
```
- **n**  
&emsp;整数値

**戻り値**

nが偶数のとき真

***

[↑最上部へ](./rf-math#)

## $Math.randBetween

2つの値の間を範囲とする、整数乱数を返します

**書式**
```
randBetween(f,t)
```
- **f**  
&emsp;整数値
- **t**  
&emsp;整数値

**戻り値**

f&lt;tのときは、f以上t未満の乱数。 t&lt;fの場合t以上f未満。t==fの場合t。

***

[↑最上部へ](./rf-math#)

## $Math.randBetweenFloat

2つの値の間を範囲とする、実数乱数を返します

**書式**
```
randBetweenFloat(f,t)
```
- **f**  
&emsp;実数値
- **t**  
&emsp;実数値

**戻り値**

f&lt;tのときは、f以上t未満の乱数。 t&lt;fの場合t以上f未満。t==fの場合t。

***

[↑最上部へ](./rf-math#)

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

