
[ダウンロード](./download)&emsp;[Wikiトップ](./)

## 仕様変更に対する、互換性を保つ設定

ver1.30よりいくつか仕様変更をしたため、以前のバージョンと動作が違うことがあります。  
動作に違和感を感じたり、以前の動作を再現したい場合に、下記の設定をお使いください。  

### ver1.21～1.29 → 1.30 の仕様変更

#### wav,mzoの音量が大きくなる
- ver1.30より、wavとmzoの音量を50%→100%に変更したためです。  
- ver1.21～1.29と同じ音量にしたい場合は、下記の設定をしてください。

**【ソースコードを編集しない方法】**  
該当プロジェクトのdefault.tonyuprjファイルを編集します。  
```<resourcelist name="params">```で囲われた中に  
```<param name="init_base_volume" value="0.5"/>```を追記してください。  

**【ソースコードから設定する方法】**  
実行開始時に一度だけ、[$mplayer.setBaseVolume(0.5);](./rf-mplayer#mplayersetbasevolume)を実行するようにプログラムしてください。

### ver1.29以前の動作を再現する設定

#### **FPSが約61～63になる現象**
- ver1.28以前は、FPSにずれがありました。
  - 例えば、フレームレートを60に設定しても、FPSが約62.5になっていました。
- ver1.29からはFPSが正確になりました。
- ver1.28以前のFPSを再現したい場合は、下記の設定をしてください。  

**【ソースコードを編集しない方法】**  
該当プロジェクトのdefault.tonyuprjファイルを編集します。  
```<resourcelist name="params">```で囲われた中に  
```<param name="init_regacy_frame_rate" value="1"/>```を追記してください。  

**【ソースコードから設定する方法】**  
実行開始時に一度だけ、[$System.setRegacyFrameRate(1);](./rf-system#systemsetregacyframerate)を実行するようにプログラムしてください。

#### **11025Hz, 22050Hz, 44100Hz以外のwavで再生速度が速くなる（かつ音が高くなる）現象**
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
実行開始時に一度だけ、[$mplayer.setSoundPlayMode(1);](./rf-mplayer#mplayersetsoundplaymode)を実行するようにプログラムしてください。


#### **効果音を多数大音量で鳴らすと音割れする現象**
- ver1.30より、音割れを防ぐ機能を追加したため、音割れしにくくなります。
- 大音量の際は音量が自動的に小さくなります。
- 機能を無効にするには、下記の設定をしてください。

**【ソースコードを編集しない方法】**  
該当プロジェクトのdefault.tonyuprjファイルを編集します。  
```<resourcelist name="params">```で囲われた中に  
```<param name="init_volume_limiter" value="0"/>```を追記してください。  

**【ソースコードから設定する方法】**  
実行開始時に一度だけ、[$mplayer.setVolumeLimiter(0);](./rf-mplayer#mplayersetvolumelimiter)を実行するようにプログラムしてください。


#### **オブジェクトを大量生成しても、点滅や動作が遅くなる現象**
- ver1.30より、点滅防止機能を追加したため、本現象は発生しにくくなります。
- 機能を無効にするには、下記の設定をしてください。

**【ソースコードを編集しない方法】**  
該当プロジェクトのdefault.tonyuprjファイルを編集します。  
```<resourcelist name="params">```で囲われた中に  
```<param name="init_process_single" value="1"/>```を追記してください。  

**【ソースコードから設定する方法】**  
実行開始時に一度だけ、[$System.setProcessSingle(1);](./rf-system#systemsetprocesssingle)を実行するようにプログラムしてください。

***

[ダウンロード](./download)&emsp;[Wikiトップ](./)

