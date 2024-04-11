class Following {
  constructor(comment = "") {
    this.comment = comment;
  }
  setComment(comment) {
    this.comment = comment;
  }
  getFinishPx(ele) {
    return ele.clientWidth + ele.offsetLeft;
  }

  start(ele) {
    const divText = document.createElement("div");
    divText.style.position = "relative"; // テキストのは位置を絶対位置にするための設定
    divText.style.whiteSpace = "nowrap"; // 画面右端での折り返しがなく、画面外へはみ出すようにする

    const random = Math.round(Math.random() * ele.clientHeight);
    divText.style.top = random + "px";
    divText.appendChild(document.createTextNode(this.comment));
    divText.style.fontSize = "20px";
    ele.appendChild(divText);
    var divTextWidth = -1 * divText.scrollWidth;
    divText.style.left = divTextWidth + 1 + "px";

    //実際に移動させるアニメーション処理
    const finish = this.getFinishPx(ele) + -1 * divTextWidth;
    let start = Date.now();
    let timer = setInterval(function () {
      let timePassed = (Date.now() - start) / 10;
      divText.style.left = divTextWidth + timePassed + "px";
      if (timePassed > finish) clearInterval(timer);
    }, 20);
  }
}
