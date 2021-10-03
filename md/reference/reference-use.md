
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

## 命令リファレンス：用途別

### 入出力
- [print](./rf-object#objectprint)
- [getkey](./rf-object#objectgetkey)
- [Joystick](./rf-joystick)
- [$mouseX,$mouseY](./rf-mouse-xy)
- [$mouseManager](./rf-mousemanager)
- [$InputBox](./rf-inputbox)
  - [waitInput](./rf-plainchar#plaincharwaitinput)
- [$TextEditor](./rf-texteditor)
  - [TextChar.edit](./rf-textchar#textcharedit)
- [$SelectBox](./rf-selectbox)
  - [waitSelect](./rf-plainchar#plaincharwaitselect)

### オブジェクトの種類
- スプライト([SpriteChar](./rf-spritechar)クラス)
- DXスプライト([DxChar](./rf-dxchar)クラス)
- テキスト([TextChar](./rf-textchar)クラス)
- シークレット([SecretChar](./rf-secretchar)クラス)
- パネル([PanelChar](./rf-panelchar)クラス)
- フレームマネージャ([FrameManager](./rf-framemanager)クラス)

### オブジェクト制御
- [die](./rf-plainchar#plainchardie)
- [update](./rf-plainchar#plaincharupdate)
- [updateEx](./rf-plainchar#plaincharupdateex)
- [wait](./rf-plainchar#plaincharwait)
- [notify](./rf-plainchar#plaincharnotify)
- [appear](./rf-object#objectappear)
- [setVisible](./rf-plainchar#plaincharsetvisible)
- [timeStop](./rf-object#objecttimestop)

### 判定
- [for (xx in $chars)](./rf-for-chars)
- [crashTo](./rf-plainchar#plaincharcrashto)
- [isDead](./rf-plainchar#plaincharisdead)
- [screenOut](./rf-plainchar#plaincharscreenout)
- [getVisible](./rf-plainchar#plainchargetvisible)
- [crashToLine](./rf-plainchar#plaincharcrashtoline)

### イベント
- [onUpdate](./rf-plainchar#plaincharonupdate)
- [onMouseDown](./rf-plainchar#plaincharonmousedown)
- [onDie](./rf-plainchar#plaincharondie)
- [onDraw](./rf-plainchar#plaincharondraw)
- [onAppear](./rf-plainchar#plaincharonappear)

### アニメーション
- [newAnimation](./rf-spritechar#spritecharnewanimation)

### グラフィックス
- [drawText](./rf-sprite#spritedrawtext)
- [setFont](./rf-sprite#spritesetfont)
- [drawLine](./rf-sprite#spritedrawline)
- [fillRect](./rf-sprite#spritefillrect)
- [color](./rf-object#objectcolor)
- [colorHSL](./rf-object#objectcolorhsl)
- [getRed](./rf-object#objectgetred)
- [getGreen](./rf-object#objectgetgreen)
- [getBlue](./rf-object#objectgetblue)
- [drawSprite](./rf-sprite#spritedrawsprite)
- [drawDxSprite](./rf-sprite#spritedrawdxsprite)
- [centerText](./rf-sprite#spritecentertext)
- [drawVerticalText](./rf-sprite#spritedrawverticaltext)
- [drawPolygon](./rf-sprite#spritedrawpolygon)
- [drawRect](./rf-sprite#spritedrawrect)
- [drawRectDx](./rf-sprite#spritedrawrectdx)
- [drawTriangle](./rf-sprite#spritedrawtriangle)
- [gradationLine](./rf-sprite#spritegradationline)
- [gradationRect](./rf-sprite#spritegradationrect)
- [gradationText](./rf-sprite#spritegradationtext)
- [パネルの使い方](./rf-panel)

### マップ
- [$map](./rf-map)
  - [$map.set](./rf-map#mapset)
  - [$map.get](./rf-map#mapget)

### 画面制御
- [$map.scrollTo](./rf-map#mapscrollto)
- [$viewX,$viewY](./rf-view-xy)
- [getScreenX](./rf-plainchar#plainchargetscreenx),[getScreenY](./rf-plainchar#plainchargetscreeny)
- [$screenWidth,$screenHeight](./rf-screen-wh),[$window.sizeable](./rf-window#windowsizeable)
- [$windowX,$windowY](./rf-window-xy)
- [$map.setBGColor](./rf-map#mapsetbgcolor)

### ページ制御
- [$projectManager.loadPage](./rf-projectmanager#projectmanagerloadpage)

### サウンド
- [$mplayer.play](./rf-mplayer#mplayerplay)
- [$mplayer.stop](./rf-mplayer#mplayerstop)

### 数学関数
- [$Math](./rf-math)
- [randomize](./rf-object#objectrandomize)
- [rnd](./rf-object#objectrnd)
- [abs](./rf-object#objectabs)
- [sin](./rf-object#objectsin)
- [cos](./rf-object#objectcos)
- [angle](./rf-object#objectangle)
- [dist](./rf-object#objectdist)
- [angleDiff](./rf-object#objectanglediff)
- [trunc](./rf-object#objecttrunc)
- [floor](./rf-object#objectfloor)
- [valueOf](./rf-object#objectvalueof)
- [amod](./rf-object#objectamod)

### 配列
- [Array](./rf-array)

### ハッシュテーブル
- [Hashtable](./rf-hashtable)

### 文字列
- [String](./rf-string)
  - [文字列結合 +演算子](./rf-string#文字列結合)
  - [文字列比較 ==演算子](./rf-string#文字列比較)
  - [String.length](./rf-string#stringlength)
  - [String.substring](./rf-string#stringsubstring)
  - [String.split](./rf-string#stringsplit)

### ファイル
- [ファイルの扱いについて](./rf-file-handling)
- [FileReader](./rf-filereader)
- [FileWriter](./rf-filewriter)

### ネットランキング
- [$ranking.setParam](./rf-ranking#rankingsetparam)
- [$ranking.openBrowser](./rf-ranking#rankingopenbrowser)

### 設定
- [$Options.set](./rf-options#optionsset)
- [$Options.get](./rf-options#optionsget)

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

