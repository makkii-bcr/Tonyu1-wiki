

[←前](./tr-stg07)&emsp;[次→](./tr-stg09)&emsp;[チュートリアル](./tutorial)&emsp;[Wikiトップ](./)

<title>チュートリアル - 実践編 - シューティングゲーム (8/11) - 得点を表示する</title>

### チュートリアル - 実践編 - シューティングゲーム (8/11)
## 得点を表示する

### 文字オブジェクトを作る

やっつけた敵に応じて得点を表示するようにしましょう。

まず得点を表示するためのオブジェクトを作ります。オブジェクトを作るを参考にオブジェクトを作成します。  
「オブジェクトの種類」を「テキスト」にします。

![newtext.png](./img/newtext.png)

- <span style="color: #88a">間違えて「テキスト」でなく、「スプライト」でオブジェクトを作ってしまったら....<br>
この場合、オブジェクトをダブルクリックし、プログラム先頭の extends SpriteChar; を extends TextChar; に変更し、<br>
一回実行し停止させるとテキストオブジェクトに変わります。<br></span>

オブジェクトをダブルクリックして、次のように入力します。

```
extends TextChar;
$score=0;
while(1) {
  text="Score:"+$score;
  update();
}
```

### 文字を表示する

テキストオブジェクトは、文字をするためのオブジェクトです。  
変数textに文字列を代入すると、その内容が画面に表示されます。  
上のプログラムでは、文字列&quot;Score:&quot;の後ろに変数$scoreの内容を 付け加えたものをtextに代入しています。

### グローバル変数を使う

$scoreという変数には頭に&quot;&#036;&quot;がついています。$で始まる変数はグローバル変数といい、どのオブジェクトからも参照できる変数です。  
逆に、$がついていない変数は、そのオブジェクトが固有にもっている変数です。これをオブジェクト変数と呼びます。  
オブジェクト変数は、同じ名前でもオブジェクトが違っていれば全く別の変数となります。

$scoreをグローバル変数にしたのは、敵などの他のオブジェクトが得点計算を行う必要があり、  
表示をこの得点表示用のオブジェクトが行う必要があるからです。

とりあえず実行させてみると、画面上にScore : 0という文字が出ています。

### 得点計算をする

敵が弾にあたってやられた時に得点が増えるようにしましょう。  
敵をダブルクリックし、次のように変更します。

<pre>
extends SpriteChar;
function onDie() {
  appear(new Bomb(x, y, $pat_Sample+4));
}
function atariHantei() {
  for (t in $chars) {
    if (t is Tama && crashTo(t)) <span style="color: #f00">{
      die();
      $score=$score+10;
    }</span>
  }
  if (crashTo($myChar)) $myChar.die();
}
nexty=rnd(50)+100;
while (y&lt;nexty) {
  y=y+2;
  atariHantei();
  update();
}
if (x<$myChar.x) vx=2; else vx=-2;
while (y<$screenHeight) {
  y=y+3;
  x=x+vx;
  atariHantei();
  update();
}
</pre>

実行すると、敵をやっつけるたびに得点がふえていきます。

***

[←前](./tr-stg07)&emsp;[次→](./tr-stg09)&emsp;[チュートリアル](./tutorial)&emsp;[Wikiトップ](./)
