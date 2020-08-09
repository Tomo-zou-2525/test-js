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

//ボタンをクリックしたら正誤判定
$button[0].addEventListener('click', (e) => {
  console.log(e);
  if(correct === e.target.textContent){
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
});

$button[1].addEventListener('click', (e) => {
  if(correct === e.target.textContent){
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
});

$button[2].addEventListener('click', (e) => {
  if(correct === e.target.textContent){
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
});

$button[3].addEventListener('click', (e) => {
  if(correct === e.target.textContent){
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
});