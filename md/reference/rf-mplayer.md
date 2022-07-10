
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - $mplayer</title>

## $mplayerオブジェクト

音楽、効果音の制御を行います

### メソッド一覧
|||
|-|-|
|[play](#mplayerplay)|BGM,効果音を演奏します|
|[stop](#mplayerstop)|BGMの演奏を停止します|
|[stopSE](#mplayerstopse)|効果音の再生を停止します|
|[setVolume](#mplayersetvolume)|BGMの音量を調節します|
|[setDelay](#mplayersetdelay)|効果音を鳴らす際の待機時間を調整します(ver1.29以前などに適用)|
|[setDelayDs](#mplayersetdelayds)|効果音を鳴らす際の待機時間を調整します(ver1.30以降などに適用)|
|[getAutoDelayDs](#mplayergetautodelayds)|setDelayDsで自動調整に設定時の待機時間を取得します|
|[resetAutoDelayDs](#mplayerresetautodelayds)|setDelayDsで自動調整に設定時の待機時間をリセットします|
|[setSoundPlayMode](#mplayersetsoundplaymode)|wav,mzo再生の音源モードを切り替えます|
|[setBaseVolume](#mplayersetbasevolume)|wav,mzo再生の全体音量を設定します|
|[setVolumeLimiter](#mplayersetvolumelimiter)|wav,mzoの音量が大きい場合、音割れを防ぐ機能の有効・無効を設定します|

***

## $mplayer.play

BGM,効果音を演奏します

**書式**
```
play(s,autoReplay,vol)
```
- **s**  
&emsp;演奏するサウンドオブジェクト
- **autoReplay (省略可能)**  
&emsp;Midiを繰り返し演奏する場合は1
- **vol (省略可能)**  
&emsp;効果音の音量(0-128)

**戻り値**

効果音のID  

効果音を途中停止する場合に使います。（[$mplayer.stopSE](#mplayerstopse)）


**例1**

(予め、[BGM・効果音](./wnd-bgm)ウィンドウで
test.wavというサウンドファイルを読み込んでおく必要があります)

```
extends SpriteChar;
while (1) {
  if (getkey(32)==1) {$mplayer.play($se_test);}
  update();
}
```
▲ スペースキーを押すとtest.wavが鳴ります

***

## $mplayer.stop
BGMの演奏を停止します

**書式**
```
stop()
```

**例1**
```
$mplayer.stop();
```

***

## $mplayer.stopSE
##### (1_30_2022_0715以降)

効果音を再生中に停止できます

[setSoundPlayMode(1)](#mplayersetsoundplaymode)以外に設定時、動作します。

※ 効果音が50音以上同時に再生されている場合は、正しく停止できない場合があります。

**書式**
```
stopSE(id)
```
- **id**  
&emsp;再生中の効果音のID

**例1**

(予め、[BGM・効果音](./wnd-bgm)ウィンドウで
test.wavというサウンドファイルを読み込んでおく必要があります)
```
extends SpriteChar;
while (1) {
  if (getkey(90)==1) seID=$mplayer.play($se_test); // Zキーで効果音再生
  if (getkey(88)==1) $mplayer.stopSE(seID); // Xキーで効果音を途中停止
  update();
}
```

***

## $mplayer.setVolume

BGMの音量を調節します

*このメソッドは.mzo形式にのみ利用可能です*

**書式**
```
setVolume(vol)
```
- **vol**  
&emsp;音量(0-256)

**例1**
```
for (i=256; i>0; i--) {
  $mplayer.setVolume(i);
  update();
}
```

▲ フェードアウトします。他の音楽を鳴らす前には$mplayer.setVolume(256)を実行してください。（音が出なくなります）

***

## $mplayer.setDelay

効果音を鳴らす際の待機時間を調整します  
ver1.30以降[setSoundPlayMode(1or2)](#mplayersetsoundplaymode)に設定時のみ適用となります。

**書式**
```
setDelay(time)
```
- **time**  
&emsp;待機時間 (サンプル数：1秒＝44100)
- 効果音の最初の部分が途切れる場合は、この値を大きめにしてください
  - ただし大きくしすぎると待機しなくなるので、最大約19000が限度です
- 規定値はWindowsのバージョンによって以下にしています

|Windowsのバージョン|規定値|
|-|-|
|Windows XP以前|1350|
|Windows Vista / 7|2400|
|Windows 8 / 8.1|2500|
|Windows 10以降|3000|

***

## $mplayer.setDelayDs
##### (1_30_2022_0715以降)

※ デフォルト自動で調整する設定のため、**通常このメソッドを使用する必要はありません**

効果音を鳴らす際の待機時間を調整します。  
[setSoundPlayMode(3)](#mplayersetsoundplaymode)に設定時、適用されます。

**書式**
```
setDelayDs(time)
```
- **time**  
&emsp;待機時間 (サンプル数：1秒＝44100)
- -1：自動設定（デフォルト）
  - 待機時間を自動で調整します
  - DirectSoundから情報取得し待機時間を求めています
- 0以上：手動設定
  - 待機時間を手動で調整します
  - ただし大きくしすぎると待機しなくなるので、最大約19000が限度です

***

## $mplayer.getAutoDelayDs
##### (1_30_2022_0715以降)

[setDelayDs](#mplayersetdelayds)で自動調整に設定している際の待機時間を取得します

[setSoundPlayMode(3)](#mplayersetsoundplaymode)かつ[setDelayDs(-1)](#mplayersetdelayds)に設定時、Tonyu内部で使用されます。  
（何も設定していない場合も、デフォルトで上記設定のため使用されています）

**書式**
```
getAutoDelayDs()
```
**戻り値**

自動調整に設定している際の待機時間 (サンプル数：1秒＝44100)

***

## $mplayer.resetAutoDelayDs
##### (1_30_2022_0715以降)

**※ 通常このメソッドを使用する必要はありません**

[setDelayDs](#mplayersetdelayds)で自動調整に設定している際の待機時間をリセットします。

DirectSoundから情報取得し待機時間を求めていますが、  
待機時間が自動で大きくなっていきますが小さくはなりません。（10000以上になると自動的にリセットします）  
手動で待機時間を0に戻します。

**書式**
```
resetAutoDelayDs()
```

***

## $mplayer.setSoundPlayMode
##### (1_30_2022_0715以降)

wav,mzo再生の音源モードを切り替えます。

※ 実行すると効果音とBGMが止まります。  
&emsp; BGMを鳴らし続けたい場合は、再度再生する必要があります。

**書式**
```
setSoundPlayMode(mode)
```
- **mode**  
&emsp;音源モードの番号  
&emsp;デフォルトは3に設定されています。

|音源モードの番号|概要|
|-|-|
|1|**Tonyu1.29以前の音源**<br>旧音源です。昔の音源で鳴らしたい特殊な場合にのみ使います。<br>ただし、下記の不具合や仕様も再現されてしまいます。<br>・音質が44.1kHz8bitモノラルとなり劣化します<br>・wavのレイテンシが大きいです<br>・11025Hz, 22050Hz, 44100Hz以外のwavは再生速度が速くなります<br>・wavの同時発音数は再生から約0.45秒までは無限、それ以降は9です|
|2|**修正版の音源**<br>ステレオ対応や不具合修正した音源です。<br>旧音源と同じMME(*1)を使用しています。<br>・wavのレイテンシは旧音源と変わらず大きいです<br>・wavの同時発音数は再生から約0.45秒までは無限、それ以降は50です|
|3（デフォルトの設定）|**DirectSoundの音源（波形書き込み式）**<br>ステレオ対応や不具合修正した音源です。<br>DirectSound(*2)を使用し、音の波形を直接サウンドバッファに書き込み再生しています。<br>・レイテンシが小さくなります<br>・旧音源に近い音になります（特に効果音を、毎フレーム再生した場合や大量再生した際の音）<br>・wavの同時発音数は再生から約0.45秒までは無限、それ以降は50です|
|4|**DirectSoundの音源（API使用式）**<br>ステレオ対応や不具合修正した音源です。<br>DirectSound(*2)を使用し、DirectSoundのAPIを使い再生します。<br>・レイテンシが小さくなります<br>・wavの同時発音数は常に50です<br>・効果音の発音タイミングは10ms単位になります（効果音を毎フレーム再生すると、他のモードとは少し音が違う）|

*1) MME  
&emsp;&emsp;&emsp;Windows標準のサウンドドライバーです  
&emsp;&emsp;&emsp;音声が再生されるまでの時間（レイテンシ）が大きいです  
*2) DirectSound  
&emsp;&emsp;&emsp;Windowsのゲーム用のサウンドドライバーです  
&emsp;&emsp;&emsp;MMEよりもレイテンシが小さくなります

***

## $mplayer.setBaseVolume
##### (1_30_2022_0715以降)

wav,mzo再生の全体音量を設定します

※ ver1.21～1.29でwav,mzoの音量が小さくなっていたため、ver1.30から元の音量で鳴るよう仕様変更しました  
&emsp; 音量が変わることで不都合があった際の、調整に使う想定のメソッドです

**書式**
```
setBaseVolume(volPer)
```
- **volPer**  
&emsp;wav,mzoの全体音量を実数で指定します。  
&emsp;例えば、1.0は元の音量(100%)、0.5は50%の音量となります。  
&emsp;デフォルトは1.0です。

ver1.30以降でver1.21～1.29の時の音量にしたい場合、0.5を指定します。

***

## $mplayer.setVolumeLimiter
##### (1_30_2022_0715以降)

wav,mzoの音量が大きい場合、音割れを防ぐ機能の有効・無効を設定します。  
[setSoundPlayMode(2or3)](#mplayersetsoundplaymode)に設定時、適用されます。  
[setSoundPlayMode(4)](#mplayersetsoundplaymode)に設定時は、DirectSoundが自動的に行います。

**書式**
```
setVolumeLimiter(enable)
```
- **enable**  
&emsp;1で有効、0で無効  
&emsp;デフォルトは1で有効です。

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

