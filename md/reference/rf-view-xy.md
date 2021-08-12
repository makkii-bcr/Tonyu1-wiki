
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - $viewX, $viewY</title>

## $viewX, $viewY

[$map.scrollTo](./rf-map#mapscrollto)でスクロールした位置を得ます。

### 例1

ここに書いてあるプログラムは、  
実行する前に画面にマップを描くことをおすすめします  
([チュートリアル](./tutorial)参照)  
```
extends SpriteChar;
while(1) {
  $map.scrollTo(t,t);
  t+=1;
  x=$viewX+$mouseX;
  y=$viewY+$mouseY;
  update();
}
```

▲ この例を実行すると、画面が斜めにスクロールしますが、スクロール位置には関係なくマウスの位置にオブジェクトが現れます。

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

