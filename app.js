const quize = [
  {
    question: "ゲーム市場、最も売れたゲーム機は次のうちどれ？",
    answer: [
      "スーパーファミコン",
      "プレイステーション２",
      "ニンテンドースイッチ",
      "ニンテンドーDS"
    ],
    correct: "ニンテンドーDS"
  },
  {
    question: "あなたが入りたい会社は？",
    answer: ["SES", "受託系", "自社開発", "ものレヴォ"],
    correct: "ものレヴォ"
  },
  {
    question: "一番何がネック？",
    answer: [
      "スーパーファミコン",
      "ECS",
      "ニンテンドースイッチ",
      "ニンテンドーDS"
    ],
    correct: "ECS"
  }
];
console.log(quize[0].correct);

const quizeLength = quize.length;
let quizeIndex = 0;
let score = 0;

//最後、questionの表示を変更
document.getElementById("js-question").textContent = quize[quizeIndex].question;

//問題分の記述をリファクタリング
const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;
//クイズの問題文、選択肢を定義
const setupQuize = () => {
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    //ここに命令
    $button[buttonIndex].textContent = quize[quizeIndex].answer[buttonIndex];
    buttonIndex++;
  }
};

setupQuize();

const clickHandler = e => {
  if (quize[quizeIndex].correct === e.target.textContent) {
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解！");
  }

  quizeIndex++;

  if (quizeIndex < quizeLength) {
    //問題数があればこちらを実行
    setupQuize();
  } else {
    //問題数がもうなければこちらを実行
    window.alert(
      "終了！ あなたの正解数は" + score + "/" + quizeLength + "です！"
    );
  }
};

//ボタンをクリックしたら正誤判定
let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener("click", e => {
    clickHandler(e);
  });
  handleIndex++;
}
