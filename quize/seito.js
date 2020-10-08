const question = "問題文~";

const answers = ["A", "B", "C", "D"];

const correct = "B";

//これでは一つに絞れない
// console.log(document.getElementsByTagName("div"));

//これでユニークに絞れる
// console.log(document.getElementById("js-question"));

//これで該当Idのtextを取得
console.log(document.getElementById("js-question").textContent);

//書き換えも出来る ( = で上書きできる)
// document.getElementById("js-question").textContent = "Question";

//文字列だけでなく、変数としても代入できる ( question は１行目にある)
document.getElementById("js-question").textContent = question;

/* buttonにanswerの文字を代入させる
   全てのbutton要素を取得させるので、判別させるために
   インデックス番号で認識させる
*/
document.getElementsByTagName("button")[0].textContent = answers[0];
document.getElementsByTagName("button")[1].textContent = answers[1];
document.getElementsByTagName("button")[2].textContent = answers[2];
document.getElementsByTagName("button")[3].textContent = answers[3];
