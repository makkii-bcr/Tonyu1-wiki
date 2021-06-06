
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - $mplayer</title>

## $mplayerオブジェクト

音楽、効果音の制御を行います

### メソッド一覧
|||
|-|-|
|[play](#mplayerplay)|BGM,効果音を演奏します|
|[stop](#mplayerstop)|BGMの演奏を停止します|
|[setVolume](#mplayersetvolume)|BGMの音量を調節します|
|[setDelay](#mplayersetdelay)|効果音を鳴らす際の待機時間を調整します|

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


**例1**

(予め、BGM・効果音ウィンドウで
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

**書式**
```
setDelay(time)
```
- **time**  
&emsp;待機時間 (サンプル数：1秒＝44100)
- 効果音の最初の部分が途切れる場合は，この値を大きめにしてください
- 規定値はWindowsのバージョンによって以下にしています

|Windowsのバージョン|規定値|
|-|-|
|Windows XP以前|1350|
|Windows Vista / 7|2400|
|Windows 8 / 8.1|2500|
|Windows 10|3000|

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

