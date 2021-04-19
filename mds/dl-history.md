
[ダウンロード](./download.html)

## バージョンアップ履歴

1.28

&ensp;2021/04/06

- Tonyu1_28_2021_0404で発生した不具合を修正
- Tonyu.exeにcmmlファイルをD&Dや、cmmlファイルを関連付けして開いた時などに、自動的にプロジェクトを開く機能が効かなくなっていたのを修正
- オプションからサウンドoffにするとエラーが出るのを修正

&ensp;2021/04/04

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

1.27

&ensp;2019/12/05

- [Midiプレイヤーの不具合修正](https://www.tonyu.jp/project/viewComment.cgi?mainkey=4513&)
- Readme.txtの内容更新
- MidiPlay.exeは現在使っていないので削除

&ensp;2019/09/30

- Midiプレイヤー（Kernel/MidiPlayer2.exe）に[YellowMusicPlayer](https://www.tonyu.jp/project/viewProject.cgi?mainkey=667&)を使用するようにしました．

&ensp;2015/07/14

- 描画方式を設定ファイル（Kernel/Cookies.ini）に保存するようにしました

&ensp;2015/06/30

- $InputBox.open で位置と大きさを指定できるようにしました。
- Mathクラスのpow関数で、乗数が整数の場合に誤差が出る不具合を直しました

&ensp;2015/02/13

- Windows8 対応パッチを組み込みました
- Player.exeを小さくしました
- Mathクラスに 指数関数・対数関数を追加しました

&ensp;2015/02/12

&ensp;2015/01/10

- Window8対応

&ensp;2014/01/29

- $Options.setの sleep_time の動作を変更：設定値をdefault.tonyuprjには書き込まないようにしました。

1.26
- $Options.setメソッドに sleep_time オプション追加

1.24
- $mplayer.setDelayメソッド
- files フォルダ内でサブフォルダ利用可能

1.23
- MIDIプレイヤを変更
- プロジェクト作成・選択時にドライブを選択可能

1.22
- $System.setStackSize? 追加
- Sprite.fillPolygon 追加
- ドキュメントをリニューアル
- for文，while文中におけるエラー位置の指摘方法を改善

1.21
- panel.save、 panel.loadメソッドを追加
- $fullScreen 変数を追加
- $Window.setDrawModeメソッド
- スタックオーバーフロー（メソッド呼び出しの繰り返しによるエラー）検知機構追加

1.1903
- MIDIに関する機能を1.17に完全差し戻し

1.19(beta2)
- 1.18に搭載のMIDIに不具合が生じたため、1.17の仕組みと差し替え
- エディタで編集可能なプログラムサイズを30000Bに制限

1.18
- クラスのカテゴリわけ機能を追加
- MIDIの演奏前の待ち時間を削減
- CheckBox 追加
- RadioButton 追加
- $Math 追加
- $TextEditor? 追加
- TextChar.edit 追加
- Sprite.centerText, Sprite.drawVerticalText?, Sprite.drawPolygon, Sprite.drawRect, Sprite.drawRectDx?, Sprite.drawTriangle, Sprite.gradationLine, Sprite.gradationRect, Sprite.gradationText 追加

1.17
- ヘルプ機能をリニューアル
- コード補完機能を追加
- メソッドの定義を任意の場所で可能に
- Object.colorHSLメソッド
- Panel.copyRectメソッド
- Object.amodメソッド
- Sprite.drawBrokenLine?、Panel.drawBrokenLine?メソッド
- Object.floorメソッド
- Matrixクラス
- Systemクラス

1.16
- ランタイム実行時にフルスクリーンで表示可能に（別途フルスクリーンキットが必要）
- $panel.drawDXSpriteメソッド追加
- $panel.setTransparentColor?メソッド追加
- 貼り付け可能なクリップボードデータの上限を4KBに拡張

1.15
- エディタに置換機能を追加
- $panel.setPixel追加
- $windowX/$windowY変数を追加
- $SelectBox.open $SelectBox.getStatus waitSelectメソッド(はい・いいえ選択ダイアログ)追加
- $map.getBGColorメソッド追加
- $mplayer.playにおいて効果音の音量を設定可能に
- PanelChar::resizeメソッドの説明を追加
- ランタイムアイコンにpngを使用可能に

1.14
- ランタイム作成時に音楽データがコピーされない不具合を修正。
- ランタイム作成時にfilesフォルダの内容をコピー可能に。
- メッセージウィンドウを追加
- $projectManager.loadPage を実行後、数フレーム処理が続いてしまう不具合を修正。
- $Options.set,$Options.getメソッド追加。「Tonyuがアクティブでないときの実行の一時停止」「Tonyuがアクティブでないときのgetkeyメソッドの無効化」「ページを切り替えたときにBGMを停止しない」を可能に
- 「nullはオブジェクトではないので..」というエラーメッセージを「変数xxxは初期化されていないので...」というメッセージに変更。
- absメソッドの説明を追加
- getGreen,getBlue,getRedメソッド追加
- crashToLine?メソッド追加

1.13
- timeStopメソッドを追加
- notifyメソッドによりオブジェクトの速度が２倍になる不具合を修正
- 実行開始時のフォントが直前のsetFontメソッドの呼び出し内容によって変化する不具合を修正
- waitInputメソッドを呼び出しによって表示されるウィンドウを右上の"x"によって閉じると処理が抜け出せなくなる不具合を修正
- BGM、効果音を同一プロジェクト内で共有(ページ毎に読み込む必要なし)
- randomizeメソッド、getTimeメソッド追加
- onAppearメソッド追加
- ハッシュテーブル追加
- エラー発生時および検索結果のダブルクリックによるソースコード表示の不具合を修正
- 新規ページを作成時に標準で設定されるフォルダをSamplesからProjectsに変更

1.12修正パッチからの変更点
- BGM、効果音が読み込まれない不具合を修正

1.12
- パネルオブジェクトを追加。テキスト等の回転に対応
- フレームマネージャを追加
- 配列にremove,indexOfメソッド追加、deleteメソッドの戻り値の仕様を変更
- 同一引数のgetkeyを１フレームに２回以上呼び出すと押した瞬間の判定ができない不具合を修正
- valueOfメソッドが負の値を表す文字列を変換できない不具合を修正
- エディタ内で範囲を選択することにより選択範囲のみインデントが可能に
- $InputBox?, waitInputで表示される入力ウィンドウのプロンプト表示に複数行を表示可能に

1.11
- 起動画面をリニューアル
- ステータスバー設置
- レシピ集追加
- png画像読み込み対応
- 文字入力機能($InputBox?, waitInput)追加
- ジョイスティック２個使用に対応

1.09
- APIリファレンスを命令リファレンスに改称。
- 代入文、if文、while文、メソッドの説明追加
- extends文、is 演算子の説明追加
- ++ , -- 演算子追加
- for文に機能追加
- break文追加
- $mouseManagerの各種メソッド追加,$mouseX,$mouseYを改良。画面外のマウス位置を検知

1.08
- プログラム内検索機能追加
- サテライトをリニューアル
- MIDI 演奏開始時に処理が止まらないように改良
- ファイル入出力機能を追加
- AnimationAdaptor 追加
- updateExメソッド 追加
- angleDiffメソッド 追加
- valueOfメソッド追加
- /* ... */ スタイルの注釈に対応

1.07
- ページ切り替え時のクラスのコンパイルを廃止、オブジェクトを破棄しないでのページの切り替えを可能に。
- $mplayer.playで効果音を連続して鳴らすと前の効果音が消える不具合を修正
- テキスト表示を強化。複数行表示対応。 フォント切り替え対応(setFontメソッド)
- APIリファレンスに文字列操作を追加
- オブジェクト一覧、パフォーマンスウィンドウを追加
- screenOut,gotoScreen,getScreenX,getScreenYメソッド追加
- ハイスコア登録CGIのバグを修正

1.06
- 02/3/24 ジョイスティック対応
- 3/23 ランタイムのアイコン変更を可能に
- 3/23 ツールバーウィンドウ改造
- 3/23 エディタの横にクラス一覧を表示

1.05
- 02/3/16 描画方法オプションを追加。半透明表示を高速化
- 3/15 途中に空の行があるときにインデントが狂うバグを修正
- 3/15 getVisibleメソッドを追加
- 3/14 キャラクタパターン選択ウィンドウを改良
- 3/10 一度コンパイルしたクラスのコンパイルを抑止することによりページ読み込み速度を向上
- 3/5 ランタイム実行開始時のTonyuロゴ表示を廃止
- 3/1 APIリファレンスの数学関数の項目にtruncメソッド追加

1.04
- 02/2/24 キャラクタパターン用ビットマップのパターン認識方法を改善
- 2/24 オブジェクトの貼り付けにより同名のオブジェクトができてしまうバグ を修正
- 2/24 $projectManager.getCurrentPageName?メソッド追加
- 2/24 文字列を== , != 演算子で比較可能に

1.03
- 02/2/17 $panel.getPixelメソッド追加
- 2/17 MIDIを使った後ページを切り替えるとI/Oエラーを出すバグを修正

1.02
- 02/2/14 実行中に画面サイズを変更すると画面表示がおかしくなるバグを修正

1.01
- 02/1/26 サンプルプログラムにHockey2追加
- 1/26 サンプルプログラムに注釈とサウンドをつける
- 1/26 ロード中に音楽がループするバグを修正
- 1/20 ランタイム作成前にページ保存
- 1/20 ランタイムでのリサイズ禁止
- 1/20 エラーウィンドウ作成
- 1/20 designMode() メソッド追加

0.112
- 1/13 exeファイル変更。Tonyu.exeとPlayer.exe。Player.exeはデモが実行される
- 1/13 サンプルプログラムにエアーホッケー(Hockey)を追加
- 02/1/1 ネットランキング機能追加
- 12/28 PlainCharクラスにwait,notifyメソッド追加
- 01/12/28 起動画面を変更

0.111
- 12/08 Char クラスを推奨されないクラスに。代わりにSpriteCharクラスを使うようにする
- 12/08 サンプルプログラムにMeteoGrazer?(Meteo)を追加
- 12/08 rndメソッドに負の値を指定すると無限ループになるバグを修正
- 12/07 オブジェクト作成ダイアログを改造
- 12/06 TextChar , DxChar? ,SecretCharクラス、drawDxSprite?メソッド追加
- 12/05 color定数8種類($clWhiteなど)を定義

0.110
- 12/02 サンプルプログラムにブロックくずしを追加
- 12/01 $panelを使用可能に
- 11/26 ZOrderを用いてキャラクタの表示順序を設定可能に

0.109
- 11/24 APIリファレンスに$map.get $map.set $map.scrollTo を追加
- 11/24 オブジェクトを選択しないでコピーや切り取りを行うとエラーが出るのを修正
- 11/24 null が使用可能に
- 11/21 識別子に漢字を使用可能に
- 11/16 Ball.bmpの絵を改良
- 11/08 インスペクタをリニューアル

***

0.108 ページ切り替え対応  
0.107 マップ編集、表示対応  
0.106 ProjectManager?追加。クリップボードからの貼り付けによる不具合修正。マップスクロール機能追加、returnの後の式省略可能に。  
0.104 サウンド機能追加  
0.103 クラスリストの削除、並び替え追加、+=演算子追加  
0.102 $map.setBackGround?, $map.setBGColorメソッド追加  
0.101 ビットマップ読み込みの不具合を修正  

***

[ダウンロード](./download.html)

