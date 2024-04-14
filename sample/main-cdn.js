

window.onload = function () {
  var ele = document.getElementsByClassName("example")[0];
  const following = new Following(ele);
  let comment = "こんにちは";
  following.setIsRandom(false);
  following.setTopPx(400);
  following.start(comment);
};
