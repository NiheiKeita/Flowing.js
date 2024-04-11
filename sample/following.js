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
    count++;
    divText.style.position = "fixed"; // テキストのは位置を絶対位置にするための設定
    divText.style.whiteSpace = "nowrap"; // 画面右端での折り返しがなく、画面外へはみ出すようにする
    divText.style.left = ele.offsetLeft + "px";
    const random = Math.round(Math.random() * ele.clientHeight);
    divText.style.top = random + "px";
    divText.appendChild(document.createTextNode(this.comment));
    divText.style.fontSize = "20px";
    ele.appendChild(divText);

    //実際に移動させるアニメーション処理
    const finish = this.getFinishPx(ele);
    let start = Date.now();
    let timer = setInterval(function () {
      let timePassed = (Date.now() - start) / 10;
      divText.style.left = timePassed + "px";
      if (timePassed > finish) clearInterval(timer);
    }, 20);
  }
}

export { Following };
