
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - 注釈</title>

## 注釈

**注釈**は、プログラムの実行に影響を与えない文字列です。

- // から行の最後までが注釈になります  
- /*　から　 */ まで（行をまたいでも）も注釈になります　

### 例1

<pre>
extends SpriteChar;
<span style="color: #080">/* サンプル
　　プログラム */</span>
while(1) {
  x=x+1; <span style="color: #080">// 横移動</span>
  update(); <span style="color: #080">// 1フレームすすめる</span>
}
</pre>

▲ <span style="color: #080">緑色</span>の部分が注釈です

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

