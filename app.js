const question = 'ゲーム市場、最も売れたゲーム機は次のうちどれ？';
const answer = [
  'スーパーファミコン', 
  'プレイステーション２', 
  'ニンテンドースイッチ', 
  'ニンテンドーDS'
  ];
  const correct = 'ニンテンドーDS';

  document.getElementById('js-question').textContent = question;

  //定数の文字列をHTMLに反映させる
  document.getElementsByTagName('button')[0].textContent = answer[0];
  document.getElementsByTagName('button')[1].textContent = answer[1];
  document.getElementsByTagName('button')[2].textContent = answer[2];
  document.getElementsByTagName('button')[3].textContent = answer[3];

  //ボタンをクリックしたら正誤判定
  document.getElementsByTagName('button')[0].addEventListener('click', () => {
    if(correct === document.getElementsByTagName('button')[0].textContent){
      window.alert('正解！');
    } else {
      window.alert('不正解！');
    }
  });