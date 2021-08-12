
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - for..in</title>

## for..in

[配列](./rf-array)のすべての要素に対して処理を行います。

特に、[for (xx in $chars)](./rf-for-chars)は、画面上のオブジェクトをすべて調べるのに用います。

#### 書式
```
for (b in a) 手続き
```
- aで示される配列オブジェクトが持っている要素のうち、最初の要素を変数bに代入し 手続きを実行します。  
- その後、aの2番目の要素を変数bに代入し、同様に手続きを実行します。  
- 3番目、4番目についても同様に処理を行い、最後の要素まで処理を行ったら文全体が終了します。  

<span style="color: #f00">※ 処理中にaに対して[Array.add](./rf-array#arrayadd)や[Array.delete](./rf-array#arraydelete)などの処理を行うと処理が正しく実行されません</span>

### 例1

[Array](./rf-array)クラスを参照してください


***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

