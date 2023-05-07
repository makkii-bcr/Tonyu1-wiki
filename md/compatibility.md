
[ダウンロード](./download)&emsp;[Wikiトップ](./)

## 互換性の設定

この設定は、ver1.30以降で使えます。

主にver1.29～1.30でいくつか仕様変更をしたため、以前のバージョンと動作が違うことがあります。  
ただし、動作が変わっては困るものは自動的に互換性を保つため、**基本的にはここの設定をする必要ありません。**

もし、動作に違和感を感じたり、以前の動作を再現したい場合は、下記の設定をお使いください。  

下記２種類の項目があります

- [自動的に互換性を維持する項目](#自動的に互換性を維持する項目)
- [手動で互換性の設定をする項目](#手動で互換性の設定をする項目)

### 自動的に互換性を維持する項目

ここの項目は、主に最新バージョンで仕様変更があった項目で、  
旧バージョンで作られたプロジェクトでは、自動的に旧バージョンの仕様で動作する項目です。

default.tonyuprjファイルの```targetVersion```（無い場合は```savedVersion```）の値で、  
どのTonyuのバージョンで作られたのか判断し、自動的に互換性の設定をします。  
手動で設定変更したい場合は、以降の説明の方法で設定するか、```targetVersion```（無い場合は```targetVersion```を追記）の値を変更します。

※ ```targetVersion```と```savedVersion```の値は、バージョン値の1000倍です。  
&emsp; 例）Tonyu**1_29**_2021_1212 → ver**1.29** → **1290**

**項目**
- [wav,mzoの音量](#wavmzoの音量)
- [スプライト描画の回転(angle)の精度](#スプライト描画の回転angleの精度)
- [sin,cosの精度](#sincosの精度)
- [ver1.22以前のゲームをver1.23以降で実行すると、wavがループしてしまう](#ver122以前のゲームをver123以降で実行すると、wavがループしてしまう)

#### wav,mzoの音量  
**各バージョンの仕様**  
- ver1.19以前、wavとmzoの音量は100%でした。 
- ver1.21～1.29は、wavとmzoの音量は50%でした。
- ver1.30以降、wavとmzoの音量は100%になりました。 

**互換性維持の機能**  
- ver1.21～1.29のプロジェクトは、自動的にwavとmzoの音量が50%に設定されます。
- 手動で音量を変更したい場合は、下記設定をしてください。

**【ソースコードを編集しない方法】**  
該当プロジェクトのdefault.tonyuprjファイルを編集します。  
```<resourcelist name="params">```で囲われた中に  
```<param name="init_base_volume" value="0.5"/>```を追記してください。  
```value```の値は、[$mplayer.setBaseVolume](./rf-mplayer#mplayersetbasevolume)を参照  

**【ソースコードから設定する方法】**  
ゲーム起動時などのタイミングで、[$mplayer.setBaseVolume](./rf-mplayer#mplayersetbasevolume)を実行するようにプログラムしてください。

#### スプライト描画の回転(angle)の精度

**各バージョンの仕様**  
- ver1.29以前は、１回転で256段階の精度でした（約1.4°ごとに角度が変わる）
- ver1.30以降、１回転で36000段階の精度に向上しました（0.01°ごとに角度が変わる） 

**互換性維持の機能**  
- ver1.29以前のプロジェクトは、自動的に１回転で256段階の精度に設定されます。
- 手動で精度を変更したい場合は、下記設定をしてください。

**【ソースコードを編集しない方法】**  
該当プロジェクトのdefault.tonyuprjファイルを編集します。  
```<resourcelist name="params">```で囲われた中に  
```<param name="init_sprite_angle_accuracy" value="0"/>```を追記してください。  
```value```の値は、[$System.setSpriteAngleAccuracy](./rf-system#systemsetspriteangleaccuracy)を参照  

**【ソースコードから設定する方法】**  
ゲーム起動時などのタイミングで、[$System.setSpriteAngleAccuracy](./rf-system#systemsetspriteangleaccuracy)を実行するようにプログラムしてください。


#### sin,cosの精度

**各バージョンの仕様**  
- ver1.29以前は、0～360°で360段階の精度でした（1°単位の精度）
- ver1.30以降、0～360°で36000段階の精度に向上しました（0.01°単位の精度） 

**互換性維持の機能**  
- ver1.29以前のプロジェクトは、自動的に0～360°で360段階の精度に設定されます。
- 手動で精度を変更したい場合は、下記設定をしてください。

**【ソースコードを編集しない方法】**  
該当プロジェクトのdefault.tonyuprjファイルを編集します。  
```<resourcelist name="params">```で囲われた中に  
```<param name="init_sin_cos_accuracy" value="0"/>```を追記してください。  
```value```の値は、[$Math.setSinCosAccuracy](./rf-math#mathsetsincosaccuracy)を参照  

**【ソースコードから設定する方法】**  
ゲーム起動時などのタイミングで、[$Math.setSinCosAccuracy](./rf-math#mathsetsincosaccuracy)を実行するようにプログラムしてください。

#### ver1.22以前のゲームをver1.23以降で実行すると、wavがループしてしまう
- wavのループはver1.23から対応しました
- ver1.22以前でwavをループ再生指定してもループしませんが、  
そのままver1.23以降で実行するとwavがループ再生してしまいます（一部そのようなゲームがありました）

**互換性維持の機能**  
- ver1.22以前のプロジェクトは、自動的にwavループ無効に設定されます。
- 手動で設定を変更したい場合は、下記設定をしてください。

**【ソースコードを編集しない方法】**  
該当プロジェクトのdefault.tonyuprjファイルを編集します。  
```<resourcelist name="params">```で囲われた中に  
```<param name="init_se_loop_enable" value="0"/>```を追記してください。  
```value```の値は、[$mplayer.setSeLoopEnable](./rf-mplayer#mplayersetseloopenable)を参照  

**【ソースコードから設定する方法】**  
ゲーム起動時などのタイミングで、[$mplayer.setSeLoopEnable](./rf-mplayer#mplayersetseloopenable)を実行するようにプログラムしてください。

### 手動で互換性の設定をする項目

ここの項目は、主に旧バージョンの不具合などの項目です  
最新バージョンでは改善されている項目です  
以前の動作を再現したい特殊な場合のみ、下記の設定をしてください

**項目**
- [FPSが約61～63になる現象](#fpsが約61～63になる現象)
- [11025Hz, 22050Hz, 44100Hz以外のwavで再生速度が速くなる（かつ音が高くなる）現象](#11025hz-22050hz-44100hz以外のwavで再生速度が速くなる（かつ音が高くなる）現象)
- [効果音を多数大音量で鳴らすと音割れする現象](#効果音を多数大音量で鳴らすと音割れする現象)
- [オブジェクトを大量生成した際、点滅したり動作が遅くなる現象](#オブジェクトを大量生成した際、点滅したり動作が遅くなる現象)


#### FPSが約61～63になる現象
- ver1.28以前は、FPSにずれがありました。
  - 例えば、フレームレートを60に設定しても、FPSが約62.5になっていました。
- ver1.29からはFPSが正確になりました。
- ver1.28以前のFPSを再現したい場合は、下記の設定をしてください。  

**【ソースコードを編集しない方法】**  
該当プロジェクトのdefault.tonyuprjファイルを編集します。  
```<resourcelist name="params">```で囲われた中に  
```<param name="init_legacy_frame_rate" value="1"/>```を追記してください。  

**【ソースコードから設定する方法】**  
ゲーム起動時などのタイミングで、[$System.setLegacyFrameRate(1);](./rf-system#systemsetlegacyframerate)を実行するようにプログラムしてください。

#### 11025Hz, 22050Hz, 44100Hz以外のwavで再生速度が速くなる（かつ音が高くなる）現象
- ver1.29以前は、サンプリングレートが11025Hz, 22050Hz, 44100Hz以外のwavは再生速度が速くなるバグがありました。  
  （11025Hz, 22050Hz, 44100Hzは本来の再生速度で再生されています）  
- ver1.30より、本来の再生速度で再生するようにバグ修正しました。
- ver1.29以前のなり方に戻したい場合は、下記の設定をしてください。
- ただし、ver1.29以前のサウンドの不具合や音質劣化、レイテンシが大きくなる等も発生してしまいます。  
（[$mplayer.setSoundPlayMode](./rf-mplayer#mplayersetsoundplaymode)のmode=1を参照）  

**【ソースコードを編集しない方法】**  
該当プロジェクトのdefault.tonyuprjファイルを編集します。  
```<resourcelist name="params">```で囲われた中に  
```<param name="init_sound_play_mode" value="1"/>```を追記してください。  

**【ソースコードから設定する方法】**  
ゲーム起動時などのタイミングで、[$mplayer.setSoundPlayMode(1);](./rf-mplayer#mplayersetsoundplaymode)を実行するようにプログラムしてください。


#### 効果音を多数大音量で鳴らすと音割れする現象
- ver1.30より、音割れを防ぐ機能を追加したため、音割れしにくくなります。
- 大音量の際は音量が自動的に小さくなります。
- 機能を無効にするには、下記の設定をしてください。

**【ソースコードを編集しない方法】**  
該当プロジェクトのdefault.tonyuprjファイルを編集します。  
```<resourcelist name="params">```で囲われた中に  
```<param name="init_volume_limiter" value="0"/>```を追記してください。  

**【ソースコードから設定する方法】**  
ゲーム起動時などのタイミングで、[$mplayer.setVolumeLimiter(0);](./rf-mplayer#mplayersetvolumelimiter)を実行するようにプログラムしてください。


#### オブジェクトを大量生成した際、点滅したり動作が遅くなる現象
- ver1.30より、点滅防止機能を追加したため、本現象は発生しにくくなります。
- 機能を無効にするには、下記の設定をしてください。

**【ソースコードを編集しない方法】**  
該当プロジェクトのdefault.tonyuprjファイルを編集します。  
```<resourcelist name="params">```で囲われた中に  
```<param name="init_process_single" value="1"/>```を追記してください。  

**【ソースコードから設定する方法】**  
ゲーム起動時などのタイミングで、[$System.setProcessSingle(1);](./rf-system#systemsetprocesssingle)を実行するようにプログラムしてください。

***

[ダウンロード](./download)&emsp;[Wikiトップ](./)

