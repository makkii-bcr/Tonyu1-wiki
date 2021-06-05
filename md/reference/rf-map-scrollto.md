
[$map](./rf-map)&emsp;[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - $map.scrollTo</title>

## $map.scrollTo

画面をスクロールします

#### 書式
```
scrollTo(sx,sy)
```
- **sx**  
&emsp;スクロール方向のx座標
- **sy**  
&emsp;スクロール方向のy座標

画面全体を、最初の位置から右方向にsxドット,下方向にsyドットだけずらして表示します。

左や上にずらすには、sx,syを負の値にします。


### 例1

ここに書いてあるプログラムは、実行する前に画面に
マップを描くことをおすすめします(マップを描く参照)

```
extends SpriteChar;
while(1) {
  $map.scrollTo(t,t);t+=1;
  update();
}
```

▲ 画面全体を右下にスクロールさせます

### 参考

[スクロールのサンプル](./html/jump/jump_html/html/HID00000001.htm)

***

[$map](./rf-map)&emsp;[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

