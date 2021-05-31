
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - $windowX, $windowY</title>

## $windowX, $windowY

ウィンドウの位置を得たり、ウィンドウの移動を行います。

デスクトップ画面の左上が、メインウィンドウの左上に一致している場合、$windowX=0, $windowY=0 です。

### 例1
```
extends SpriteChar;

for (i=0; i<100; i++){
  $windowX=i;
  update();
}
```

▲ ウィンドウが右に移動します

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

