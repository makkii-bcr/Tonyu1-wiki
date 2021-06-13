
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - Joystick</title>

## Joystickクラス
ジョイスティックの入力を調べます

**$Joystick**、<b>$Joystick2</b>というオブジェクトが、システムによって自動的に用意されています。

通常は$Joystickを用いますが、2個目のジョイスティックを調べたい場合は$Joystick2を用います。

### 例1
```
extends SpriteChar;
while (1) {
  if ($Joystick.up()>0) y=y-2;
  if ($Joystick.down()>0) y=y+2;
  if ($Joystick.left()>0) x=x-2;
  if ($Joystick.right()>0) x=x+2;
  if ($Joystick.button(0)>0) {
    drawText(x,y,"press",$clWhite);
  }
  update();
}
```

### メソッド一覧
|||
|-|-|
|[left](#joystickleft)|ジョイスティックの左方向が押されているかを調べます。|
|[right](#joystickright)|ジョイスティックの右方向が押されているかを調べます。|
|[up](#joystickup)|ジョイスティックの上方向が押されているかを調べます。|
|[down](#joystickdown)|ジョイスティックの下方向が押されているかを調べます。|
|[button](#joystickbutton)|ジョイスティックのボタンが押されているかを調べます。|

***

## Joystick.left
ジョイスティックの左方向が押されているかを調べます。

**書式**
```
left()
```

**戻り値**

0=押されていない  
1=押されたばかり  
2以上=押しっぱなし  

***

## Joystick.right
ジョイスティックの右方向が押されているかを調べます。

**書式**
```
right()
```

**戻り値**

0=押されていない  
1=押されたばかり  
2以上=押しっぱなし

***

## Joystick.up
ジョイスティックの上方向が押されているかを調べます。

**書式**
```
up()
```

**戻り値**

0=押されていない  
1=押されたばかり  
2以上=押しっぱなし  

***

## Joystick.down
ジョイスティックの下方向が押されているかを調べます。

**書式**
```
down()
```

**戻り値**

0=押されていない  
1=押されたばかり  
2以上=押しっぱなし  

***

## Joystick.button
ジョイスティックのボタンが押されているかを調べます。

**書式**
```
button(n)
```
- **n**  
&emsp;ボタンの番号

**戻り値**

0=押されていない  
1=押されたばかり  
2以上=押しっぱなし  

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

