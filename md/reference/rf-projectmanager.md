
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - $projectManager</title>

## $projectManagerオブジェクト

ページの読み込みを行います

### メソッド一覧
|||
|-|-|
|[loadPage](#projectmanagerloadpage)|他のページを読み込みます。|
|[getCurrentPageName](#projectmanagergetcurrentpagename)|現在開いているページの名前を得ます。|

***

## $projectManager.loadPage
他のページを読み込みます。

**書式**
```
loadPage(page)
```

- **page**  
&emsp;読み込むページ

pageに指定するのは、[プロジェクトマネージャ](./wnd-prjmgr)に表示されるページ名です。  
例えば、図1のように表示されている場合、$page_index, $page_stage2,$page_startのいずれかを指定します。

![1men.png](./img/1men.png)

**例1**
```
$projectManager.loadPage($page_index);
```
▲ 図1で赤く囲ったページ($page_index)を読み込みます。

※ loadPageメソッド実行後、次に[update](./rf-plainchar#plaincharupdate)、[updateEx](./rf-plainchar#plaincharupdateex)、[wait](./rf-plainchar#plaincharwait)の いずれかのメソッドが呼ばれるまでは、移動前のページで処理が続行します。

※ ページを切り替えたときにBGMを止めない方法

```
$Options.set("sound_stopOnPageLoad", 1);
```

参照： [$Options.set](./options#optionsset)メソッド

***

## $projectManager.getCurrentPageName

現在開いているページの名前を得ます。

**書式**
```
getCurrentPageName() 
```

**戻り値**  

現在開いているページの名前をあらわす文字列

**例1**
```
extends TextChar;
text="現在のページ名は"+$projectManager.getCurrentPageName()+"です";
wait();
```

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

