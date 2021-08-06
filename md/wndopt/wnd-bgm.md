
[各種ウィンドウの使い方/オプション](./wnd-use-opt)&emsp;[Wikiトップ](./)

<title>各種ウィンドウの使い方/オプション - BGM・効果音</title>

### 各種ウィンドウの使い方/オプション
## BGM・効果音


BGM、効果音を読み込みます

![bgmwin.png](./img/bgmwin.png)

### BGM、効果音を読み込む

「追加」をクリックし、サウンドファイルを選択します。

また「自動追加」で、ページと同一ディレクトリにあるすべてのサウンドを追加します。

※ 同じ名前をもつファイル(sound.wav と sound.midなど) は片方しか追加できません

### プログラム中でBGM、効果音を鳴らす

[$mplayer.play](./rf-mplayer#mplayerplay)メソッドを呼び出します。

たとえば、上の図におけるgreat.wavを鳴らしたい場合は次のように記述します。

```
 $mplayer.play($se_great);
```
### 読み込めるサウンドファイル


- wavファイル(*.wav)  
- MIDIファイル(*.mid)  
- M-Twoオブジェクトファイル(*.mzo) ... 音楽作成ソフト[M-Two](./download#m-two)で作成された音楽演奏用ファイル


***

[各種ウィンドウの使い方/オプション](./wnd-use-opt)&emsp;[Wikiトップ](./)

