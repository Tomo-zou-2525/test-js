let unko = "hello world";

const inoki = ["いーち", "にーい", "さーん", "だー！！"];

// let index = 0;
// while(index < inoki.length){
//   console.log(inoki[index]);
//   index++;
// }

// if(inoki.length > 3){
//   console.log('ボンバイエ！');
// } else {
//   console.log('ボンバ...！');
// }

const test = (arg) => {
  if(inoki.length > arg){
    console.log('ボンバイエ！');
  } else {
    console.log('ボンバ...！');
  }  
};

test(3);

const unko2 = {
  color: 'pink',
  size: 'large',
  purfume: 'mint'
};

// console.log(unko2.size);

document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
  window.alert('どーん');
});