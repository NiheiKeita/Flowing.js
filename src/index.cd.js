
class Following {
  constructor(ele) {
    ele.style.overflow = "hidden";
    this.element = ele;
    this.speed = 10;
    this.isRandom = true;
    this.topPx = 0;
    this.fontSize = 20;
  }
  getFinishPx(ele) {
    return ele.clientWidth + ele.offsetLeft;
  }
  setSpeed(speed) {
    this.speed = speed;
  }
  setIsRandom(isRandom) {
    this.isRandom = isRandom;
  }
  setTopPx(topPx) {
    this.topPx = topPx;
  }
  setFontSize(fontSize) {
    this.fontSize = fontSize;
  }

  start(comment) {
    const ele = this.element;
    const divText = document.createElement("div");
    divText.style.position = "relative";
    divText.style.whiteSpace = "nowrap";

    divText.appendChild(document.createTextNode(comment));
    divText.style.fontSize = this.fontSize + "px";
    divText.style.width = "fit-content";
    ele.appendChild(divText);
    //要素追加してから横幅と縦幅を取得する
    var divTextWidth = -1 * divText.scrollWidth;
    divText.style.left = divTextWidth + 1 + "px";

    //TOPPXを設定 画面外に行かないよう＋ランダム
    var topPx = this.topPx;
    if (this.isRandom) {
      topPx = Math.round(Math.random() * ele.clientHeight);
    }
    const maxTopPx = ele.clientHeight - divText.clientHeight;
    if (topPx > maxTopPx) {
      topPx = maxTopPx;
    }
    divText.style.top = topPx + "px";

    //実際に移動させるアニメーション処理
    const finish = this.getFinishPx(ele) + -1 * divTextWidth;
    let start = Date.now();
    let speed = this.speed;
    let timer = setInterval(function () {
      let timePassed = (Date.now() - start) / speed;
      divText.style.left = divTextWidth + timePassed + "px";
      if (timePassed > finish) clearInterval(timer);
    }, 20);
  }
}
