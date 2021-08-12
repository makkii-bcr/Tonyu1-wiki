
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - for (xx in $chars)</title>

## for (xx in $chars)

画面上のすべてのオブジェクトに対して処理を行います

#### 書式
```
for (変数名 in $chars) 処理
```

変数名で表される変数に画面上のオブジェクトを順番に代入していき、処理を行います。

### 例1

Enemy.tonyu
```
extends SpriteChar;
while (1) {
  y=y+1;
  update();
}
```

Jiki.tonyu
<pre>
extends SpriteChar;
while (1) {
  if (getkey(39)&gt;0) x+=3;
  if (getkey(37)&gt;0) x-=3;
  if (getkey(40)&gt;0) y+=3;
  if (getkey(38)&gt;0) y-=3;
  for (e in $chars) {
    if (e <a href="./rf-is">is</a> Enemy && <a href="./rf-plainchar#plaincharcrashto">crashTo</a>(e)) <a href="./rf-plainchar#plainchardie">die</a>();
  }
  update();
}
</pre>

▲ Jikiは、画面上のEnemyクラスのオブジェクトeのうちのどれかに対して、 [crashTo](./rf-plainchar#plaincharcrashto)(e)が成立すれば[die](./rf-plainchar#plainchardie)();を呼び出します。  
すなわち、Enemyクラスのいずれかに当たると死亡します。

### 例2

例えば新たにEnemy2を増やして、別クラスの当たり判定を増やす場合です。  
以下は<span style="color: #f00">**悪い例**</span>です。

Jiki.tonyu
<pre>
extends SpriteChar;
while (1) {
  if (getkey(39)>0) x+=3;
  if (getkey(37)>0) x-=3;
  if (getkey(40)>0) y+=3;
  if (getkey(38)>0) y-=3;
  for (e in $chars) {
    if (e is Enemy && crashTo(e)) die();
  }
  <span style="color: #f00">for (e in $chars) {
    if (e is Enemy2 && crashTo(e)) die();
  }</span>
  update();
}
</pre>

▲ ```for (e in $chars)``` を２回実行しています。これでも判定はできますが、  
全オブジェクトを２回判定しているので、オブジェクトが増えると処理落ちしやすくなってしまいます。  
これにEnemy3, Enemy4, ... などと増やしていくと、ちょっとオブジェクトを増やしただけで、かなり重くなるかもしれません。

以下の実装の方が処理が軽くなります。

Jiki.tonyu
<pre>
extends SpriteChar;
while (1) {
  if (getkey(39)>0) x+=3;
  if (getkey(37)>0) x-=3;
  if (getkey(40)>0) y+=3;
  if (getkey(38)>0) y-=3;
  for (e in $chars) {
    <span style="color: #f00">if (e is Enemy || e is Enemy2) {
      if (crashTo(e)) {
        die();
      }
    }</span>
  }
  update();
}
</pre>

▲ この書き方であれば、```for (e in $chars)``` は１回だけで済むので、判定処理が軽くなります。

### 関連

- [is](./rf-is)

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

