
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - $Options</title>

## $Optionsオブジェクト

各種設定を行います


### メソッド一覧
|||
|-|-|
|[get](#optionsget)|[$Options.set](#optionsset)メソッドで設定したプロジェクトの設定を得ます。|
|[set](#optionsset)|プロジェクトの各種設定を行います。|
|[getEnv](#optionsgetenv)|[$Options.setEnv](#optionssetenv)メソッドで設定したランタイムの設定を得ます。|
|[setEnv](#optionssetenv)|ランタイムの各種設定を行います。|

***

## $Options.get  
[$Options.set](#optionsset)メソッドで設定したプロジェクトの設定を得ます。

**書式**
```
get(name)
```
- **name**  
&emsp;設定項目の名前（[$Options.set](#optionsset)メソッド参照)

**戻り値**

設定されている値

default.tonyuprjファイルの```<resourcelist name="params">```内の要素から取得されます。

***

## $Options.set
プロジェクトの各種設定を行います。

**書式**
```
set(name,value)
```

- **name**  
&emsp;設定項目の名前
- **value**  
&emsp;設定する値

設定項目の名前(name)として指定できるのは、今のところ次のいずれかです。

- **deactivation_pause**  
&emsp;値(value)が1ならば、Tonyuがアクティブでないときに実行を自動的に一時停止します。  
&emsp;0なら一時停止しません。(デフォルトの動作)
- **deactivation_disableKey**  
&emsp;値(value)が1ならば、Tonyuがアクティブでないときに[getkey](./rf-object#objectgetkey)メソッドを無効にします。(デフォルトの動作)  
&emsp;0なら無効にしません。
- **sound_stopOnPageLoad**  
&emsp;値(value)が1ならば、[$projectManager.loadPage](./rf-projectmanager#projectmanagerloadpage)メソッドでページを切り替えたときにBGMを停止します。(デフォルトの動作)  
&emsp;0ならページをまたがってそのまま演奏されます。
- **sleep_time**  
&emsp;フレームごとにCPUをスリープする時間（単位：ミリ秒）を設定します。  
&emsp;「パフォーマンス」ウィンドウの「CPU負荷」をプログラムから動的に設定するためのオプションです。  
&emsp;※ ver1.29はsleep_timeを設定しなくても（デフォルト値の0でも）、CPU負荷がかかりません  
&emsp;※ ver1.30以降はビジーループ（[$System.setLoopMode(0)](./rf-system#systemsetloopmode)）設定時のみ有効です
- **disable_pause**  
&emsp;F3キーや「実行」→「一時停止」で一時停止する機能を、無効にするかを設定します。  
&emsp;値(value)が1ならば、一時停止を無効にします。0なら一時停止を有効にします。  
&emsp;それ以外の値ならば、開発環境では一時停止を有効、ランタイムでは無効にします。(デフォルトの動作)
- **起動時に適用される設定**（[互換性の設定](./compatibility)を参照）
  - **init_base_volume**
    - [$mplayer.setBaseVolume](./rf-mplayer#mplayersetbasevolume)を起動時に設定します。
  - **init_sound_play_mode**
    - [$mplayer.setSoundPlayMode](./rf-mplayer#mplayersetsoundplaymode)を起動時に設定します。
  - **init_volume_limiter**
    - [$mplayer.setVolumeLimiter](./rf-mplayer#mplayersetvolumelimiter)を起動時に設定します。
  - **init_process_single**
    - [$System.setProcessSingle](./rf-system#systemsetprocesssingle)を起動時に設定します。
  - **init_legacy_frame_rate**
    - [$System.setLegacyFrameRate](./rf-system#systemsetlegacyframerate)を起動時に設定します。
  - **init_sprite_angle_accuracy**
    - [$System.setSpriteAngleAccuracy](./rf-system#systemsetspriteangleaccuracy)を起動時に設定します。
  - **init_sin_cos_accuracy**
    - [$Math.setSinCosAccuracy](./rf-math#mathsetsincosaccuracy)を起動時に設定します。
  - **init_draw_mode_force_mode**
    - [$window.setDrawModeForceMode](./rf-window#windowsetdrawmodeforcemode)を起動時に設定します。
  - **init_se_loop_enable**
    - [$mplayer.setSeLoopEnable](./rf-mplayer#mplayersetseloopenable)を起動時に設定します。

default.tonyuprjファイルの```<resourcelist name="params">```内の値が変更、または要素が追加されます。  
Tonyuを終了した後も値が残ります。

**例1**
```
extends SpriteChar;
$Options.set("deactivation_pause",1); 
// ↑Tonyu以外のアプリケーションをアクティブにすると
// 一時停止する
while (1) {
  x++;
  update();
}
```

***

## $Options.getEnv  
[$Options.setEnv](#optionssetenv)メソッドで設定したランタイムの設定を得ます。

※ ランタイム版（Player.exe）でのみ有効です。

**書式**
```
getEnv(name)
```
- **name**  
&emsp;設定項目の名前（[$Options.setEnv](#optionssetenv)メソッド参照)

**戻り値**

設定されている値

Kernel/Cookies.iniファイル内の要素から取得されます。

***

## $Options.setEnv
ランタイムの各種設定を行います。

※ ランタイム版（Player.exe）でのみ有効です。

**書式**
```
setEnv(name,value)
```

- **name**  
&emsp;設定項目の名前
- **value**  
&emsp;設定する値

設定項目の名前(name)として指定できるのは、今のところ次のいずれかです。

- **screenWidth**  
&emsp;起動時のウィンドウの幅を指定します。
- **screenHeight**  
&emsp;起動時のウィンドウの高さを指定します。
- **windowX**  
&emsp;ウィンドウの横の位置を指定します。
- **windowY**  
&emsp;ウィンドウの縦の位置を指定します。

Kernel/Cookies.iniファイル内の値が変更、または要素が追加されます。  
Tonyuを終了した後も値が残ります。

**例1**
```
extends SpriteChar;
$Options.setEnv("screenWidth",600);
$Options.setEnv("screenHeight",400);
$Options.setEnv("windowX",200);
$Options.setEnv("windowY",100);
// ↑次回ランタイムを起動したとき
// 600×400pxの画面サイズで
// ディスプレイの左上から(200,100)の位置に
// ウィンドウが表示されます
while (1) {
  update();
}
```

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

