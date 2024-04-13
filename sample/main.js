import { Following } from "../src/index.js";

window.onload = function () {
  console.log("dd");
  var ele = document.getElementsByClassName("example")[0];
  const following = new Following(ele);
  let comment = "こんにちは";
  following.start(comment);
};
