
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - FrameManager</title>

## FrameManagerクラス
１フレームに毎に特別な処理を行いたい場合に使うオブジェクトです

- フレームマネージャは１ページに１個しか作成できません
- 作成されたフレームマネージャは、作成したときの名前に関係なく$frameManagerというグローバル変数から参照することができます。

フレームマネージャには次の３つのメソッドを定義してください。
- onStart
- onBeforeMove
- onAfterMove

これらのメソッドは、次に示すようなタイミングで呼ばれます。

#### フレームマネージャの動作
<pre>
実行開始
   ↓
onStartを呼び出す
   ↓
 <i>*フレーム開始</i>
   ↓
onBeforeMoveを呼び出す
   ↓
各オブジェクトが動作する
   ↓
onAfterMoveを呼び出す
   ↓
各オブジェクトを描画する
   ↓
フレーム終了。<i>*フレーム開始</i> へ戻る 
</pre>

### 例1

FrameTest.tonyu
```
extends FrameManager;
function onStart() {
  print("スタート");
}
function onBeforeMove() {
  ctemp=0; // TestObjの個数カウンタをリセット
}
function onAfterMove() {
  count=ctemp;
  drawText(x,y,"TestObj の個数: "+count,$clWhite);
}
```

TestObj.tonyu (2,3個置いてみましょう)
```
extends SpriteChar;
vx=rnd(6)-3;
vy=rnd(6)-3;
while (screenOut()==0) {
  $frameManager.ctemp++; // TestObjの個数カウンタ増やす
  x+=vx;y+=vy;
  update(); 
}
```

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

