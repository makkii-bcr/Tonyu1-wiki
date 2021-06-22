
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - SpriteChar</title>

## SpriteCharクラス
SpriteCharクラスのオブジェクトは、ビットマップグラフィックスを表示することができます。

### 変数

- **x**  
&emsp;オブジェクトのx座標を表します。xの値が大きくなるほど右に移動します。
- **y**  
&emsp;オブジェクトのy座標を表します。yの値が大きくなるほど下に移動します。 （※数学などでは、yが大きいほど上ですが、逆向きになります）
- **f**  
&emsp;fに１を代入すると、キャラクタパターンの左右を反転します。0を設定すると反転をやめます。
- **zOrder**  
&emsp;この値が小さいほど文字が手前に表示されます。


### メソッド一覧
- [newAnimation](#spritecharnewanimation)
- [PlainChar](./rf-plainchar)クラスのメソッド
- [Sprite](./rf-sprite)クラスのメソッド
- [Object](./rf-object)クラスのメソッド

***

## SpriteChar.newAnimation
新規AnimationAdaptorを作成します。

**書式**
```
newAnimation()
```

**戻り値**

新規作成された[AnimationAdaptor](./rf-animationadaptor)

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

