let unko = "めっちゃうんこ";

console.log(unko);

const tinko = ["いーち", "にーい", "さーん", "うほほ"];

// ループ文
// let index = 0;
// while (index < tinko.length) {
//   console.log(index);
//   console.log(tinko[index]);
//   index++;
// }

/*
  if else
*/
if (tinko.length > 5) {
  console.log("ボンバイエ");
} else {
  console.log("ボンバッッッ");
}

/*
  関数
*/
// const test = () => {
//   if (tinko.length > 5) {
//     console.log("ボンバイエ");
//   } else {
//     console.log("ボンバッッッ");
//   }
// };

// test();
// 定数に代入して、関数名で呼び出すのがベター

// 引数を使う場合
const test = arg => {
  if (tinko.length > arg) {
    console.log("ボンバイエ");
  } else {
    console.log("ボンバッッッ");
  }
};

// test(3);
// test(5);
// test(6);

//オブジェクトの話

const tinko2 = {
  color: "pink",
  size: "large",
  purfume: "mint",
  goToilet: () => {
    console.log("Hello World");
  }
};

console.log(tinko2);
console.log(tinko2.size);
console.log(tinko2.goToilet());

// 特殊なオブジェクト
//window
console.log(window.innerHeight);

window.alert("unko!");

//document = WEBページ全体の構造を表示
console.log(document);

console.log(document.getElementsByTagName("div"));

// addEventListenerは引数を2つ指定出来る
// 1つめはイベント 2つ目は関数を指定
document.getElementsByTagName("div").addEventListener("click", () => {
  window.alert("うんこ");
});
