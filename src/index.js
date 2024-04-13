class Following {
  constructor(ele) {
    ele.style.overflow = "hidden";
    this.element = ele;
    this.speed = 10;
  }
  getFinishPx(ele) {
    return ele.clientWidth + ele.offsetLeft;
  }
  setSpeed(speed) {
    this.speed = speed;
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
    divText.style.width = "fit-content";
    ele.appendChild(divText);
    var divTextWidth = -1 * divText.scrollWidth;
    divText.style.left = divTextWidth + 1 + "px";

    //実際に移動させるアニメーション処理
    const finish = this.getFinishPx(ele) + -1 * divTextWidth;
    let start = Date.now();
    let speed = this.speed;
    // console.log(speed);
    let timer = setInterval(function () {
      let timePassed = (Date.now() - start) / speed;
      divText.style.left = divTextWidth + timePassed + "px";
      if (timePassed > finish) clearInterval(timer);
    }, 20);
  }
}

export { Following };
