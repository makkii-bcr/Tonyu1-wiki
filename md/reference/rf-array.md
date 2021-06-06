
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - Array</title>

## Arrayクラス
Array(配列)クラスのオブジェクトには、複数の値（要素）を格納することができます。

### 例1

予めコンソールウィンドウを表示しておいてください

```
extends SpriteChar;
a=new Array(); // 配列の作成
a.add("orange");
a.add("apple");
print ("要素数="+a.size());
print ("1番目の要素は"+a.get(0));
print ("2番目の要素は"+a.get(1));
 
a.insert(1,"banana");
a.set(0,"grape");
print ("要素数="+a.size());
print ("1番目の要素は"+a.get(0));
print ("2番目の要素は"+a.get(1));
print ("3番目の要素は"+a.get(2));
 
a.delete(2);
print ("全要素のリスト");
for (b in a) {
 print(b);
}
a.save("result.txt"); 
//files\result.txt に
//配列の内容が保存されます。
```

### 特殊構文

for..in

### コンストラクタ

new Array

### メソッド一覧

|||
|-|-|
|[add](#arrayadd)|配列に要素を追加します|
|[insert](#arrayinsert)|配列の途中に要素を挿入します|
|[get](#arrayget)|配列の要素を取り出します|
|[set](#arrayset)|配列の要素に値を代入します|
|[size](#arraysize)|配列の要素数を返します|
|[delete](#arraydelete)|配列から要素を削除します|
|[indexOf](#arrayindexof)|配列における要素のインデックスを返します。|
|[lightIndexOf](#arraylightindexof)|indexOfメソッドの高速化版（数値専用）|
|[remove](#arrayremove)|配列の要素を削除します|
|[clear](#arrayclear)|配列の内容をすべて消去します。|
|[load](#arrayload)|テキストファイルから配列の内容を読み込みます。|
|[save](#arraysave)|配列の内容をテキストファイルに保存します。|

***

## Array.add
配列に要素を追加します

**書式**
```
add(e)
```
- **e**  
&emsp;追加する要素

***

## Array.insert
配列の途中に要素を挿入します

**書式**
```
insert(index,element) 
```

- **index**  
&emsp;挿入する場所。(先頭:0 末尾:size()-1)
- **element**  
&emsp;追加する要素。

***

## Array.get
配列の要素を取り出します

**書式**
```
get(i)
```

- **i**  
&emsp;取り出す要素のインデックス(先頭:0 末尾:size()-1)

**戻り値**

i番目の要素

***

## Array.set
配列の要素に値を代入します

**書式**
```
set(i,e)
```

- **i**  
&emsp;代入される要素のインデックス(先頭:0 末尾:size()-1)
- **e**  
&emsp;代入する要素

***

## Array.size
配列の要素数を返します

**書式**
```
size()
```

**戻り値**

配列の要素数

***

## Array.delete
配列から要素を削除します

**書式**
```
delete(i)
```
- **i**  
&emsp;削除する要素のインデックス(先頭:0 末尾:size()-1)

**戻り値**

削除した要素

※インデックスがわからない場合は[remove](#arrayremove)メソッドが便利です

***

## Array.indexOf
配列における要素のインデックスを返します。

**書式**
```
indexOf(e)
```
- **e**  
&emsp;インデックスを調べる要素

**戻り値**

この配列における 要素eのインデックス。インデックスが複数の場合は最小のもの。要素eが配列にない場合-1

***

## Array.lightIndexOf
indexOfメソッドを高速化したものですが、要素が文字列の場合は使えません。

**書式**
```
lightIndexOf(e)
```

- **e**  
&emsp;インデックスを調べる要素(文字列は使えません)

**戻り値**

この配列における、要素eのインデックス。インデックスが複数の場合は最小のもの。 要素eが配列にない場合は-1

***

## Array.remove
配列の要素を削除します

**書式**
```
remove(e)
```
- **e**  
&emsp;削除する要素

deleteメソッドと異なり、削除したい要素を引数に指定します

***

## Array.clear
配列の内容をすべて消去します。

**書式**
```
clear()
```

***

## Array.load
テキストファイルから配列の内容を読み込みます。

**書式**
```
load(fn)
```
- **fn**  
&emsp;ファイル名

読み込めるファイルについては、ファイルの扱いについてを参照してください。

loadメソッドは、配列の内容をクリアしたあと、テキストファイルの１行につき１つの要素を追加します。各要素の内容は行の内容を表す文字列です。

***

## Array.save
配列の内容をテキストファイルに保存します。

**書式**
```
save(fn)
```
- **fn**  
&emsp;ファイル名

ファイルの保存先については、ファイルの扱いについてを参照してください。

saveメソッドは、配列の要素を先頭から順に、１行ずつ出力したものをファイルに保存します。要素が文字列の場合、その内容をそのまま出力し、 文字列でない場合、要素の文字列表現を出力します。

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

