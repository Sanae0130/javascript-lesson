// 基礎問題--Q1--
let nickname = 'さな';
let age = 29;
let profile = '私のニックネームは' + nickname + 'です。' + '年齢は' + age + '歳です。';

console.log(profile);

// --Q2--
let languages = 'JavaScript';
let languagesText = '私が好きな言語は' + languages + 'です。';
languages = 'PHP';
languages = 'Ruby';
languages = 'Python';
let Clanguages = `${languagesText}
次は${languages}を勉強してみたいです。`;
languages = 'Go';

console.log(Clanguages);

// --Q3--
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

// --Q4--
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros'],
  },
];

console.log(playerList[1].favorites[1]);

// --Q5--

console.log(( playerList[0].age + playerList[1].age + playerList[2].age ) / playerList.length);

// --Q6--

function sayHello() {
  let say = 'Hello';
  console.log(say);
}

sayHello();

let sayworld = function() {
  console.log('world');
}

sayworld();

//--Q7--

user.birthday = '2000-09-27';
user.sayHello = function (){
  console.log('Hello');
}
user.sayHello();

//--Q8--

let calc = {};

calc.add = function tasu(X1,Y1) {
 let wa = X1 + Y1;
 console.log(wa);
}
calc.subtract = function hiku(X2,Y2) {
 let sa = X2 - Y2;
 console.log(sa);
};
calc.multipy = function kakeru(X3,Y3) {
 let seki = X3 * Y3; 
 console.log(seki);
};
calc.divide = function waru(X4,Y4) {
  let syou = X4 / Y4;
  console.log(syou);
};

calc.add(5,2);
calc.subtract(20,10);
calc.multipy(7,7);
calc.divide(25,5);

//--Q9--

function remainder(X,Y){
 let amari = X % Y;
 return amari;
}
X = 5;
Y = 3;
console.log( X + 'を' + Y + 'で割った余りは' + remainder(X,Y) + 'です。');

//--Q10--

// function foo() {
  // let x = 1;
// }
// console.log(x);

// 変数Xが定義されていない理由

// 関数の中で定義したスコープは、定義した関数の中からしか参照することができないから。
// 上記の場合はconsole.log(x);を波カッコの中に入れることによりエラーは起きない。

// スコープ＝変数の有効範囲


// 応用問題--Q1--

let random = Math.floor( Math.random() * 11 );
console.log(random);

// --Q2--

let alertmsg = function(){
  console.log('Hello World!')
}
setTimeout(alertmsg,3000)

// --Q3--

let num = 7;
if (num>0) {
 console.log('num is greater than 0');
}
else if (num<0) {
 console.log('num is less than 0');
}
else {
 console.log('num is 0');
}

// --Q4--

for (let number = 0; number < 100; number++) {
  console.log(number);
}

// --Q5--

let mixed = [4, '2', 5, '8', '9', 0, 1];

for(i = 0; i < mixed.length; i++){
  if (typeof mixed[i] === 'string') {
  console.log('not number');
  }
  else if (mixed[i] % 2 === 0) {
  console.log('even');
  }
  else if (mixed[i] % 2 === 1) {
  console.log('odd');
  }
}
