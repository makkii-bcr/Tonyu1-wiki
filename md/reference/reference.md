
[Wikiトップ](./)

## 命令リファレンス

[命令リファレンス:用途別](./reference-use)

### 文法
[代入](./rf-assign)
[算術演算](./rf-arithmetic)
[演算代入](./rf-assign-oper)
[変数](./rf-variable)
[.演算子](./rf-operator)  
[if](./rf-if)
[while](./rf-while)
[break](./rf-break)
[switch](./rf-switch)
[注釈(コメントアウト)](./rf-comment)  
[for](./rf-for)
[for..in](./rf-for-in)
[for (xx in $chars)](./rf-for-chars)  
[メソッドの呼び出し](./rf-method-call)
[メソッドの定義](./rf-method-define)
[return](./rf-return)  
[extends](./rf-extends)
[is](./rf-is)  
[this](./rf-this)
[null](./rf-null)  

### グローバル変数一覧
|||
-|-
[$mouseX<br>$mouseY](./rf-mouse-xy)|マウスカーソルの位置を返します。
[$screenWidth<br>$screenHeight](./rf-screen-wh)|ウィンドウの幅や高さを取得・設定できます。
[$viewX<br>$viewY](./rf-view-xy)|[$map.scrollTo](./rf-map#mapscrollto)でスクロールした位置を得ます。
[$windowX<br>$windowY](./rf-window-xy)|ウィンドウの位置を得たり、ウィンドウの移動を行います。
[$fullScreen](./rf-fullscreen)|フルスクリーンで起動したかどうか判定できます。
[$displayWidth, $_displayRealWidth<br>$displayHeight, $_displayRealHeight<br>$_displayFrequency, $_displayColor](./rf-display-wh)|モニターの解像度・リフレッシュレート・色数を取得します。
[$osPlatformId, $osMajorVer,<br>$osMinorVer, $osBuildNumber](./rf-getosversion)|Windowsのバージョンを返します。
[$_fps, $_rps](./rf-fps-rps)|FPSやRPS(実行速度)を取得できます。
[$windowActive](./rf-window-active)|Tonyuがアクティブかを返します。

### オブジェクト・クラス一覧  
  

|||
|--|--|
|[$InputBox](./rf-inputbox)|テキストを入力するためのウィンドウを表示します|
|[$TextEditor](./rf-texteditor)|[$InputBox](./rf-inputbox)より小型の、テキスト入力ウィンドウを表示します。|
|[$map](./rf-map)|マップパターンの設定や取得、画面のスクロールを行います|
|[$Math](./rf-math)|高度な数学関数を提供します|
|[$mplayer](./rf-mplayer)|音楽、効果音の制御を行います|
|[$mouseManager](./rf-mousemanager)|マウスの制御(マウスカーソルの強制移動、マウスの非表示など)を行います。|
|[$Options](./rf-options)|各種設定を行います|
|[$panel](./rf-panel-g)|自動的に作成される[Panel](./rf-panel)クラスのオブジェクトです。|
|[$projectManager](./rf-projectmanager)|ページの読み込みを行います|
|[$ranking](./rf-ranking)|ネットランキングCGIの呼び出しを行います|
|[$SelectBox](./rf-selectbox)|選択肢を表示するダイアログボックスです|
|[$System](./rf-system)|システムの終了などを行います。|
|[$window](./rf-window)|ウィンドウの制御を行います|
|[AbstractHashtable](./rf-abstracthashtable)|[Hashtable](./rf-hashtable)、[LightHashtable](./rf-lighthashtable)の親クラスです。|
|[AnimationAdaptor](./rf-animationadaptor)|AnimationAdaptorとは、キャラクタパターンを次々に変化させることによるアニメーションを簡単に実現するためのオブジェクトです。|
|[Array](./rf-array)|Array(配列)クラスのオブジェクトには、複数の値（要素）を格納することができます。|
|[CheckBox](./rf-checkbox)|チェックボックスを作成します|
|[DXChar](./rf-dxchar)|DXCharクラスのオブジェクトは、ビットマップパターンの半透明、回転拡大縮小表示が可能です|
|[FileReader](./rf-filereader)|ファイルからデータを読み込みます。ファイルについては[ファイルの扱いについて](./rf-file-handling)を参照してください|
|[FileWriter](./rf-filewriter)|ファイルにデータを書き出します。|
|[FrameManager](./rf-framemanager)|１フレームに毎に特別な処理を行いたい場合に使うオブジェクトです|
|[Hashtable](./rf-hashtable)|複数の値（要素）を入れることが可能なオブジェクトです。各要素へのアクセスにはキーと呼ばれる値を用います。|
|[Joystick](./rf-joystick)|ジョイスティックの入力を調べます|
|[LightHashtable](./rf-lighthashtable)|[ハッシュテーブル](./rf-hashtable)の一種で、処理速度が速い代わりに、キーに文字列が使えません。|
|[Matrix](./rf-matrix)|2次元配列を格納するオブジェクトです。|
|[Object](./rf-object)|すべてのオブジェクトの親クラスです。Objectクラスのメソッドはどのクラスからも利用できます。|
|[Panel](./rf-panel)|通常の描画メソッド([drawText](./rf-sprite#spritedrawtext),[drawLine](./rf-sprite#spritedrawline),[drawSprite](./rf-sprite#spritedrawsprite),[fillRect](./rf-sprite#spritefillrect))では、描画されたものは１フレームごとに消去されてしまいます。一度描画したグラフィックスを消さないでおくときは、パネルを使うと便利です。|
|[PanelChar](./rf-panelchar)|任意の図形（線、四角形、文字などの組み合わせ)が描けるオブジェクトです|
|[PlainChar](./rf-plainchar)|画面上に表示されるオブジェクト([SpriteChar](./rf-spritechar)、[DXChar](./rf-dxchar)、[TextChar](./rf-textchar)、[SecretChar](./rf-secretchar))の親クラスです。|
|[RadioButton](./rf-radiobutton)|ラジオボタンを作成します|
|[SecretChar](./rf-secretchar)|SecretCharクラスのオブジェクトは、実行中は表示されません。（設計時には表示されます）|
|[SpriteChar](./rf-spritechar)|SpriteCharクラスのオブジェクトは、ビットマップグラフィックスを表示することができます。|
|[Sprite](./rf-sprite)|画面上に出現するすべてのオブジェクト([PlainChar](./rf-plainchar)クラス)の親クラスです。描画命令などが定義されています|
|[String](./rf-string)|文字列を表すオブジェクトです|
|[TextChar](./rf-textchar)|TextCharクラスのオブジェクトは、文字を表示することができます。|
|[TimeStopper](./rf-timestopper)|時間の停止を行います|

***

[Wikiトップ](./)

