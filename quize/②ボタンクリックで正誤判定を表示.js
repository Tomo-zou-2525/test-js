const question = "あなたに足りないものは";

const answers = ["愛", "勇気", "JavaScript", "Vue.js"];

const correct = "愛";

document.getElementById("js-question").textContent = question;

//button要素を取得して、$buttonという変数に代入する事でリファクタリング
//HTMLのオブジェクトを代入するときは頭に$をつける
const $button = document.getElementsByTagName("button");
//ボタンに回答文を表示させる
$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];

/*
  ボタンにイベントを足す・クリックで正誤判定
  ・ドキュメント（html）要素の（button）classのインデックス番号0のオブジェクトに対して
  ”click”した場合にイベントが発火するaddEventListenerを付与し
  関数としてif else で処理を分ける
  ifの条件は、correctに格納された文字列に対して、questionの文字列が合致するか判断するか
*/

// リファクタリング後
$button[0].addEventListener("click", () => {
  if (correct === $button[0].textContent) {
    window.alert("正解");
  } else {
    window.alert("不正解");
  }
});

//リファクタリング前
// document.getElementsByTagName("button")[0].addEventListener("click", () => {
//   //correctの定数と、button要素のtextContent の比較をする
//   if (correct === document.getElementsByTagName("button")[0].textContent) {
//     window.alert("正解");
//   } else {
//     window.alert("不正解");
//   }
// });

//各button毎にanswerを表示
$button[1].addEventListener("click", () => {
  if (correct === $button[1].textContent) {
    window.alert("正解");
  } else {
    window.alert("不正解");
  }
});

$button[2].addEventListener("click", () => {
  if (correct === $button[2].textContent) {
    window.alert("正解");
  } else {
    window.alert("不正解");
  }
});

$button[3].addEventListener("click", () => {
  if (correct === $button[3].textContent) {
    window.alert("正解");
  } else {
    window.alert("不正解");
  }
});
