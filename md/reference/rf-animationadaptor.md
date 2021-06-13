
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - AnimationAdaptor</title>

## AnimationAdaptorクラス
AnimationAdaptorとは、キャラクタパターンを次々に変化させることによるアニメーションを簡単に実現するためのオブジェクトです。

ここでは、図1のようなキャラクタを用意して、オブジェクトを歩かせる処理を考えます。

**図1：**  
![chars.png](./img/chars.png)

まず簡単な例を示します。次のオブジェクトは、キャラクタパターン$pat_chars+0と$pat_chars+1を５フレームごとに交互に表示します。

### 例1
```
extends SpriteChar;
a=newAnimation();
a.loop($pat_chars+0,$pat_chars+1,5);
wait();
```

※ newAnimationメソッド, loopメソッドの説明も参照してください。

次のオブジェクトは、カーソルキーを使って歩きながら移動するオブジェクトです。

### 例2
```
extends SpriteChar;

a=newAnimation();
while(1) {
  a.pause(); // 動いていないときはアニメーションを止める。
  // 各カーソルキーが押されたとき、アニメーションを設定する。 左右移動の場合fによって向きも指定する。
  if (getkey(39)>0) {a.loop($pat_chars+2,$pat_chars+3,3); f=0; x+=3;}  
  if (getkey(37)>0) {a.loop($pat_chars+2,$pat_chars+3,3); f=1; x-=3;} 
  if (getkey(40)>0) {a.loop($pat_chars+0,$pat_chars+1,3); y+=3;}
  if (getkey(38)>0) {a.loop($pat_chars+4,$pat_chars+5,3); y-=3;}
  update();
}
```

※ アニメーションさせるコマ数が３つ以上の場合、最初のパターンを１番目の引数、最後のパターンを２番目の引数に指定します（途中のパター ンは指定しません）

### メソッド一覧
|||
|-|-|
|[play](#animationadaptorplay)|指定したアニメーションを１回だけ実行します。|
|[loop](#animationadaptorloop)|指定したアニメーションを繰り返し実行します。|
|[swing](#animationadaptorswing)|指定したパターンの間を往復するアニメーションを実行します。|
|[pause](#animationadaptorpause)|アニメーションを一時停止します。|
|[resume](#animationadaptorresume)|pauseメソッドで停止したアニメーションを再開します。|

***

## AnimationAdaptor.play
指定したアニメーションを１回だけ実行します。

**書式**
```
play(from,to,spd) 
```

- **from**  
&emsp;アニメーションの最初のキャラクタパターン
- **to**  
&emsp;アニメーションの最後のキャラクタパターン
- **spd**  
&emsp;アニメーション速度( spdフレームにつき1パターン進む 。 1が最速 )

**例1**
```
extends SpriteChar;
anim=newAnimation();
anim.play($Pat_Bomb+3,$Pat_Bomb+6,3);
wait();
```

▲ このオブジェクトは、図1ように$Pat_Bomb+3から$Pat_Bomb+6までを順番に表示します。

![bpats3.png](./img/bpats3.png)

***

## AnimationAdaptor.loop
指定したアニメーションを繰り返し実行します。

**書式**
```
loop(from,to,spd) 
```

- **from**  
&emsp;アニメーションの最初のキャラクタパターン
- **to**  
&emsp;アニメーションの最後のキャラクタパターン
- **spd**  
&emsp;アニメーション速度( spdフレームにつき1パターン進む 。 1が最速 )

**例1**
```
extends SpriteChar;
anim=newAnimation();
anim.loop($Pat_Sample+4,$Pat_Sample+6,3);
wait();
```
 
▲ このオブジェクトは、図1のように$Pat_Sample+4から$Pat_Sample+6までを順番に表示し、再び$Pat_Sample+4に戻るという動作を繰り返 します。

![bpats4.png](./img/bpats4.png)

***

## AnimationAdaptor.swing

アニメーションを繰り返し実行します。指定したパターンの間を往復するアニメーションを実行します。

**書式**
```
swing(from,to,spd)
```

- **from**  
&emsp;アニメーションの最初のキャラクタパターン
- **to**  
&emsp;アニメーションの最後のキャラクタパターン
- **spd**  
&emsp;アニメーション速度( spdフレームにつき1パターン進む 。 1が最速 )

**例1**
```
extends SpriteChar;
anim=newAnimation();
anim.swing($Pat_Sample+4,$Pat_Sample+6,3);
wait();
```

このオブジェクトは、次の順番でパターンを切り替えます、この動作を繰り返します。

$Pat_Sample+4 → $Pat_Sample+5 → $Pat_Sample+6 → $Pat_Sample+5 → 再び$Pat_Sample+4...

![bpats2.png](./img/bpats2.png)

***

## AnimationAdaptor.pause

アニメーションを一時停止します。

**書式**
```
pause()
```

***

## AnimationAdaptor.resume

pauseメソッドで停止したアニメーションを再開します。

**書式**
```
resume()
```

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

