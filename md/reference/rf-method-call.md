
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - メソッドの呼び出し</title>

## メソッドの呼び出し

**メソッド**とは、ある決まった処理をまとめたものです。  
プログラムからメソッドを呼び出すことによりその処理を実行させることができます。

あらかじめ定義されているメソッドを呼ぶには、次の書式に従います。

#### 書式
```
メソッド名 ( 引数 , 引数 ... )
```

メソッド名で指定された名前をもつメソッドを呼び出します。  
引数は、呼び出すメソッドに渡す値です。  
引数の詳細は、 それぞれのメソッドの説明のところに記載されています。

また、メソッドによっては呼び出す相手を指定する必要があります。  
その場合は次の書式に従います。

#### 書式
```
式. メソッド名 ( 引数 , 引数 ... )
```

式で表されるオブジェクトに対して、メソッド名で指定された名前をもつメソッドを呼び出します。  
式がが初期化されていなかったり、式がオブジェクトでないと、 次のメッセージが表示されます。

<pre>
<span style="color: #f00">変数$xxxは初期化されていないので、メソッド mmm を呼び出せません。</span>
</pre>
または
<pre>
<span style="color: #f00">nullはオブジェクトではないので、メソッド mmmを呼び出せません。</span>
</pre>

### 例1
```
extends SpriteChar;
while (1) {
  x=x+1;
  update(); 
}
```


▲ update(); によって、[update](./rf-plainchar#plaincharupdate)メソッドを呼び出します。
updateメソッドには引数が不要なので、() をつけるだけにします。

### 例2
```
extends SpriteChar;
while (1) {
  x=x+1;
  drawText(x,y,"文字",$clWhite);
  update();
}
```

▲ [drawText](./rf-sprite#spritedrawtext)メソッドは、文字を描画する処理を行います。どこにどんな文字を出すかといった情報を引数で渡します。

### 例3
 
オブジェクトを２つ作成します。名前は $ObjectA と $ObjectB にして下さい

$ObjectAをダブルクリックし、次のように入力します。
```
extends SpriteChar;
while (1) {
  x=x+1;
  update();
}
```
$ObjectBをダブルクリックし、次のように入力します。
```
extends SpriteChar;
while (1) {
  x=x+1;
  if (x==300) $ObjectA.die(); // x==300になったら、$ObjectAを消す
  update();
}
```

▲ オブジェクトに対して [die](./rf-plainchar#plainchardie)メソッドを呼ぶと、そのオブジェクトが消えます。

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

