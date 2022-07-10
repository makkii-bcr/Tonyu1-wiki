
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
|[setProcessSingle](#systemsetprocesssingle)|オブジェクト大量発生時の点滅防止の有効・無効を設定します。|
|[setSleepTimeMMT](#systemsetsleeptimemmt)|マルチメディアタイマー設定時のsleepTimeを指定します。|
|[setLegacyFrameRate](#systemsetlegacyframerate)|ver1.21～1.29のフレームレートを再現します。|
|[setSpriteAngleAccuracy](#systemsetspriteangleaccuracy)|スプライト描画のangleの精度を設定します|

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
Tonyu Systemのバージョンを取得します。

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

モニターの走査線を取得し、実行速度をミリ秒単位で微調整することでVSync(垂直同期)をします。

**書式**
```
setVSync(enable)
```
- **enable**  
&emsp;1で有効、0で無効にします。

Tonyu起動時は、VSyncは有効になっています。

Windows 8以降やWindows Vista/7でAero有効の場合(\*1)、 **スタッタリング**(\*2)が軽減されます。  
Windows XP以前では、**ティアリング**(\*3)が目立たなくなります

\*1）OSが自動的に垂直同期を行うので通常ティアリングが発生しなくなります  
\*2）スタッタリング [(ドスパラの解説ページ)](http://faq3.dospara.co.jp/faq/show/8398?site_domain=default)  
\*3）ティアリング [(ドスパラの解説ページ)](http://faq3.dospara.co.jp/faq/show/8398?site_domain=default)

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

Windows XP以前やWindows Vista/7でAero無効(クラシックテーマ)の場合、 **ティアリング**(\*1)が発生するため、  
**ティアリング**を目立たない位置にずらしたりするときに使います。

\*1）ティアリング [(ドスパラの解説ページ)](http://faq3.dospara.co.jp/faq/show/8398?site_domain=default)

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
Windows XP以前のPCでは、短い時間にするとCPU負担が大きくなります。  
Windows XP以前のPCでCPU負担軽減を優先したい場合、設定を変更できます。  

ただし、Kernel/MidiPlayer2.exeがあると1ミリ秒に設定されてしまいます。  
MidiPlayer2.exeを削除する必要がありますが、Midi,Oggは再生できなくなります。

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

- ビジーループ
  - [sleep_time](./rf-options#optionsset)が0の場合、カクつきは抑えられますが、CPU使用率は1スレッド分100%使います
  - [sleep_time](./rf-options#optionsset)が1以上の場合、CPU負担は抑えられますが、カクつきが発生しやすくなります
  - ウィンドウ操作中はゲームが止まります
- マルチメディアタイマー
  - CPU負担を抑えつつ、カクつきも抑えることができます
  - ウィンドウ操作中もゲームが動作し続けます

※ Tonyu1_28以前は、ビジーループで動作しています。マルチメディアタイマー動作にはできません。

***

## $System.setProcessSingle
##### (1_30_2022_0804以降)

オブジェクト大量生成時に発生する、オブジェクト点滅や処理落ちを防ぐ機能の、  
有効・無効を設定します。

**書式**
```
setProcessSingle(enable)
```
- **mode**  
&emsp;1:有効、0:無効  
&emsp;デフォルトは1で有効

※ [互換性の設定](./compatibility)[「オブジェクトを大量生成した際、点滅したり動作が遅くなる現象」](./compatibility#オブジェクトを大量生成した際、点滅したり動作が遅くなる現象)を参照

***

## $System.setSleepTimeMMT
##### (1_30_2022_0804以降)

※ **通常このメソッドを使用する必要はありません**  
&emsp; 0設定でも十分にCPU負荷が低いため、基本的に使用する必要はありません  
&emsp; 1以上にするとFPSが低下しやすくなります

マルチメディアタイマー（[$System.setLoopMode(1)](./rf-system#systemsetloopmode)）設定時のSleepTimeを設定します。

フレームごとにCPUをスリープする時間（単位：ミリ秒）を設定します。  
「パフォーマンス」ウィンドウの「CPU負荷」をプログラムから動的に設定します。  

**書式**
```
setSleepTimeMMT(ms)
```
- **ms**  
&emsp;フレームごとにCPUをスリープする時間（単位：ミリ秒）を設定します。  
&emsp;デフォルトは0です。

***

## $System.setLegacyFrameRate
##### (1_30_2022_0804以降)

ver1.21～1.29のフレームレートを再現します。

- ver1.28以前は、FPSにずれがありました。
  - 例えば、フレームレートを60に設定しても、FPSが約62.5になっていました。
- ver1.29からはFPSが正確になりました。
- ver1.28以前のFPSを再現したい場合に設定します。  

**書式**
```
setLegacyFrameRate(enable)
```
- **enable**  
&emsp;0:無効（FPSが正確になる）  
&emsp;1:有効（ver1.28以前のFPSのずれを再現します）  
&emsp;デフォルトは0です。  

※ [互換性の設定](./compatibility)[「FPSが約61～63になる現象」](./compatibility#fpsが約61～63になる現象)を参照

***

## $System.setSpriteAngleAccuracy
##### (1_30_2022_0804以降)

スプライト描画の回転(angle)の精度を設定します

- ver1.29以前は、１回転(360°)で256段階（約1.4°ずつ角度が変わる）でした
- ver1.30以降は、１回転(360°)で36000段階（0.01°ずつ角度が変わる）となります
- default.tonyuprjのtargetVersion（無い場合はsavedVersion）によってデフォルトの精度が変わります
  - 1290以下の場合は、互換性のため256段階
  - 1300以上の場合は、36000段階
- 手動で精度を変えたい場合、このメソッドを使用します

**書式**
```
setSpriteAngleAccuracy(mode)
```
- **mode**  
&emsp;0: １回転256段階  
&emsp;1: １回転36000段階  

※ [互換性の設定](./compatibility)[「スプライト描画の回転(angle)の精度」](./compatibility#スプライト描画の回転angleの精度)を参照

***



[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

