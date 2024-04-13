# インストール

```
npm i keitamax-flowing-js
```

# CDN

```
https://cdn.jsdelivr.net/npm/keitamax-flowing-js@0.0.3/index.cd.js
```

# どういったものか

これは指定した要素内に、ニコニコ動画のコメントのように文字を流すことができるようなパッケージです。

https://github.com/NiheiKeita/Flowing.js/assets/86122925/f633eed3-2b84-4232-a297-d05534217ab3

# 使用方法

インストールか CDN で読み込んでください。

```
  var ele = document.getElementsByClassName("example")[0];
  const following = new Following(ele);
  let comment = "こんにちは";
  following.start(comment);
```

このように`new Following(ele)` 文字を流したい要素をコンストラクタの引数に入れてください。

その後、`following.start(comment)`のように流したい文字を'start'の引数に入れてください。

## 文字のスピード設定

```
following.setSpeed(3)
```

のように設定します。

数字が大きいほうが遅くなります。

デフォルトでは 10 に設定されています。

## ランダムな位置に配置するかどうか

```
following.setIsRandom(true)
```

親要素の高さのランダムな位置に配置するかどうかを決めます。

true がランダム、false がランダムではなくなります。

デフォルトでランダムに設定されています。

## 上からどのくらいに設置するか

```
following.setTopPx(20)
```

ランダムな配置が false に設定されているときに、親要素の表示する上からの px を設定します。

親要素よりも大きな値を設定すると、一番下に表示されます。

デフォルトでは 0 になります。

## 上からどのくらいに設置するか

```
following.setFontSize(20)
```

表示するコメントの大きさを設定します。px 指定になっています。

デフォルトでは 20 担っています。
