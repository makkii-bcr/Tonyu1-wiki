
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - Hashtable</title>

## Hashtableクラス
複数の値（要素）を入れることが可能なオブジェクトです。各要素へのアクセスにはキーと呼ばれる値を用います。

ハッシュテーブルは、[配列](./rf-array)のように複数の値（要素）を入れることが可能なオブジェクトです。

配列に入っている要素を参照するときは、「3番目の要素」というように数値を使って要素を参照しましたが、  
ハッシュテーブルは、「文字 列"red"に対応する要素」というように任意の値を使って要素を参照できます。  
なお、上の例で示した"red"のような、要素を参照するための値をキーと呼びます。

### 例1

Colors.tonyu
```
extends SpriteChar;
wait();
```

HashTester.tonyu
<pre>
extends SpriteChar;
green=appear(new Colors(100,300,3));
yellow=appear(new Colors(150,300,5));
red=appear(new Colors(200,300,7));

h=new Hashtable(); // ハッシュテーブル作成
h.<a href="#hashtableput">put</a>("あか",red); // キー "あか" にオブジェクト red を割り当てる
h.put("きいろ",yellow); // キー "きいろ" にオブジェクト yellow を割り当てる
h.put("みどり",green); // キー "みどり" にオブジェクト green を割り当てる

s="あか";
while (1) {
  s=waitInput("いろ？","あかorみどりorきいろ",s);
  target=h.<a href="#hashtableget">get</a>(s); // sをキーとして要素(green,yellow,red、またはnull)をとりだす。
  if (target!=null) target.y-=16;
  update();
}
</pre>


### メソッド一覧
|||
-|-
[get](#hashtableget)|指定されたキーに対応する値を取り出します
[put](#hashtableput)|キーと値の組を追加します。
[iterator](#hashtableiterator)|キーや値をすべて調べるためのイテレータを作成します。
[remove](#hashtableremove)|キーとそれに対応する値を削除します。
[size](#hashtablesize)|格納されているキーの数(=値の数) を返します。
[hasNext](#hashtablehasnext)|[イテレータ](#hashtableiterator)から[nextKey](#hashtablenextkey)メソッドや[nextValue](#hashtablenextvalue)メソッドを使って取り出せる組が残っているか調べます。
[nextKey](#hashtablenextkey)|[イテレータ](#hashtableiterator)から次の組を取り出し、取り出した組のキーを返します。
[nextValue](#hashtablenextvalue)|[イテレータ](#hashtableiterator)から次の組を取り出し、取り出した組の値を返します。
***

## Hashtable.get
ハッシュテーブルから指定されたキーに対応する値を取り出します

**書式**
```
get(key)
```

- **key**  
&emsp;キー

**戻り値**

ハッシュテーブルにおけるキーkeyに対応する値

***

## Hashtable.put
ハッシュテーブルにキーと値の組を追加します。

**書式**
```
put(key,value)
```
- **key**  
&emsp;追加するキー
- **value**  
&emsp;キーに対応する値

ハッシュテーブルのキー keyに 値value を設定します。  
すでに同じキーがハッシュテーブルにある場合、そのキーに対する新しい値を設定します。

***

## Hashtable.iterator
ハッシュテーブルに格納されているキーや値をすべて調べるためのオブジェクト(イテレータ)を作成します。

**書式**
```
iterator()
```

**戻り値**

ハッシュテーブルのイテレータ

イテレータに対しては [hasNext](#hashtablehasnext)メソッド, [nextKey](#hashtablenextkey)メソッド, [nextValue](#hashtablenextvalue)メソッドを呼ぶことができます。

**例1**
```
extends SpriteChar;
h=new Hashtable();
h.put("国語",40);
h.put("英語",70);
h.put("数学",50);
y=20;
$panel.drawText(20,y,"科目",$clWhite);
$panel.drawText(100,y,"成績",$clAqua);
y+=30;sum=0;
it=h.iterator(); // hのイテレータを作成
while (it.hasNext()) { // 次の要素がある間は
  k=it.nextKey(); // 次のキー（科目）を取り出す
  score=h.get(k); // キーに対応する値（科目の点数)をとりだす
  sum+=score;
  $panel.drawText(20,y,k,$clWhite); // キー(科目)を表示
  $panel.drawText(100,y,score,$clAqua); // キーに対応する値(点数)を表示
  y+=30;
}
$panel.drawText(20,y,"合計",$clWhite);
$panel.drawText(100,y,sum,$clGreen);
y+=30;
$panel.drawText(20,y,"平均",$clWhite);
$panel.drawText(100,y,trunc(sum/h.size()),$clYellow);
y+=30;
```

***

## Hashtable.remove
ハッシュテーブルからキーとそれに対応する値を削除します。

**書式**
```
remove(key)
```

- **key**  
&emsp;削除するキー

**戻り値**

削除したキー

ハッシュテーブルhからキーkeyとそれに対応する値を削除します。

***

## Hashtable.size
ハッシュテーブルに格納されているキーの数(=値の数) を返します。

**書式**
```
size()
```

**戻り値**

ハッシュテーブルに格納されているキーの数

***

## Hashtable.hasNext
[イテレータ](#hashtableiterator)から[nextKey](#hashtablenextkey)メソッドや[nextValue](#hashtablenextvalue)メソッドを使って取り出せる組が残っているか調べます。

**書式**
```
hasNext()
```

**戻り値**

イテレータから取り出せる項目が残っている場合 1、 残っていない場合 0

***

## Hashtable.nextKey
[イテレータ](#hashtableiterator)から次の組を取り出し、取り出した組のキーを返します。

**書式**
```
nextKey()
```

**戻り値**

イテレータから取り出した組のキー

※このメソッドと[nextValue](#hashtablenextvalue)メソッドは一緒に使わないことを推奨します。

***

## Hashtable.nextValue
[イテレータ](#hashtableiterator)から次の組を取り出し、取り出した組の値を返します。

**書式**
```
nextValue()
```

**戻り値**

イテレータから取り出した組の値

※このメソッドと[nextKey](#hashtablenextkey)メソッドは一緒に使わないことを推奨します。

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

