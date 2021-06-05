
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - $_fps, $_rps</title>

## $_fps, $_rps

- **$_fps**  
FPS（Frame per Second）  
１秒あたりの描画回数を実数で格納されています  

- **$_rps**  
RPS（Run per Second）  
１秒あたりの実行回数を実数で格納されています

パフォーマンスウィンドウに表示されている、FPSとRPSの値が実数で格納されます。  
約１秒ごとに更新されます。

### 例1

```
extends SpriteChar;
while (1) {
  drawText(10, 10, "FPS: "+trunc($_fps)+"."+($_fps*10%10), $clWhite);
  drawText(10, 30, "RPS: "+trunc($_rps)+"."+($_rps*10%10), $clWhite);
  update();
}
```

$_fpsと$_rpsは実数で返されるので、例えばパフォーマンスウィンドウに「FPS=59.9」と表示されている場合は、  
59.999641418457 のように返されます。

例1では、$_fpsと$_rpsの小数点第２位以下を切り捨てて表示しています。

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

