
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - $displayWidth, $displayHeight</title>

## $displayWidth, $displayHeight
##### (1_29_2021_0501以降)

モニターの解像度を取得します。

$displayWidth には横のピクセル数、  
$displayHeight には縦のピクセル数が格納されています。  

※ Windows 8.1, 10などで、ディスプレイ設定のスケーリングが100%以外に設定されている環境では、  
&emsp; 仮想のピクセル数となります。

## $_displayRealWidth, $_displayRealHeight
##### (1_29_2021_0630以降)

実際の解像度は、下記の変数に格納されています。

- $_displayRealWidth  
- $_displayRealHeight

ディスプレイ設定のスケーリング設定には影響されません。

## $_displayFrequency
##### (1_29_2021_0630以降)

モニターのリフレッシュレート（周波数）を取得します。

例えば、60Hzの設定であれば60が返ります。

## $_displayColor
##### (1_29_2021_0630以降)

モニターの色数を取得します。

例えば、32bit色の設定であれば32が返ります。

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

