
[Wikiトップ](./)

## Tonyu1のダウンロード

[バージョンアップ履歴](./dl-history.md)

### 【注意】
ランタイム等に上書き更新する場合は、  
exeファイルを上書きし、Kernelフォルダを置き換えて、Tempフォルダを消してください。  
（exeファイルを上書きしただけだと、エラーが発生する可能性があります）

### ダウンロード

[Tonyu1_29_2021_0501.zip](./dl/Tonyu1_29_2021_0501.zip)
- フレームレート制御の実装を変更
  - フレームレート制御を、無限ループ＋Sleepから、マルチメディアタイマーに変更した
  - timeBeginPeriod(1)（WindowsAPI）でタイマー精度を向上
- CPU使用率を軽減
- フレームレート(FPS)がより正確になった
- ゲーム画面のカクツキ（スタッタリング）軽減（DWM有効時）
  - 擬似的なVSyncを実装
    - ディスプレイの走査線を取得し、処理タイミングを微調整することでスタッタリングを軽減する
- カクツキ対策用のメソッド追加
  - [$System.setVSync](./rf-system-setvsync.md)
  - [$System.setAdjustScanLine](rf-system-setadjustscanline.md)
- $System.setFrameRateでFPSを小数単位でも指定できるようになった
  - $System.setFrameRateのFPS制限を廃止
- グローバル変数追加
  - $_fps, $_rps追加（FPSとRPSが実数で取得できる）
  - ディスプレイの縦横ピクセル数、$displayWidth, $displayHeight
  - Windowsのバージョンを取得できるよう変数を追加した
    - [$osPlatformId、$osMajorVer、$osMinorVer](./rf-getosversion.md)
    - WindowsAPIのGetVersionExと同じ値
- ランタイムではF3キーで一時停止禁止
- 効果音のDelayをOS毎に調整
  - XP以前は1350、Vista, 7は2400、8, 8.1は2500、10は3000
- ウィンドウの見た目が変わった
- ウィンドウ移動中などでもゲームが止まらなくなった
- パフォーマンスウィンドウの変更
  - FPS表示変更、RPS（Run Per Second）（実行速度）の表示追加、SleepTimeの表示
- 非アクティブ時ページロードするとキーが効いてしまうのを防止
- exeにバージョン情報を追加

[Tonyu1_28_2021_0407.zip](./dl/Tonyu1_28_2021_0407.zip)
- Tonyu1_28_2021_0404で発生した不具合を修正
  - Tonyu.exeにcmmlファイルをD&Dや、cmmlファイルを関連付けして開いた時などに、自動的にプロジェクトを開く機能が効かなくなっていたのを修正
  - オプションからサウンドoffにするとエラーが出るのを修正

[Tonyu1_28_2021_0404.zip](./dl/Tonyu1_28_2021_0404.zip)
- switch文の実装
  - switch、case、defaultは変数名等には使えなくなる
- JoyStickの不具合を修正
  - JoyStickを刺して抜いた後、Tonyu1を再起動するとJoyStick取得が重くなる不具合を修正
    - [BBS No.12342](http://www.tonyu.jp/joyful/joyful.cgi?mode=res&no=12342) に該当
  - JoyStick１つ接続の時、２つ目のJoyStickのボタンも押下しているように取得される不具合を修正
  - １フレーム内にJoyStick取得を複数回行うと、その分getButton()が増えてしまうのを修正
    - getkey()と同じ挙動にした（getButton()等の取得値は１フレームごとに+1）
- ウィンドウが非アクティブ時の挙動修正
  - FPSが下がりにくいように修正（スリープ時間を100ms→1msに変更）
    - または、$Optionsのsleep_time値やパフォーマンスウィンドウのCPU負担の設定時間分スリープする
  - タスクバーから最小化時、非アクティブと検知されない不具合を修正（キー入力・CPU使用率）
- 効果音のDelayを3000に変更（Vista以降）
- ファイルを開く・保存するダイアログを新しいタイプに変更（Vista以降）
- エディタ編集時、ゲーム側でキーが反応しないように修正
- エディタの30000バイト制限を廃止（Win9x系は制限を残した）
- 稀にMidi再生・停止が失敗する不具合を軽減
- ウィンドウやUIの大きさ・位置の修正
- 文言の修正、URL・年の更新

[Tonyu1_27_2019_1205.zip](./dl/Tonyu1_27_2019_1205.zip)
- [Midiプレイヤーの不具合修正](https://www.tonyu.jp/project/viewComment.cgi?mainkey=4513&)
- Readme.txtの内容更新
- MidiPlay.exeは現在使っていないので削除

[Tonyu1_27_2019_0930.zip](./dl/Tonyu1_27_2019_0930.zip)
- Midiプレイヤー（Kernel/MidiPlayer2.exe）に[YellowMusicPlayer](https://www.tonyu.jp/project/viewProject.cgi?mainkey=667&)を使用するようにしました．

[Tonyu1_27_2015_0714.zip](./dl/Tonyu1_27_2015_0714.zip)
- 描画方式を設定ファイル（Kernel/Cookies.ini）に保存するようにしました

[Tonyu1_27_2015_0630.zip](./dl/Tonyu1_27_2015_0630.zip)
- $InputBox.open で位置と大きさを指定できるようにしました。
- Mathクラスのpow関数で、乗数が整数の場合に誤差が出る不具合を直しました

[Tonyu1_27_2015_0213.zip](./dl/Tonyu1_27_2015_0213.zip)
- Windows8 対応パッチを組み込みました
- Player.exeを小さくしました
- Mathクラスに 指数関数・対数関数を追加しました

[Tonyu1_27_2015_0212.zip](./dl/Tonyu1_27_2015_0212.zip) ←Player.exeが大きいバージョン

[Tonyu_patch_for_win8.zip](./dl/Tonyu_patch_for_win8.zip)
- (2015/01/10) Window8で起動しない場合，こちらの実行ファイルに差し替えて下さい

[Tonyu1_27_2014_0129.zip](./dl/Tonyu1_27_2014_0129.zip)
- $Options.setの sleep_time の動作を変更：設定値をdefault.tonyuprjには書き込まないようにしました。

[Tonyu1_26_2011_0529.zip](./dl/Tonyu1_26_2011_0529.zip)
- $Options.setに sleep_time を追加

[Tonyu1_24_090816.zip](./dl/Tonyu1_24_090816.zip)
- 同梱のドキュメントをWeb版と同期

[Tonyu1_24_080704.zip](./dl/Tonyu1_24_080704.zip)
- $mplayer.setVolume メソッドを使った際の効果音の不具合を修正

[Tonyu1_24_071003.zip](./dl/Tonyu1_24_071003.zip)
- フルスクリーン時にmoveCursor メソッドの位置がずれる不具合を修正

[Tonyu1_24_070903.zip](./dl/Tonyu1_24_070903.zip)
- $mplayer.setDelayメソッド
- Windows XP ではこの値の規定値は1000， Windows Vista では9000に設定してあります．
- files フォルダ内でサブフォルダ利用可能

[Tonyu1_23_070422.zip](./dl/Tonyu1_23_070422.zip)
- MIDIプレイヤの変更がランタイムに反映されていなかった不具合を修正

[Tonyu1_23_070402.zip](./dl/Tonyu1_23_070402.zip)
- MIDIプレイヤを変更
- プロジェクト作成・選択時にドライブを選択可能

[Tonyu1_22_061020.zip](./dl/Tonyu1_22_061020.zip)
- ヘルプファイルに*.hlp 以外(*.chm等）が指定可能

[Tonyu1_22_061004.zip](./dl/Tonyu1_22_061004.zip)
- ランタイム作成時，フルスクリーンの選択が無効になる不具合を修正

[Tonyu1_22_01.exe](./dl/Tonyu1_22_01.exe)
- Sprite.fillPolygon を実行後，他のページを開くとTonyuが強制終了する不具合を修正

[Tonyu1_22.exe](./dl/Tonyu1_22.exe)
- $System.setStackSize? 追加
- Sprite.fillPolygon 追加
- ドキュメントをリニューアル
- for文，while文中におけるエラー位置の指摘方法を改善

### フルスクリーンキット

作成したランタイムをフルスクリーンで動作させることが可能です.

[fullscreen0_02.lzh](http://hoge1e3.sakura.ne.jp/tonyu/dl/fullscreen0_02.lzh)

### 古いバージョン

[Tonyu1_21Beta.zip](http://hoge1e3.sakura.ne.jp/tonyu/dl/Tonyu1_21Beta.zip)  
[Tonyu1_19Beta.exe](http://hoge1e3.sakura.ne.jp/tonyu/dl/Tonyu1_19Beta.exe)  
[Tonyu1_1903.exe](http://hoge1e3.sakura.ne.jp/tonyu/dl/Tonyu1_1903.exe)  
[Tonyu1_1902.zip](http://hoge1e3.sakura.ne.jp/tonyu/dl/Tonyu1_1902.zip)  
[Tonyu1_1902.exe](http://hoge1e3.sakura.ne.jp/tonyu/dl/Tonyu1_1902.exe)  
[Tonyu1_18_4.exe](http://hoge1e3.sakura.ne.jp/tonyu/dl/Tonyu1_18_4.exe)  
[Tonyu1_18_3.exe](http://hoge1e3.sakura.ne.jp/tonyu/dl/Tonyu1_18_3.exe)  
[Tonyu1_18_2.exe](http://hoge1e3.sakura.ne.jp/tonyu/dl/Tonyu1_18_2.exe)  
[Tonyu1_18.zip](http://hoge1e3.sakura.ne.jp/tonyu/dl/Tonyu1_18.zip)  
[Tonyu1_18.exe](http://hoge1e3.sakura.ne.jp/tonyu/dl/Tonyu1_18.exe)  
[Tonyu1_17Patch.zip](http://hoge1e3.sakura.ne.jp/tonyu/dl/Tonyu1_17Patch.zip)  
[Tonyu1_17.exe](http://hoge1e3.sakura.ne.jp/tonyu/dl/Tonyu1_17.exe)  
[Tonyu1_16Light.exe](http://hoge1e3.sakura.ne.jp/tonyu/dl/Tonyu1_16Light.exe)  
[Tonyu1_16.exe](http://hoge1e3.sakura.ne.jp/tonyu/dl/Tonyu1_16.exe)  
[Tonyu1_15Light.exe](http://hoge1e3.sakura.ne.jp/tonyu/dl/Tonyu1_15Light.exe)  
[Tonyu1_15.exe](http://hoge1e3.sakura.ne.jp/tonyu/dl/Tonyu1_15.exe)  
[Tonyu1_14Light.exe](http://hoge1e3.sakura.ne.jp/tonyu/dl/Tonyu1_14Light.exe)  
[Tonyu1_14.exe](http://hoge1e3.sakura.ne.jp/tonyu/dl/Tonyu1_14.exe)  
[Tonyu1_13Light.exe](http://hoge1e3.sakura.ne.jp/tonyu/dl/Tonyu1_13Light.exe)  
[Tonyu1_13.exe](http://hoge1e3.sakura.ne.jp/tonyu/dl/Tonyu1_13.exe)  
[Tonyu1_12Light.exe](http://hoge1e3.sakura.ne.jp/tonyu/dl/Tonyu1_12Light.exe)  
[Tonyu1_12.exe](http://hoge1e3.sakura.ne.jp/tonyu/dl/Tonyu1_12.exe)  
[Tonyu1_11Light.exe](http://hoge1e3.sakura.ne.jp/tonyu/dl/Tonyu1_11Light.exe)  
[Tonyu1_11.exe](http://hoge1e3.sakura.ne.jp/tonyu/dl/Tonyu1_11.exe)  
[Tonyu1_09Light.exe](http://hoge1e3.sakura.ne.jp/tonyu/dl/Tonyu1_09Light.exe)  
[Tonyu1_09.exe](http://hoge1e3.sakura.ne.jp/tonyu/dl/Tonyu1_09.exe)  

### 旧Wiki ダウンロード

[旧Wiki ダウンロード](http://hoge1e3.sakura.ne.jp/tonyu/wiki/index.php?%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89)

***

[Wikiトップ](./)

