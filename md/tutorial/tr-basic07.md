

[←前](./tr-basic06.md)&emsp;[次→](./tr-basic08.md)&emsp;[チュートリアル](./tutorial.md)&emsp;[Wikiトップ](./)

### チュートリアル - 基礎編 (7/9)
## オブジェクトいろいろ

オブジェクト作成時に、オブジェクトの種類を指定すると、いろいろなオブジェクトを作ることができます

### DXスプライト
半透明、回転拡大縮小ができるオブジェクトです

メニューの「オブジェクト」→「新規」を選び、次の操作をしてみましょう

1. クラス名を入力

1. 「DXスプライト」をクリック

1. 「OK」をクリック

![create-dx.png](./img/create-dx.png)

オブジェクトが表示されました

オブジェクトインスペクタで、次の値を変更してみましょう

- **angle**  
オブジェクトの回転角度を指定します。単位は度です
- **alpha**  
オブジェクトの透明度を指定します。値は0から255の範囲で、値が小さいほど透けて見えます
- **scaleX**  
オブジェクトの大きさを指定します。もとの大きさは1です
例：

![ex-dx.png](./img/ex-dx.png)

### テキスト
文字を表示するオブジェクトです

メニューの「オブジェクト」→「新規」を選び、次の操作をしてみましょう

1. クラス名を入力

1. 「テキスト」をクリック

1. 「OK」をクリック

![create-text.png](./img/create-text.png)

オブジェクトが表示されました

オブジェクトインスペクタで、次の値を変更してみましょう

- **text**  
表示する文字列を指定します。

注意：textはかならず文字列を"(ダブルクォート)で囲んでください。

![goodbad.png](./img/goodbad.png)

- **size**  
テキストの大きさを指定します。

- **col**  
テキストの色を指定します。色は次のいずれかを選びます  
<table><tr>
<td><span style="color: #000">■</span></td><td>$clBlack</td>
<td><span style="color: #f00">■</span></td><td>$clRed</td>
<td><span style="color: #0f0">■</span></td><td>$clGreen</td>
<td><span style="color: #00f">■</span></td><td>$clBlue</td>
</tr><tr>
<td><span style="color: #fff">■</span></td><td>$clWhite</td>
<td><span style="color: #ff0">■</span></td><td>$clYellow</td>
<td><span style="color: #0ff">■</span></td><td>$clAqua</td>
<td><span style="color: #f0f">■</span></td><td>$clPink</td>
</tr></table>

例：

![ex-text.png](./img/ex-text.png)

***

[←前](./tr-basic06.md)&emsp;[次→](./tr-basic08.md)&emsp;[チュートリアル](./tutorial.md)&emsp;[Wikiトップ](./)
