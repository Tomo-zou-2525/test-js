const question = "あなたに足りないものは";

const answers = ["愛", "勇気", "JavaScript", "Vue.js"];

const correct = "愛";

document.getElementById("js-question").textContent = question;

const $button = document.getElementsByTagName("button");

/*
// ボタンに回答文を表示させる
 $button[0].textContent = answers[0];
 $button[1].textContent = answers[1];
 $button[2].textContent = answers[2];
 $button[3].textContent = answers[3];


// リファクタリング後
  24_ 変数buttonIndexを設定・0を代入し、現在の問題数とインデックス番号の取得に使用する
  また、各変数の引数に使用して、現在のインデックス番号として使用

  25_変数buttonLengthを設定・$buttonに代入されているdocument.getElementsByTagName("button");の中身・いわゆるclass(button)の数を取得し、while文の条件式である変化しきるまでの比較対象として使用
*/
let buttonIndex = 0;
let buttonLength = $button.length;
while (buttonIndex < buttonLength) {
  $button[buttonIndex].textContent = answers[buttonIndex];
  buttonIndex++;
}

$button[0].addEventListener("click", () => {
  if (correct === $button[0].textContent) {
    window.alert("正解");
  } else {
    window.alert("不正解");
  }
});

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
