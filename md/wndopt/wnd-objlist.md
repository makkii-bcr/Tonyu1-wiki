
[各種ウィンドウの使い方/オプション](./wnd-use-opt)&emsp;[Wikiトップ](./)

<title>各種ウィンドウの使い方/オプション - オブジェクト一覧</title>

### 各種ウィンドウの使い方/オプション
## オブジェクト一覧


ツールの「オブジェクト一覧」ボタン または、オブジェクトインスペクタの「一覧」を押します。


![form-ord-appear.png](./img/form-ord-appear.png)

設計中は次のように、配置したオブジェクトの一覧を表示します。

![form-ord.png](./img/form-ord.png)

実行中は現在出現しているオブジェクト（実行中に作成したオブジェクトも含める） を表示します。オブジェクトの数が多くなると、次のような警告を表示します。

![form-ord-warn.png](./img/form-ord-warn.png)

この場合、画面外に出たオブジェクトを消滅する処理を忘れている可能性がありますので 例えば次のような文を挟んでおくことをおすすめします。

screenOutについては命令リファレンスの[screenOut](./rf-plainchar#plaincharscreenout)を参照してください。

```
 if (screenOut()) die();
```




***

[各種ウィンドウの使い方/オプション](./wnd-use-opt)&emsp;[Wikiトップ](./)

