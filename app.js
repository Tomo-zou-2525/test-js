const question = 'ゲーム市場、最も売れたゲーム機は次のうちどれ？';
const answer = [
'スーパーファミコン', 
'プレイステーション２', 
'ニンテンドースイッチ', 
'ニンテンドーDS'
];
const correct = 'ニンテンドーDS';

document.getElementById('js-question').textContent = question;

//問題分の記述をリファクタリング
const $button = document.getElementsByTagName('button')
//クイズの問題文、選択肢を定義
const setupQuize = () => {
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    //ここに命令
    $button[buttonIndex].textContent = answer[buttonIndex];  
    buttonIndex++;
  }
}

setupQuize();

const clickHandler = (e) => {
  if(correct === e.target.textContent){
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
};

//ボタンをクリックしたら正誤判定
let handleIndex = 0
const buttonLength = $button.length;
while(handleIndex < buttonLength){
  $button[handleIndex].addEventListener('click', (e) => {
  clickHandler(e);
});  
  handleIndex++;
}