
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - $Options</title>

## $Optionsオブジェクト

各種設定を行います


### メソッド一覧
|||
|-|-|
|[get](#optionsget)|[$Options.set](#optionsset)メソッドで設定したプロジェクトの設定を得ます。|
|[set](#optionsset)|プロジェクトの各種設定を行います。|

***

## $Options.get  
[$Options.set](#optionsset)メソッドで設定したプロジェクトの設定を得ます。

**書式**
```
get(name)
```
- **name**  
&emsp;設定項目の名前（[$Options.set](#optionsset)メソッド参照)

**戻り値**

設定されている値

***

## $Options.set
プロジェクトの各種設定を行います。

**書式**
```
set(name,value)
```

- **name**  
&emsp;設定項目の名前
- **value**  
&emsp;設定する値

設定項目の名前(name)として指定できるのは、今のところ次いずれかです。

- **deactivation_pause**  
&emsp;値(value)が1ならば、Tonyuがアクティブでないときに実行を自動的に一時停止します。  
&emsp;0なら一時停止しません。(デフォルトの動作)
- **deactivation_disableKey**  
&emsp;値(value)が1ならば、Tonyuがアクティブでないときに[getkey](./rf-object#objectgetkey)メソッドを無効にします。(デフォルトの動作)  
&emsp;0なら無効にしません。
- **sound_stopOnPageLoad**  
&emsp;値(value)が1ならば、[$projectManager.loadPage](./rf-projectmanager#projectmanagerloadpage)メソッドでページを切り替えたときにBGMを停止します。(デフォルトの動作)  
&emsp;0ならページをまたがってそのまま演奏されます。
- **sleep_time**  
&emsp;フレームごとにCPUをスリープする時間（単位：ミリ秒）を設定します。  
&emsp;「パフォーマンス」ウィンドウの「CPU負荷」をプログラムから動的に設定するためのオプションです。  
&emsp;※ ver1.29からはsleep_timeを設定しなくても（デフォルト値の0でも）、CPU負荷がかかりません
- **disable_pause**  
&emsp;F3キーや「実行」→「一時停止」で一時停止する機能を、無効にするかを設定します。  
&emsp;値(value)が1ならば、一時停止を無効にします。0なら一時停止を有効にします。  
&emsp;それ以外の値ならば、開発環境では一時停止を有効、ランタイムでは無効にします。(デフォルトの動作)

**例1**
```
extends SpriteChar;
$Options.set("deactivation_pause",1); 
// ↑Tonyu以外のアプリケーションをアクティブにすると
// 一時停止する
while (1) {
  x++;
  update();
}
```

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

