
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - 算術演算</title>

## 算術演算

足し算、掛け算など算術演算を行います。

#### 書式

```
式1 + 式2
式1 - 式2
式1 * 式2
式1 / 式2
式1 % 式2
```

- \+ : 足し算 (式1 + 式2)
- \- : 引き算 (式1 - 式2)
- \* : 掛け算 (式1 × 式2)
- / : 割り算 (式1 ÷ 式2)
- % : 剰余 (式1 を 式2で割った余り)

### 例1
```
//オブジェクトを作成し、ダブルクリック後つぎのように入力します
extends SpriteChar;
x=100+20;
y=30*2;
wait();
```
▲ 変数 x に 100+20 の 計算結果 120 が入り、同様に yに60 (=30*2) が入ります。

### 例2
```
extends SpriteChar;
x=200;
y=x-50;
wait();
```
▲ 変数 x に 200 が入ります。 また y には x-50 = 200-50 = 150 が入ります。

### 例3
```
extends SpriteChar;
while (1) {
  x=x+1;
  update();
}
```
▲ while文により、x=x+1 が繰り返されます。  
x=x+1 は、変数 x に、(現在の x の値) +1 が入ります。 結果として、x の値が1 増加します。

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)
