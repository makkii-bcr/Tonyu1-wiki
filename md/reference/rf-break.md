
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - break</title>

## break

[while](./rf-while)文、[for](./rf-for)文のループを抜け出します。

また、[switch](./rf-switch)文の{}内を抜け出します。

### 例1
```
extends SpriteChar;
while (x<300) {
  x=x+1;
  if (getkey(32)) break;
  update();
}
```

▲ xが300になるまで右に移動しますが、途中でスペースキーをおすとただちにループを抜け出し、オブジェクトが消滅します。

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

