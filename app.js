// 基礎問題--Q1--
let nickname = 'さな';
let age = 29;
let profile = '私のニックネームは' + nickname + 'です。' + '年齢は' + age + '歳です。';

console.log(profile);

// --Q2--
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let languagesText = '私が好きな言語は' + languages[0] + 'です。';
let Clanguages = `${languagesText}
次は${languages[3]}を勉強してみたいです。`;

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
user.sayHello = function () {
  console.log('Hello');
}
user.sayHello();

//--Q8--

let calc = {};

calc.add = function tasu(x1, y1) {
 console.log(x1 + y1);
}
calc.subtract = function hiku(x2, y2) {
console.log(x2 - y2);
};
calc.multipy = function kakeru(x3, y3) {
 console.log(x3 * y3);
};
calc.divide = function waru(x4, y4) {
  console.log(x4 / y4);
};

calc.add(5, 2);
calc.subtract(20, 10);
calc.multipy(7, 7);
calc.divide(25, 5);

//--Q9--

function remainder(X, Y) {
 let amari = X % Y;
 return amari;
}
X = 5;
Y = 3;
console.log( X + 'を' + Y + 'で割った余りは' + remainder(X, Y) + 'です。');

//--Q10--

// function foo() {
  // let x = 1;
// }
// console.log(x);

// 変数Xが定義されていない理由

// 関数の中で定義したスコープは、定義した関数の中からしか参照することができないから。
// スコープ内でしか参照できない変数をローカル変数という。
// 上記の場合はconsole.log(x);を波カッコの中に入れることによりエラーは起きない。

// スコープ＝変数の有効範囲


// 応用問題--Q1--

let random = Math.floor( Math.random() * 10 );
console.log(random);

// --Q2--

let alertmsg = function() {
  console.log('Hello World!')
}

// function alertmsg () {
//   console.log('Hello World!')
// }
setTimeout(alertmsg, 3000);

// --Q3--

let num = 7;
if (num > 0) {
 console.log('num is greater than 0');
}
else if (num < 0) {
 console.log('num is less than 0');
}
else {
 console.log('num is 0');
}

// --Q4--

let numbers = [];
for (let i = 0; i < 100; i++) {
  numbers[i] = i;
}
console.log(numbers);

// --Q5--

let mixed = [4, '2', 5, '8', '9', 0, 1];

for(i = 0; i < mixed.length; i++) {
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
