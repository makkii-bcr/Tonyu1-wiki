
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
  drawText(10, 10, "FPS: "+trunc($_fps+0.5)+"."+(($_fps+0.5)*10%10), $clWhite);
  drawText(10, 30, "RPS: "+trunc($_rps+0.5)+"."+(($_rps+0.5)*10%10), $clWhite);
  update();
}
```

$_fpsと$_rpsは実数で返されるので、例えばパフォーマンスウィンドウに「FPS=60.0」と表示されている場合は、  
59.999641418457 のように返されます。

例1では、パフォーマンスウィンドウの、FPS・RPSと同じ値を表示しています。  
パフォーマンスウィンドウのFPSとRPSの値は、小数点第２位以下を四捨五入して表示しています。

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

