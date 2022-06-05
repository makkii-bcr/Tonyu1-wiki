
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
|[setVSync](#systemsetvsync)|VSyncの有効・無効を設定します。|
|[setAdjustScanLine](#systemsetadjustscanline)|VSyncの基準位置(走査線)を調節します。|
|[setAutoAdjustScanLine](#systemsetautoadjustscanline)|VSyncの基準位置(走査線)の自動調節機能を使うか設定します。|
|[setTimerResolution](#systemsettimerresolution)|タイマー分解能を設定します。|
|[setLoopMode](#systemsetloopmode)|ゲームループの実行方式を設定します。|

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
##### (1_29_2021_0501以降)
VSyncの有効・無効を設定します。  
モニターの走査線を取得し、実行速度をミリ秒単位で微調整して垂直同期しています。

**書式**
```
setVSync(enable)
```
- **enable**  
&emsp;1で有効、0で無効にします。

Tonyu起動時は、VSyncは有効になっています。

Windows 8以降やWindows Vista/7でAero有効（**DWM**(*1)が有効）の場合、 **スタッタリング** (*2)が軽減されます。

*1）DWM ＝ Desktop Window Manager [(Wikipediaの説明)](https://ja.wikipedia.org/wiki/Desktop_Window_Manager)  
&emsp;&emsp;DWMが有効の場合、OSが自動的に垂直同期を行うので通常ティアリングが発生しなくなります  
*2）スタッタリング [(ドスパラの解説ページ)](http://faq3.dospara.co.jp/faq/show/8398?site_domain=default)

***
## $System.setAdjustScanLine
##### (1_29_2021_0501以降)
VSyncの基準位置(走査線)を調節します。

**書式**
```
setAdjustScanLine(rate)
```
- **rate**  
&emsp;0～1の小数を指定して、VSyncの基準位置(走査線)を調節します。

Windows XP以前やWindows Vista/7でAero無効（**DWM**(*1)が無効）の場合、 **ティアリング** (*2)が発生するため、  
**ティアリング**を目立たない位置にずらしたりするときに使います。

*1）DWM ＝ Desktop Window Manager [(Wikipediaの説明)](https://ja.wikipedia.org/wiki/Desktop_Window_Manager)  
&emsp;&emsp;DWMが有効の場合、OSが自動的に垂直同期を行うので通常ティアリングが発生しなくなります  
*2）ティアリング [(ドスパラの解説ページ)](http://faq3.dospara.co.jp/faq/show/8398?site_domain=default)

***

## $System.setAutoAdjustScanLine
##### (1_29_2021_1212以降)
VSyncの基準位置(走査線)の自動調節機能を使うか設定します。

**書式**
```
setAutoAdjustScanLine(enable)
```
- **enable**  
&emsp;0:無効、1:有効

Tonyu起動時は、Windows XP以前では有効、Windows Vista以降では無効になっています。

1フレームの描画にかかった時間をもとに、VSyncの基準位置(走査線)を自動調節します。  
[setAdjustScanLine](#systemsetadjustscanline)と併用して使うと、「自動調節＋手動調整」がVSyncの基準位置となります。


***

## $System.setTimerResolution
##### (1_29_2021_1212以降)
タイマー分解能を設定します。

**書式**
```
setTimerResolution(ms)
```
- **ms**  
&emsp;1以上を指定します。（ミリ秒単位）

Tonyu起動時は、1ミリ秒で設定されています。

短い時間を指定すると、カクつきが軽減されたりFPSが安定するなどの効果があります。  
Windows XP以前のPCではCPU負担が大きくなります。  
Windows XP以前のPCでCPU負担軽減を優先したい場合、設定を変更できます。

***

## $System.setLoopMode
##### (1_29_2021_1212以降)
ゲームループの実行方式を設定します。

**書式**
```
setLoopMode(mode)
```
- **mode**  
&emsp;0:ビジーループ、1:マルチメディアタイマー

Tonyu起動時は、マルチメディアタイマーで実行します。

※ Tonyu1_28以前は、ビジーループで実装されています。（マルチメディアタイマーへの切り替えは不可）

- ビジーループ
  - [sleep_time](./rf-options#optionsset)が0の場合、カクつきは抑えられますが、CPU使用率は1スレッド分100%使います
  - [sleep_time](./rf-options#optionsset)が1以上の場合、CPU負担は抑えられますが、カクつきが発生しやすくなります
  - ウィンドウ操作中はゲームが止まります
- マルチメディアタイマー
  - [sleep_time](./rf-options#optionsset)が0でもCPU負担を抑えつつ、カクつきも抑えることができます
  - ウィンドウ操作中もゲームが動作し続けます

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

