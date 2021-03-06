
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - .演算子</title>

## .演算子

他のオブジェクトの変数を参照するには ``` . ``` を使います。

#### 書式
```
式 . 変数名
```

式 がオブジェクトの場合 、そのオブジェクトが持っている、変数名 で指定された名前をもつ変数を返します。  
式 が初期化されていなかったり、式がオブジェクトでないと、 次の[エラーメッセージ](./error-mes)が表示されます。

<pre>
<span style="color: #f00">変数$xxxは初期化されていないので、変数yyy を参照できません。</span>
または
<span style="color: #f00">nullはオブジェクトではないので、変数yyy を参照できません。</span>
</pre>

### 例1

- オブジェクトを２つ作成します。名前は $ObjectA と $ObjectB にして下さい
- $ObjectAをダブルクリックし、次のように入力します。

```
extends SpriteChar;
while (1) {
  x=x+1;
  update();
}
```

- $ObjectBをダブルクリックし、次のように入力します。

```
extends SpriteChar;
while (1) {
  x= $ObjectA.x +30; // x を、$ObjectAの変数xの値 + 30 にする
  $ObjectA.y =300; // $ObjectAの変数yの値 を 300 にする
  update();
}
```

▲ 実行すると、$ObjectA,$ObjectBはともに横に移動します。  
$ObjectA という名前を書き間違えると次のようなメッセージが出ます。名前は間違えないようにしてください。

<pre>
<span style="color: #f00">$xxx は初期化されていないので、変数x を参照できません。</span>
</pre>

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

