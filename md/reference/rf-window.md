
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - Window</title>

## $windowオブジェクト
ウィンドウの制御を行います

### メソッド一覧
|||
|-|-|
|[setDrawMode](#windowsetdrawmode)|描画モードを変更します|
|[setDrawModeForceMode](#windowsetdrawmodeforcemode)|Vista以降で実行時でも描画モードを変更できるようにします|

### 変数一覧
|||
|-|-|
|[sizeable](#windowsizeable)|この値を1にすると、実行時にウィンドウの大きさをマウスによって変更できます|

***

## $window.setDrawMode
描画モードを変更します

```
$window.setDrawMode(m);
```
- **m**  
&emsp;"A" "B" "C" いずれかの文字列

※ ver1.30以降、Windows Vista以降で実行時はsetDrawMode()から描画モードを変更できないようにしました  
&emsp; ウィンドウ上部のメニューから選択した場合は変更できます  
&emsp; どうしても変更したい場合は[setDrawModeForceMode](#windowsetdrawmodeforcemode)で効くように変更できます  
&emsp; Windows XP以前で実行時はsetDrawModeが効きます  

PCやOSのバージョンによって、動作負担が変わったり、画面のかくつき等が変わります  
こちらで観測した限りでは下記のような特性があります

||XP以前|Vista以降|
|-|-|-|
|**方式A**|PCによって描画負担が軽いor重い|描画負担が軽い・スタッタリング(\*2)が少ない|
|**方式B**|Aの特性と同じことが多いがティアリング(\*1)が少ない|スタッタリング(\*2)が多い|
|**方式C**|PCによって描画負担が軽いor重い<br>どのPCでも半透明の描画をすると重くなる|描画負担が重い<br>どのPCでも半透明の描画をすると重くなる|

- XP以前では、方式Aが軽いPCと、方式Cが軽いPCの２パターンがあるようです
- Vista以降では、方式Aが軽いPCしかみたことが無いので、方式A一択となりそうです
- 方式Cは、どのPCでも半透明の描画をすると重くなります
- Windows 8、またはWindows Vista/7でAeroが有効の場合は、OSの制御で通常ティアリング(\*1)は発生しません

\*1）ティアリング [(ドスパラの解説ページ)](http://faq3.dospara.co.jp/faq/show/8398?site_domain=default)  
\*2）スタッタリング [(ドスパラの解説ページ)](http://faq3.dospara.co.jp/faq/show/8398?site_domain=default)  
***

## $window.setDrawModeForceMode
##### (1_30_2022_0804以降)

Windows Vista以降で実行時でも、描画モードを変更できるようにします

```
$window.setDrawModeForceMode(mode);
```
- **mode**  
&emsp;0: Vista以降では[setDrawMode](#windowsetdrawmode)が効かなくなります（デフォルト）  
&emsp;1: Vista以降でも[setDrawMode](#windowsetdrawmode)を効くようにします  

※ ```$window.setDrawModeForceMode(1);```を実行した後に、  
&emsp; [$window.setDrawMode](#windowsetdrawmode)が効くようになります

***

## $window.sizeable
この値を1にすると、実行時にウィンドウの大きさをマウスによって変更できます

**関連**

- [$screenWidth](./rf-screen-wh)
- [$screenHeight](./rf-screen-wh)

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

