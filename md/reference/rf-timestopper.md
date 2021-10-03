
[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

<title>命令リファレンス - TimeStopper</title>

## TimeStopperクラス
時間の停止を行います

使い方は、[timeStop](./rf-object#objecttimestop)メソッドを参照してください。

### メソッド一覧
|||
|-|-|
|[releaseAll](#timestopperreleaseall)|すべてのオブジェクトの時間停止を解除します。|
|[release](#timestopperrelease)|特定のオブジェクトの時間停止を解除します。|

***

## TimeStopper.releaseAll
すべてのオブジェクトの時間停止を解除します。

**書式**
```
releaseAll(nonKill)
```
- **nonKill**  
&emsp;nonKill=0またはnonKillを省略した場合、時間が止まっている間に、  
&emsp;[appear](./rf-object#objectappear)メソッドを用いて出現させたオブジェクトは すべて消滅する。  
&emsp;nonKill=1なら消滅しない。

**例1**

例は[timeStop](./rf-object#objecttimestop)メソッドにあります。

***

## TimeStopper.release
特定のオブジェクトの時間停止を解除します。

**書式**
```
release(o)
```
- **o**  
&emsp;時間停止を解除するオブジェクト

**戻り値**

なし

**例1**

例は[timeStop](./rf-object#objecttimestop)メソッドにあります。

***

[命令リファレンス](./reference)&emsp;[Wikiトップ](./)

