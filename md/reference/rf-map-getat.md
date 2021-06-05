
[$map](./rf-map)&emsp;[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - $map.getAt</title>

## $map.getAt

画面上の座標からマップパターンを取得します

#### 書式
```
getAt(sx,sy)
```

- **sx**  
&emsp;画面の座標上のx座標
- **sy**  
&emsp;画面の座標上のy座標

#### 戻り値
画面の座標sx,syにおけるキャラクタパターン番号を返します。  

「画面の座標」とは、図1のように1ドットを単位とした座標です。


### 例1

```
pa=$map.getAt(72,56);
```

▲ 図1の緑枠の部分のキャラクタパターンを返します


図1 :  
![map_getAt](./img/map-get-at.png)


***

[$map](./rf-map)&emsp;[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

