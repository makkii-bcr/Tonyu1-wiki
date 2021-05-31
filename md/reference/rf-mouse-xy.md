
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - $mouseX, $mouseY</title>

## $mouseX, $mouseY

マウスカーソルの位置($mouseX :x座標 / $mouseY :y座標) を返します。

メインウィンドウの左上が **($mouseX,$mouseY)=(0,0)**  
メインウィンドウの右下が **($mouseX,$mouseY)=($screenWidth,$screenHeight)** になります。

ver 1.09から、画面外にいるマウスカーソルも位置がわかるようになりました。

- メインウィンドウより左側にいる場合、$mouseXが負の値になります。
- メインウィンドウより上にいる場合、$mouseYが負の値になります。

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

