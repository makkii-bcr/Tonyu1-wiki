
[Wikiトップ](./)

## Tonyu1のダウンロード

### 注意

- ランタイム等に上書き更新する場合は、下記方法で更新してください。（Player.exeを上書きしただけだと、エラーが発生する可能性があります）
  - [ランタイムの更新方法](./start-error-win8-10)
- 古いTonyu1のゲームで、Windows10,8等で起動しない場合は、最新版に更新すると起動します。
  - [ランタイムの更新方法](./start-error-win8-10)
- ver1.29～1.30で仕様変更があり、以前のバージョンと動作が違う場合は、下記を設定してください。
  - [互換性の設定](./compatibility)
- Windows10でメニューが文字化けする場合、Windows上の設定「ワールドワイド言語サポートでUnicode UTF-8を使用」を解除してください。
  - 「コントロールパネル」→「時計、言語、および地域」→「地域と言語」→「管理」タブ→「システム ロケールの変更」→「ワールドワイド言語サポートでUnicode UTF-8を使用」のチェックを外す

### ダウンロード
<!--
#### プレリリースバージョン

[開発中のバージョン](./pre-release)です。
-->
#### 最新バージョン

[Tonyu1_303_2024_0217.zip](./dl/Tonyu1_303_2024_0217.zip)

- [$mplayer.stopSE](./rf-mplayer#mplayerstopse)の不具合修正

#### 以前のバージョン

[Tonyu1_302_2024_0212.zip](./dl/Tonyu1_302_2024_0212.zip)

- デフォルト値変更
  - [$mplayer.setVolumeLimiter](./rf-mplayer#mplayersetvolumelimiter)　音割れを防ぐ機能
    - 1(有効)→0(無効)
  - [$System.setLoopMode](./rf-system#systemsetloopmode)　ゲームループ
    - 2→1 (mmtimer Loop)
    - 2は廃止
  - [$mplayer.setSeStopEnable](./rf-mplayer#mplayersetsestopenable)　[$mplayer.stopSE](./rf-mplayer#mplayerstopse)の有効・無効設定
    - 1(有効)→0(無効)
- ネットランキング
  - URLに「https」も使えるよう修正
  - ネットランキングcgiを最近のPerlで動くように修正
- 処理軽量化
- [$mplayer.setSoundPlayMode(4)](./rf-mplayer#mplayersetsoundplaymode)で効果音ならなくなる不具合修正
- 細かい不具合修正

[Tonyu1_301_2022_0916.zip](./dl/Tonyu1_301_2022_0916.zip)

（2024-02-08 更新）プレリリース版だったものを最新版としてリリース

- 細かい修正
  - wavの再生処理を軽量化
    - stopSE無効＆volumeLimiter無効の場合に、処理軽量化するよう実装
    - モノラルwavしかないときはモノラル再生にして軽量化
  - mzoでpcm(wav)音源が上手くならないのを修正（Tonyu1.30で発生）
  - 速いCPUでloopMode==0&&sleepTime==0の時、mzoの音が伸びたような音になるので修正
  - loopMode==0&&sleepTime==0の時、非アクティブになってもスリープがかからないので修正
  - loopMode==2を追加し、デフォルト値に設定
    - loopMode==0(Busy Loop)とほぼ同じだが、FPSが維持できているときはsleepTime=1、FPSが維持できなくなるとsleepTime=0にする
  - エディタのインデント挙動修正・インデント高速化

[Tonyu1_30_2022_0804.zip](./dl/Tonyu1_30_2022_0804.zip)

- 主な変更
  - 効果音を途中停止する[$mplayer.stopSE](./rf-mplayer#mplayerstopse)を追加
  - オブジェクト大量生成時の点滅防止ライブラリ（[スーパープロセッサ](https://www.tonyu.jp/project/viewProject.cgi?mainkey=277&)）を導入（デフォルト有効）
  - wavのステレオ対応・音質向上
    - 44100Hz8bitモノラル相当 → 44100Hz16bitステレオに音質向上
  - wav,mzoの音源をDirectSoundに変更
    - wavのレイテンシが短縮
  - wav,mzoの音量が大きい場合、音割れを防ぐ機能を追加（デフォルト有効）
    - [$mplayer.setVolumeLimiter](./rf-mplayer#mplayersetvolumelimiter)で設定変更
  - ランタイム版で起動時のウィンドウサイズや位置を指定する機能を追加
    - [$Options.getEnv](./rf-options#optionsgetenv), [$Options.setEnv](./rf-options#optionssetenv)を追加
  - switch文の自動インデントに対応
- ver1.30以降に作成したプロジェクトでの仕様変更(```targetVersion```>=1300の場合)
  - wav,mzoの音量が100%になるよう変更
    - ver1.21～1.29に作られたプロジェクトは、互換性のため音量が50%のままになります
  - スプライト描画の回転(angle)が１回転256段階だったのを36000段階に向上
    - ver1.29以前に作られたプロジェクトでは、互換性のため256段階のままになります
    - [$System.setSpriteAngleAccuracy](rf-system#systemsetspriteangleaccuracy)で精度を切り替え可能
  - [sin](rf-object#objectsin),[cos](rf-object#objectcos)の精度を0～360°で360段階だったのを36000段階に向上
    - ver1.29以前に作られたプロジェクトは、互換性のため360段階のままになります
    - [$Math.setSinCosAccuracy](rf-math#mathsetsincosaccuracy)で精度を切り替え可能
- [互換性の設定](./compatibility)を追加
  - 基本的には設定の必要はありませんが、オプションとして用意しました
  - [$Options.set](./rf-options#optionsset)に関連項目を追加
- 仕様変更
  - [sleep_time](./rf-options#optionsset)はビジーループ設定時（[$System.setLoopMode(0)](./rf-system#systemsetloopmode)）のみ効くよう変更
    - 現在のマルチメディアタイマー動作ではCPU負荷が低く、基本的に[sleep_time](./rf-options#optionsset)設定の必要がないため仕様変更
    - どうしても変更したい場合は[$System.setSleepTimeMMT](./rf-system#systemsetsleeptimemmt)で変更できます
  - [$mplayer.setDelay](./rf-mplayer#mplayersetdelay)は[$mplayer.setSoundPlayMode(1or2)](./rf-mplayer#mplayersetsoundplaymode)に設定時のみ効くよう変更
    - [$mplayer.setSoundPlayMode(3)](./rf-mplayer#mplayersetsoundplaymode)がデフォルト設定であり、自動でDelayを調整できるようになったため仕様変更
    - 手動で変更したい場合は[$mplayer.setDelayDs](./rf-mplayer#mplayersetdelayds)で変更できます
  - [$window.setDrawMode](./rf-window#windowsetdrawmode)はWindows Vista以降で動作時は効かないよう変更
    - Windows Vista以降は描画方式A意外だと、重かったりカクついたりするため、メソッドからは変更できないようにしました
      - どうしても変更したい場合は[$window.setDrawModeForceMode](./rf-window#windowsetdrawmodeforcemode)で効くように変更できます
    - ウィンドウ上部のメニューから選択した場合は変更できます
    - Windows XP以前では[$window.setDrawMode](./rf-window#windowsetdrawmode)は効きます
- 細かい修正
  - default.tonyuprjに```targetVersion```を自動追記する機能追加
    - Tonyuのどのバージョンから対象プロジェクトを使っていたかを記録します
    - 互換性の自動維持の判定に使用されます
    - ```targetVersion```が記録されていない場合、```savedVersion```の値をコピーする(開発環境版)か、```savedVersion```の値を```targetVersion```として使います(ランタイム版)
  - [$map.scrollTo](./rf-map#mapscrollto)でMap表示がおかしくなる場合があるのを修正
    - Tonyu1_29_2021_0705から発生
    - ゲーム画面サイズが奇数、かつ画面サイズ以上の移動をした後に左上スクロールすると発生
  - wav再生終了直後にノイズがなるのを修正
  - 実行後の初回wav再生で音飛びするのを修正
  - 11025Hz, 22050Hz, 44100Hz以外のwavの再生速度が速くなる不具合を修正
  - 44100Hzを超えるwavを鳴らすとエラー発生する不具合を修正
    - ただし44100Hzを超えるwavを鳴らしても44100Hzの音質で再生されます
  - wavの同時発音数を9→50に変更
  - [deactivation_pause](./rf-options#optionsset)が1の時、タスクバーから最小化した場合、一時停止しない不具合を修正
  - 起動時プロジェクト読み込み中にエラーした場合、以降ウィンドウのメニューが増えなくなるので修正
  - Copyrightの年を更新
- 追加したメソッド一覧
  - [$mplayer.stopSE](./rf-mplayer#mplayerstopse)
  - [$mplayer.setDelayDs](./rf-mplayer#mplayersetdelayds)
  - [$mplayer.getAutoDelayDs](./rf-mplayer#mplayergetautodelayds)
  - [$mplayer.resetAutoDelayDs](./rf-mplayer#mplayerresetautodelayds)
  - [$mplayer.setSoundPlayMode](./rf-mplayer#mplayersetsoundplaymode)
  - [$mplayer.setBaseVolume](./rf-mplayer#mplayersetbasevolume)
  - [$mplayer.setVolumeLimiter](./rf-mplayer#mplayersetvolumelimiter)
  - [$mplayer.setSeLoopEnable](./rf-mplayer#mplayersetseloopenable)
  - [$mplayer.setSeStopEnable](./rf-mplayer#mplayersetsestopenable)
  - [$Options.getEnv](./rf-options#optionsgetenv)
  - [$Options.setEnv](./rf-options#optionssetenv)
  - [$System.setSleepTimeMMT](./rf-system#systemsetsleeptimemmt)
  - [$System.setProcessSingle](./rf-system#systemsetprocesssingle)
  - [$System.setLegacyFrameRate](./rf-system#systemsetlegacyframerate)
  - [$System.setSpriteAngleAccuracy](./rf-system#systemsetspriteangleaccuracy)
  - [$Math.setSinCosAccuracy](./rf-math#mathsetsincosaccuracy)
  - [$window.setDrawModeForceMode](./rf-window#windowsetdrawmodeforcemode)

[Tonyu1_29_2021_1212.zip](./dl/Tonyu1_29_2021_1212.zip)
- 細かい修正
  - マルチメディアタイマーの処理軽量化
  - タイマー分解能変更メソッド追加
    - [$System.setTimerResolution](./rf-system#systemsettimerresolution)
  - ゲームループ変更メソッド追加
    - [$System.setLoopMode](./rf-system#systemsetloopmode)
  - スタッタリング防止自動調整メソッド追加
    - [$System.setAutoAdjustScanLine](./rf-system#systemsetautoadjustscanline)
- グローバル変数追加
  - Windowsのビルド番号、[$osBuildNumber](./rf-getosversion)を追加
    - Windows10とWindows11を判定できる
- ネットランキングのURLを更新

[Tonyu1_29_2021_0730.zip](./dl/Tonyu1_29_2021_0730.zip)
- 細かい修正
  - Win98SEでVSyncが効いてないので修正。（リフレッシュレートが取得できないので、60Hzと仮定してVSyncを行う）
  - 内部処理のディスプレイ情報取得を５秒１回に変更

[Tonyu1_29_2021_0705.zip](./dl/Tonyu1_29_2021_0705.zip)
- 既存不具合の修正、細かい修正、処理速度改善など
  - $map.scrollTo()の高速化
    - $map.scrollTo()でスクロール量が多い場合、処理が重いので軽量化
  - 特定のウィンドウサイズでTonyuを終了すると、エラーが大量に出る不具合を修正
    - [BBS No.13705](http://www.tonyu.jp/joyful/joyful.cgi?mode=res&no=13705)に該当
  - 起動中にクリックするとエラーが出る不具合を修正
  - ランタイム作成時Cookies.iniを残さない
    - ランタイムではCookies.iniの設定に関わらず、起動時ステータスバーを表示しないよう変更
  - Tonyu.exeと同じ場所にあるPlayer.exeを動作するように修正
  - 設計中のドラッグ移動・マップ移動を滑らかにした
  - 登録系のリスト削除で、最後の１項目の表示が消えないのを修正
  - 内部のSleep処理のタイミングを変更
  - アプリ終了判定を変更
- グローバル変数追加
  - Tonyuがアクティブ状態か取得する、[$windowActive](./rf-window-active)を追加

[Tonyu1_29_2021_0630.zip](./dl/Tonyu1_29_2021_0630.zip)
- 数時間起動し続けると重くなって、2～4時間後にフリーズまたは強制終了になる不具合を修正（Tonyu1_29_2021_0501限定の不具合）
- FPS・RPS表示の小数第２位を、切り捨てから四捨五入に変更
- VSyncやフレームレート制御を調整
- グローバル変数追加
  - 実際のディスプレイの縦横ピクセル数、[$_displayRealWidth, $_displayRealHeight](./rf-display-wh)を追加
  - ディスプレイのリフレッシュレート（周波数）と色数、[$_displayFrequency, $_displayColor](./rf-display-wh)を追加

[Tonyu1_29_2021_0501.zip](./dl/Tonyu1_29_2021_0501.zip)
- フレームレート制御の実装を変更
  - ビジーループ＋Sleepから、マルチメディアタイマーに変更
- CPU使用率を軽減
- ゲーム画面のカクツキ（スタッタリング）軽減（Windows 8以降、Vista～7のAero有効時）
- カクツキ（ティアリング・スタッタリング）対策用のメソッド追加
  - [$System.setVSync](./rf-system#systemsetvsync)
  - [$System.setAdjustScanLine](rf-system#systemsetadjustscanline)
- $System.setFrameRateでFPSを小数単位でも指定できるようにしました
  - $System.setFrameRateのFPS制限を廃止
- グローバル変数追加
  - [$_fps, $_rps](./rf-fps-rps)追加（FPSとRPSが実数で取得できる）
  - ディスプレイの縦横ピクセル数、[$displayWidth, $displayHeight](./rf-display-wh)を追加
  - Windowsのバージョン値、[$osPlatformId、$osMajorVer、$osMinorVer](./rf-getosversion)を追加
- 効果音のDelayをOS毎に調整
  - XP以前は1350、Vista, 7は2400、8, 8.1は2500、10は3000
- 描画方式のデフォルト設定を、XP以前はB方式、Vista以降はA方式に変更
- ウィンドウの見た目が変化しました
- ランタイムではF3キーで一時停止禁止
- ウィンドウ移動中などでもゲームが止まらなくなりました
- フレームレート(FPS)がより正確になりました
- パフォーマンスウィンドウの変更
  - FPS表示変更、RPS（Run Per Second）（実行速度）の表示追加、SleepTimeの表示
- 非アクティブ時ページロードするとキーが効いてしまうのを防止
- exeにバージョン情報を追加

[Tonyu1_28_2021_0407.zip](./dl/Tonyu1_28_2021_0407.zip)
- Tonyu1_28_2021_0404で発生した不具合を修正
  - Tonyu.exeにcmmlファイルをD&Dや、cmmlファイルを関連付けして開いた時などに、自動的にプロジェクトを開く機能が効かなくなっていたのを修正
  - オプションからサウンドoffにするとエラーが出るのを修正

[Tonyu1_28_2021_0404.zip](./dl/Tonyu1_28_2021_0404.zip)
- [switch文](./rf-switch)の実装
  - switch、case、defaultは変数名等には使えなくなります
- JoyStickの不具合を修正
  - JoyStickを刺して抜いた後、Tonyu1を再起動するとJoyStick取得が重くなる不具合を修正
    - [BBS No.12342](http://www.tonyu.jp/joyful/joyful.cgi?mode=res&no=12342) に該当
  - JoyStick１つ接続の時、２つ目のJoyStickのボタンも押下しているように取得される不具合を修正
  - getkey()と同じ挙動にしました（getButton()等の取得値は１フレームごとに+1）
- ウィンドウが非アクティブ時の挙動修正
- 効果音のDelayを3000に変更（Vista以降）
- ファイルを開く・保存するダイアログを新しいタイプに変更（Vista以降）
- エディタ編集時、ゲーム側でキーが反応しないように修正
- エディタの30000バイト制限を廃止（Win9x系は制限を残しました）
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
- $System.setStackSize 追加
- Sprite.fillPolygon 追加
- ドキュメントをリニューアル
- for文，while文中におけるエラー位置の指摘方法を改善

### フルスクリーンキット

作成したランタイムをフルスクリーンで動作させることが可能です.

[fullscreen0_02.zip](./dl/fullscreen0_02.zip)

### 古いバージョン

[過去のバージョンアップ履歴](./dl-history)

[Tonyu1_21Beta.zip](./dl/Tonyu1_21Beta.zip)  
[Tonyu1_19Beta.exe](./dl/Tonyu1_19Beta.exe)  
[Tonyu1_1903.exe](./dl/Tonyu1_1903.exe)  
[Tonyu1_1902.zip](./dl/Tonyu1_1902.zip)  
[Tonyu1_1902.exe](./dl/Tonyu1_1902.exe)  
[Tonyu1_18_4.exe](./dl/Tonyu1_18_4.exe)  
[Tonyu1_18_3.exe](./dl/Tonyu1_18_3.exe)  
[Tonyu1_18_2.exe](./dl/Tonyu1_18_2.exe)  
[Tonyu1_18.zip](./dl/Tonyu1_18.zip)  
[Tonyu1_18.exe](./dl/Tonyu1_18.exe)  
[Tonyu1_17Patch.zip](./dl/Tonyu1_17Patch.zip)  
[Tonyu1_17.exe](./dl/Tonyu1_17.exe)  
[Tonyu1_16Light.exe](./dl/Tonyu1_16Light.exe)  
[Tonyu1_16.exe](./dl/Tonyu1_16.exe)  
[Tonyu1_15Light.exe](./dl/Tonyu1_15Light.exe)  
[Tonyu1_15.exe](./dl/Tonyu1_15.exe)  
[Tonyu1_14Light.exe](./dl/Tonyu1_14Light.exe)  
[Tonyu1_14.exe](./dl/Tonyu1_14.exe)  
[Tonyu1_13Light.exe](./dl/Tonyu1_13Light.exe)  
[Tonyu1_13.exe](./dl/Tonyu1_13.exe)  
[Tonyu1_12Light.exe](./dl/Tonyu1_12Light.exe)  
[Tonyu1_12.exe](./dl/Tonyu1_12.exe)  
[Tonyu1_11Light.exe](./dl/Tonyu1_11Light.exe)  
[Tonyu1_11.exe](./dl/Tonyu1_11.exe)  
[Tonyu1_09Light.exe](./dl/Tonyu1_09Light.exe)  
[Tonyu1_09.exe](./dl/Tonyu1_09.exe)  

## M-Two

M-Twoは音楽作成ツールです。MIDIとは異なり、MMLと呼ばれる言語でテキストファイルを作成することで音楽が演奏できます。  
演奏される音はMIDIとは一風変わった、ファミコン風味の懐かしい音色です。  
作成した音楽を自作のプログラムから使えるドライバMEZONETも用意してあります。 

Tonyu System のBGMとして利用できます。

[mtz12.zip](./dl/mtz12.zip) (Ver 1.2)  
[mtz11.zip](./dl/mtz11.zip) (Ver 1.1)  


***

[Wikiトップ](./)

