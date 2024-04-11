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
