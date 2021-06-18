
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
- die
- update
- updateEx
- wait
- notify
- appear
- setVisible
- timeStop

### 判定
- [for (xx in $chars)](./rf-for-chars)
- crashTo
- isDead
- screenOut
- getVisible
- crashToLine

### イベント
- onUpdate
- onMouseDown
- onDie
- onDraw
- onAppear

### アニメーション
- newAnimation

### グラフィックス
- drawText
- setFont
- drawLine
- fillRect
- color
- colorHSL
- getRed
- getGreen
- getBlue
- drawSprite
- drawDXSprite
- centerText
- drawVerticalText
- drawPolygon
- drawRect
- drawRectDx
- drawTriangle
- gradationLine
- gradationRect
- gradationText
- パネルの使い方

### マップ
- [$map](./rf-map)
  - [$map.set](./rf-map#mapset)
  - [$map.get](./rf-map#mapget)

### 画面制御
- [$map.scrollTo](./rf-map#mapscrollto)
- [$viewX,$viewY](./rf-view-xy)
- getScreenX,getScreenY
- [$screenWidth,$screenHeight](./rf-screen-wh),[$Window.sizeable](./rf-window#windowsizeable)
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
- [valueOf](./rf-object#objectvalueOf)
- [amod](./rf-object#objectamod)

### 配列
- [Array](./rf-array)

### ハッシュテーブル
- [Hashtable](./rf-hashtable)

### 文字列
- [String](./rf-string)
  - 文字列結合 +演算子
  - 文字列比較===演算子
  - String.length
  - String.substring
  - String.split

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

