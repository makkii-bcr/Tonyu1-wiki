
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - DxChar</title>

## DxCharクラス

DxCharクラスのオブジェクトは、ビットマップパターンの半透明、回転拡大縮小表示が可能です

### 変数

- **x**  
&emsp;オブジェクトのx座標を表します。xの値が大きくなるほど右に移動します。
- **y**  
&emsp;オブジェクトのy座標を表します。yの値が大きくなるほど下に移動します。  
（※数学などでは、yが大きいほど上ですが、逆向きになります）
- **p**  
&emsp;表示する[キャラクタパターン](./wnd-char)の番号を表します。  
&emsp;キャラクタパターンと番号との対応は、キャラクタパターンウィンドウを参考にしてください。
- **f**  
&emsp;fに１を代入すると、キャラクタパターンの左右を反転します。0を設定すると反転をやめます。
- **zOrder**  
&emsp;この値が小さいほど、オブジェクトを手前に表示します。
- **scaleX**  
&emsp;オブジェクトの拡大率を指定します。  
&emsp;scaleyが未定義または0の場合、縦横比は1のままです。
- **scaley**  
&emsp;scaleyを指定すると、横をscaleX倍、縦をscaley倍拡大します。
- **angle**  
&emsp;オブジェクトの回転を指定します。単位は度で右回りです。
- **alpha**  
&emsp;オブジェクトの透明度を指定します。  
&emsp;255が完全に不透明で、減らすにしたがって透明になっていきます。  
&emsp;0にすると見えなくなります。


### メソッド一覧

- [newAnimation](#dxcharcharnewanimation)
- [PlainChar](./rf-plainchar)クラスのメソッド
- [Sprite](./rf-sprite)クラスのメソッド
- [Object](./rf-object)クラスのメソッド

***

## DxChar.newAnimation
新規AnimationAdaptorを作成します。

**書式**
```
newAnimation()
```

**戻り値**

新規作成された[AnimationAdaptor](./rf-animationadaptor)

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

