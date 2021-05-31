
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - return</title>

## return

メソッドの定義の途中で、メソッドの処理を終了します。

#### 書式
```
return 戻り値;
```
戻り値は、メソッドを呼び出した側に返される値です。(省略可能)

### 例1

```
extends SpriteChar;
function inRect(sx,sy,dx,dy) {
  if (x>=sx && y>=sy && x<=dx && y<=dy) return 1;
  return 0;
}
t=200;
while (1) {
if (getkey(39)>0) x+=3;
   if (getkey(37)>0) x-=3;
   if (getkey(40)>0) y+=3;
   if (getkey(38)>0) y-=3;
   t+=0.1;
   fillRect(t,200,t+100,300,$clRed);
   if ( inRect( t,200,t+100,300)==1 ) die();
   update();
}
```

▲ カーソルキーで移動しますが、赤枠のなかに入ると消滅します。

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

