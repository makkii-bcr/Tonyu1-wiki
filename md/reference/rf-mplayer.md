
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
|[setSeLoopEnable](#mplayersetseloopenable)|wavのループを有効・無効を設定します|
|[setSeStopEnable](#mplayersetsestopenable)|stopSEの有効・無効を設定します|

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
&emsp;Midi,Wavを繰り返し演奏する場合は1
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
##### (1_30_2022_0804以降)

効果音を再生中に停止できます

[setSoundPlayMode(1)](#mplayersetsoundplaymode)以外に設定時、動作します。

※ **stopSEを使う時は、先に[setSeStopEnable](#mplayersetsestopenable)で有効化してください。**

※ ver1.303現在、バグなのか音が若干残る場合があります。[setSoundPlayMode(4)](#mplayersetsoundplaymode)を設定すると音が完全に止まります。

※ wavの効果音とBGMが50音以上同時に再生されている場合は、正しく停止できない場合があります。

**書式**
```
stopSE(id, shortFadeout)
```
- **id**  
&emsp;再生中の効果音のID
- **shortFadeout (省略可能)**  
&emsp;フェードアウトの時間 (サンプル数）（1秒＝44100)  
&emsp;指定した時間をかけて緩やかに停止します  
&emsp;停止時にプチっとノイズが鳴るのを軽減したい場合に指定します  
&emsp;ノイズ対策用のため、0～10000(約0.23秒)の範囲です  
&emsp;省略すると0指定時と同じで、速やかに停止します  
&emsp;[setSoundPlayMode(2or3)](#mplayersetsoundplaymode)に設定時のみ適用となります  

**例1**

(予め、[BGM・効果音](./wnd-bgm)ウィンドウで
test.wavというサウンドファイルを読み込んでおく必要があります)
```
extends SpriteChar;
$mplayer.setSeStopEnable(1); // stopSE有効化
while (1) {
  if (getkey(90)==1) seID=$mplayer.play($se_test); // Zキーで効果音再生
  if (getkey(88)==1) $mplayer.stopSE(seID); // Xキーで効果音を途中停止
  if (getkey(67)==1) $mplayer.stopSE(seID,100); // Cキーで効果音を途中停止(停止時のノイズ軽減)
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

▲ フェードアウトします。他の音楽を鳴らす前には```$mplayer.setVolume(256)```を実行してください。（音が出なくなります）

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

効果音の最初の部分が途切れる場合は、この値を大きめにしてください  
（ただし大きくしすぎると待機しなくなるので、最大約19000が限度です）  

規定値はWindowsのバージョンによって以下にしています

|Windowsのバージョン|規定値|
|-|-|
|Windows XP以前|1350|
|Windows Vista / 7|2400|
|Windows 8 / 8.1|2500|
|Windows 10以降|3000|

***

## $mplayer.setDelayDs
##### (1_30_2022_0804以降)

※ デフォルト自動で調整する設定のため、**通常このメソッドを使用する必要はありません**

効果音を鳴らす際の待機時間を調整します。  
[setSoundPlayMode(3)](#mplayersetsoundplaymode)に設定時、適用されます。

**書式**
```
setDelayDs(time)
```
- **time**  
&emsp;待機時間 (サンプル数：1秒＝44100)  
&emsp;**-1：自動設定（デフォルト）**  
&emsp;&emsp;・待機時間を自動で調整します  
&emsp;&emsp;・DirectSoundから情報取得し待機時間を求めています  
&emsp;**0以上：手動設定**  
&emsp;&emsp;・待機時間を手動で調整します  
&emsp;&emsp;・ただし大きくしすぎると待機しなくなるので、最大約19000が限度です

***

## $mplayer.getAutoDelayDs
##### (1_30_2022_0804以降)

[setDelayDs](#mplayersetdelayds)で自動調整に設定している際の待機時間を取得します  

[setSoundPlayMode(3)](#mplayersetsoundplaymode)かつ[setDelayDs(-1)](#mplayersetdelayds)に設定時、Tonyu内部で使用されます。  

**書式**
```
getAutoDelayDs()
```
**戻り値**

自動調整に設定している際の待機時間 (サンプル数：1秒＝44100)

***

## $mplayer.resetAutoDelayDs
##### (1_30_2022_0804以降)

**※ 通常このメソッドを使用する必要はありません**

[setDelayDs](#mplayersetdelayds)で自動調整に設定している際の待機時間をリセットします。

DirectSoundから情報取得し待機時間を求めていますが、  
待機時間が自動で大きくなっていきますが小さくはなりません。  
手動で待機時間を0に戻します。

**書式**
```
resetAutoDelayDs()
```

***

## $mplayer.setSoundPlayMode
##### (1_30_2022_0804以降)

wav,mzo再生の音源モードを切り替えます。

※ 実行すると効果音とBGMが止まります。  
&emsp; 処理が重いので、起動時に１度だけ使用したり、設定画面等で使用することをお勧めします。  
&emsp; BGMは自動では復帰しないので、鳴らしたい場合は再度再生する必要があります。  

※ 基本的にはデフォルト設定の、音源モード3のままで問題ありません。  
&emsp; 旧バージョンの音源を再現したい場合は1にします。  
&emsp; 2,4は開発の過程でできたものです。

**書式**
```
setSoundPlayMode(mode)
```
- **mode**  
&emsp;音源モードの番号  
&emsp;デフォルトは3に設定されています。

|音源モードの番号|概要|
|-|-|
|1|**Tonyu1.29以前の音源**<br>旧音源です。昔の音源で鳴らしたい特殊な場合にのみ使います。<br>ただし、下記の不具合や仕様も再現されてしまいます。<br>・音質が44100Hz8bitモノラルとなり劣化します<br>・wavのレイテンシが大きいです<br>・11025Hz, 22050Hz, 44100Hz以外のwavは再生速度が速くなります<br>・wavの同時発音数は再生から約0.45秒までは無限、それ以降は9です|
|2|**修正版の音源**<br>ステレオ対応や不具合修正した音源です。<br>旧音源と同じMME(*1)を使用しています。<br>・wavのレイテンシは旧音源と変わらず大きいです<br>・wavの同時発音数は再生から約0.45秒までは無限、それ以降は50です|
|3（デフォルトの設定）|**DirectSoundの音源（波形書き込み式）**<br>ステレオ対応や不具合修正した音源です。<br>DirectSound(*2)を使用し、音の波形を直接サウンドバッファに書き込み再生しています。<br>・レイテンシが小さくなります<br>・旧音源に近い音になります（特に効果音を、毎フレーム再生した場合や大量再生した際の音）<br>・wavの同時発音数は再生から約0.45秒までは無限、それ以降は50です|
|4|**DirectSoundの音源（API使用式）**<br>ステレオ対応や不具合修正した音源です。<br>DirectSound(*2)を使用し、DirectSoundのAPIを使い再生します。<br>・レイテンシが小さくなります<br>・wavの同時発音数は常に50です<br>・効果音の発音タイミングは10ms単位になります（効果音を毎フレーム再生すると、他のモードとは少し音が違う）<br>・Windows XP以前では、再生時の処理負担が軽いです|

※ 音源モード2,3は、音源がMMEかDirectSoundかの違いのみです。  
※ Windows 95,98,98SE,Meは、デフォルト音源モード2となります。(3,4の場合、あるPCでレイテンシが遅い・音がならないなどの現象があったため)  

*1) MME  
&emsp;&emsp;&emsp;Windows標準のサウンドドライバーです  
&emsp;&emsp;&emsp;音声が再生されるまでの時間（レイテンシ）が大きいです  
*2) DirectSound  
&emsp;&emsp;&emsp;Windowsのゲーム用のサウンドドライバーです  
&emsp;&emsp;&emsp;MMEよりもレイテンシが小さくなります

※ [互換性の設定](./compatibility)[「11025Hz, 22050Hz, 44100Hz以外のwavで再生速度が速くなる（かつ音が高くなる）現象」](./compatibility#11025hz-22050hz-44100hz以外のwavで再生速度が速くなる（かつ音が高くなる）現象)を参照

***

## $mplayer.setBaseVolume
##### (1_30_2022_0804以降)

wav,mzo再生の全体音量を設定します

- ver1.19以前、wavとmzoの音量は100%でした。 
- ver1.21～1.29は、wavとmzoの音量は50%でした。
- ver1.30以降、wavとmzoの音量は100%になりました。 
- default.tonyuprjのtargetVersion（無い場合はsavedVersion）によってデフォルトの精度が変わります
  - 1210～1290の場合は、互換性のためwavとmzoの音量は50%
  - 1300以上の場合は、wavとmzoの音量は100%
- 手動で音量を変えたい場合、このメソッドを使用します

**書式**
```
setBaseVolume(volPer)
```
- **volPer**  
&emsp;wav,mzoの全体音量を実数で指定します。  
&emsp;例えば、1.0は元の音量(100%)、0.5は50%の音量となります。  
&emsp;デフォルトはver1.21～1.29では0.5、それ以外のバージョンでは1.0です。  

※ [互換性の設定](./compatibility)[「wav,mzoの音量」](./compatibility#wavmzoの音量)を参照

***

## $mplayer.setVolumeLimiter
##### (1_30_2022_0804以降)

wav,mzoの音量が大きい場合、音割れを防ぐ機能の有効・無効を設定します。  
[setSoundPlayMode(2or3)](#mplayersetsoundplaymode)に設定時、適用されます。  
[setSoundPlayMode(4)](#mplayersetsoundplaymode)に設定時は、DirectSoundが自動的に行います。(Windows XP以前では音割れします)

**書式**
```
setVolumeLimiter(enable)
```
- **enable**  
&emsp;1で有効、0で無効  
&emsp;デフォルトは0(無効)です。  

※ [互換性の設定](./compatibility)[「効果音を多数大音量で鳴らすと音割れする現象」](./compatibility#効果音を多数大音量で鳴らすと音割れする現象)を参照

***

## $mplayer.setSeLoopEnable
##### (1_30_2022_0804以降)

wavのループの有効・無効を設定します

※ 一部のゲームで、wavループが効かないver1.22以前の時にループ再生を指定してしまい、  
&emsp; ver1.23以降で実行するとwavループが大量に行われ大音量となったため、それを防ぐために追加した機能です。  
&emsp; 自動的に互換性を保つため、通常このメソッドを使う必要はありません  

- ver1.22以前は、[$mplayer.play](#mplayerplay)でwavをループ再生を指定しても、ループ再生をしないようにします
- ver1.23以降は、[$mplayer.play](#mplayerplay)でwavをループ再生を指定すると、ループ再生します
- default.tonyuprjのtargetVersion（無い場合はsavedVersion）によってデフォルトの精度が変わります
  - 1220以下の場合は、wavループ再生を無効にします
  - 1230以上の場合は、wavループ再生を有効にします
- 手動で設定を変えたい場合、このメソッドを使用します

**書式**
```
setSeLoopEnable(enable)
```
- **enable**  
&emsp;1で有効、0で無効  
&emsp;ver1.22以前では、0がデフォルトで無効です。  
&emsp;ver1.23以降では、1がデフォルトで有効です。

※ [互換性の設定](./compatibility)[「ver1.22以前のゲームをver1.23以降で実行すると、wavがループしてしまう」](./compatibility#ver122以前のゲームをver123以降で実行すると、wavがループしてしまう)を参照

***

## $mplayer.setSeStopEnable
##### (1_30_2022_0804以降)

[$mplayer.stopSE](#mplayerstopse)の有効・無効を設定します

**書式**
```
setSeStopEnable(enable)
```
- **enable**  
&emsp;1で有効、0で無効  
&emsp;デフォルトでは無効になっているので、[$mplayer.stopSE](#mplayerstopse)を使うときは有効化してください。

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

