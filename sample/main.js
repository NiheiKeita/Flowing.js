const divText = document.createElement("div");
let count = 0;
comment = "qqqqqqqqqqqqq";
var ele = document.getElementsByClassName("example")[0];

//コメントを作成する処理
divText.id = "text" + count; // アニメーション処理で対象の指定に必要なidを設定
count++;
divText.style.position = "fixed"; // テキストのは位置を絶対位置にするための設定
divText.style.whiteSpace = "nowrap"; // 画面右端での折り返しがなく、画面外へはみ出すようにする
divText.style.left = ele.offsetLeft + "px"; // 初期状態の横方向の位置は画面の右端に設定
const random = Math.round(Math.random() * ele.clientHeight);
divText.style.top = random + "px"; // 初期状態の縦方向の位置は画面の上端から下端の間に設定（ランダムな配置に）
divText.appendChild(document.createTextNode(comment)); // 画面上に表示されるテキストを設定
divText.style.fontSize = "20px"; // 流れるコメントのサイズを設定

ele.appendChild(divText);

//親要素の一番右の絶対座標を取得
function getFinishPx(ele) {
  return ele.clientWidth + ele.offsetLeft;
}

//実際に移動させるアニメーション処理
const finish = getFinishPx(ele);
let start = Date.now();
let timer = setInterval(function () {
  let timePassed = (Date.now() - start) / 10;
  divText.style.left = timePassed + "px";
  if (timePassed > finish) clearInterval(timer);
}, 20);
