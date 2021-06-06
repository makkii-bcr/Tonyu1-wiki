
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - $ranking</title>

## $rankingオブジェクト

ネットランキングCGIの呼び出しを行います

### メソッド一覧
|||
|-|-|
|[openBrowser](#rankingopenbrowser)|メニューの「ウィンドウ」＞「ネットランキング」で指定したURLを開きます。|
|[setParam](#rankingsetparam)|ランキングCGIに渡すパラメータを設定します。|

***

## $ranking.openBrowser
メニューの「ウィンドウ」＞「ネットランキング」で指定したURLを開きます。

**書式**
```
openBrowser()
```

***

## $ranking.setParam
ランキングCGIに渡すパラメータを設定します。

**書式**
```
setParam(name,value)
```

- **name**  
&emsp;パラメータ名
- **value**
&emsp;値

ネットランキングの詳しい設置法は、[チュートリアル](./tr-stg11-1)を参照してください

nameで指定される名前のパラメータに 値value を設定します。 valueには文字列または数値を指定します。

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

