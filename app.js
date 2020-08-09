const question = 'ゲーム市場、最も売れたゲーム機は次のうちどれ？';
const answer = [
  'スーパーファミコン', 
  'プレイステーション２', 
  'ニンテンドースイッチ', 
  'ニンテンドーDS'
  ];
  const correct = 'ニンテンドーDS';

  console.log();

  document.getElementById('js-question').textContent = question;

  document.getElementsByTagName('button')[0].textContent = answer[0];
  document.getElementsByTagName('button')[1].textContent = answer[1];
  document.getElementsByTagName('button')[2].textContent = answer[2];
  document.getElementsByTagName('button')[3].textContent = answer[3];