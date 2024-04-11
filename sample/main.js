import { Following } from "../src/index.js";

window.onload = function () {
  const ff = new Following();
  var ele = document.getElementsByClassName("example")[0];
  let comment = "qqqqqqqqqqqqq";
  ff.setComment(comment);
  ff.start(ele);
};
