
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - $System</title>

## $Systemオブジェクト

システムの終了などを行います。

### メソッド一覧
|||
|-|-|
|[exit](#systemexit)|Tonyu Systemを終了します|
|[getVersion](#systemgetversion)|Tonyu Systemのバージョンを獲得します。|
|[setFrameRate](#systemsetframerate)|フレーム（コマ）数とコマ落ちの設定を行います|
|[setStackSize](#systemsetstacksize)|オブジェクトに割り当てるプロセスのスタックサイズを変更します。|
|[setVSync](#systemsetvsync)|擬似VSyncの有効・無効を設定します。|
|[setAdjustScanLine](#systemsetadjustscanline)|擬似VSyncの基準位置(走査線)を調節します。|

***

## $System.exit
Tonyu Systemを終了します

**書式**
```
exit()
```

**例1**
```
$System.exit();
```

***

## $System.getVersion
Tonyu Systemのバージョンを獲得します。

**書式**
```
$System.getVersion()
```

**戻り値**

バージョンを1000倍した値

***

## $System.setFrameRate
フレーム（コマ）数とコマ落ちの設定を行います

**書式**
```
setFrameRate(rate, skip)
```

- **rate**  
&emsp;1秒あたりのフレーム数
- **skip**  
&emsp;最大フレームスキップ数

Tonyu起動時には、rateは60、skipは5となっています。

最大フレームスキップ数を大きくすると、処理が落ちた場合に描画の回数を 減らすことで、本来の処理速度を保とうとします。  
小さくすると、処理が落ちた 場合に実際の速度が落ちますが、画面はなめらかになります。

**例1**
```
$System.setFrameRate(30,2);
```

***

## $System.setStackSize
オブジェクトに割り当てるプロセスのスタックサイズを変更します。

**書式**
```
$System.setStackSize(sz)
```
- **sz**  
&emsp;スタックサイズ


- Tonyu System起動時には、スタックサイズは1024となっています。  
- スタックサイズの変更が有効になるのは、**setStackSizeを実行後に初めてオブジェクトが作られた時**です。  
  - すでに作られているオブジェクトのスタックサイズは変更できません。  
  - ページをまたいでもサイズの指定は有効です。

**例1**
```
extend SpriteChar;
$System.setStackSize(4096);
appear(new ConsumeMuchStackChar(x,y,p));
```

***

## $System.setVSync
擬似VSyncの有効・無効を設定します。

**書式**
```
setVSync(enable)
```
- **enable**  
&emsp;1で有効、0で無効にします。

Tonyu起動時は、擬似VSyncは有効になっています。

Windows 7以降でDWMが有効の場合、スタッタリングが軽減されます。

***

## $System.setAdjustScanLine
擬似VSyncの基準位置(走査線)を調節します。

**書式**
```
setAdjustScanLine(rate)
```
- **rate**  
&emsp;0～1の小数を指定して、擬似VSyncの基準位置(走査線)を調節します。

Windows XP以前やWindows Vista/7でDWMが無効の場合、ティアリングが発生するため、  
ティアリングを目立たない位置にずらしたりするときに使います。

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

