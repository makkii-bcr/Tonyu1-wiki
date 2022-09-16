
[ダウンロード](./download)&emsp;[Wikiトップ](./)

## Tonyu1 プレリリースバージョン

開発中のバージョンを一旦公開しています。

[Tonyu1_301_2022_0916.zip](./dl/Tonyu1_301_2022_0916.zip)

- 細かい修正
  - wavの再生処理を軽量化
    - stopSE無効＆volumeLimiter無効の場合に、処理軽量化するよう実装
    - モノラルwavしかないときはモノラル再生にして軽量化
  - mzoでpcm(wav)音源が上手くならないのを修正（Tonyu1.30で発生）
  - 速いCPUでloopMode==0&&sleepTime==0の時、mzoの音が伸びたような音になるので修正
  - loopMode==0&&sleepTime==0の時、非アクティブになってもスリープがかからないので修正
  - loopMode==2を追加
    - loopMode==0(Busy Loop)とほぼ同じだが、FPSが維持できているときはsleepTime=1、FPSが維持できなくなるとsleepTime=0にする
  - エディタのインデント挙動修正・インデント高速化

***

[ダウンロード](./download)&emsp;[Wikiトップ](./)

