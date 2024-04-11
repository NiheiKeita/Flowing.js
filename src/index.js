class Following {
  constructor(ele) {
    this.element = ele;
  }
  getFinishPx(ele) {
    return ele.clientWidth + ele.offsetLeft;
  }

  start(comment) {
    const ele = this.element;
    const divText = document.createElement("div");
    divText.style.position = "relative";
    divText.style.whiteSpace = "nowrap";

    const random = Math.round(Math.random() * ele.clientHeight);
    divText.style.top = random + "px";
    divText.appendChild(document.createTextNode(comment));
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

export { Following };
