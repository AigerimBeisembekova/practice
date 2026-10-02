// объекты

const user = {
  name: "Aigerim",
  age: 33,
  city: "Almaty",
};

const user2 = {
  name: "Amina",
  age: 20,
  city: "Astana",
};

console.log(user2.name);
console.log(user2.age);

user2.age = 21;
console.log(user2.age);

user2.isStudent = true;
console.log(user2);

user2.country = "Kazakhstan";
console.log(user2);

const product = {
  name: "Phone",
  price: 300000,
  color: "black",
};

console.log(`${product.name} стоит ${product.price}`);
console.log(`${product.name} цвета ${product.color}`);

product.price = 250000;
console.log(product.price);

delete product.color;
console.log(product);

// объекты + условия

const student = {
  name: "Dana",
  score: 80,
};

if (student.score >= 60) {
  console.log("Зачет");
} else {
  console.log("Не зачет");
}

const user2 = {
  name: "Aruzhan",
  age: 17,
};

if (user2.age >= 18) {
  console.log("Доступ разрешен");
} else {
  console.log("Доступ запрещен");
}

const book = {
  title: "Harry Potter and the Goblet of Fire",
  author: "J.K.Rowling",
  pages: 789,
};

console.log(book.title);
console.log(book.author);
console.log(book.pages);

const car = {
  brand: "Toyota",
  year: 2020,
};

car.color = "white";
car.year = 2022;

console.log(car);

// массивы

const favoriteProducts = ["cheese", "butter", "bread"];
console.log(favoriteProducts);

const numbers = [10, 20, 30, 40];
console.log(numbers);

const fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// что выведется?
const colors = ["red", "green", "blue"];
console.log(colors[1]); // green

const numbers2 = [5, 10, 15];
console.log(numbers2.length); // 3

const animals = ["cat", "dog", "rabbit"];
animals[1] = "fox";
console.log(animals);

animals.push("horse");
console.log(animals);

animals.pop();
console.log(animals);

animals.unshift("lion");
console.log(animals);

animals.shift();
console.log(animals);

// массив объектов

const users = [
  { name: "Aigerim", age: 33 },
  { name: "Mihrimah", age: 5 },
  { name: "Nairiyat", age: 2 },
];

console.log(users[0].name);
console.log(users[1].age);

const products = [
  { name: "Phone", price: 300000 },
  { name: "Laptop", price: 500000 },
  { name: "Tablet", price: 200000 },
];

console.log(products[1].price);

products[0].price = 250000;
console.log(products[0].price);

// forEach

const fruits2 = ["apple", "banana", "orange"];

fruits2.forEach((fruit) => {
  console.log(fruit);
});

const numbers3 = [1, 2, 3, 4, 5];

numbers3.forEach((number) => {
  console.log(number);
});

const names = ["Amina", "Dana", "Aruzhan"];

names.forEach((name) => {
  console.log(`Привет, ${name}`);
});

const numbers4 = [2, 4, 6];

numbers4.forEach((number) => {
  console.log(number * 2);
});

const colors2 = ["red", "green", "blue"];

colors2.forEach((color, index) => {
  console.log(index, color);
});

const numbers5 = [10, 20, 30, 40];
// если с if
numbers5.forEach((number, index) => {
  if (index < 2) {
    console.log(number);
  }
});
// если логический оператор
numbers5.forEach((number, index) => index < 2 && console.log(number));
// метод slice
numbers5.slice(0, 2).forEach((number) => console.log(number));

const products2 = [
  { name: "Phone", price: 300000 },
  { name: "Laptop", price: 500000 },
  { name: "Tablet", price: 200000 },
];

products2.forEach((product) => {
  console.log(product.name);
});

products2.forEach((product) => {
  console.log(`${product.name} - ${product.price}`);
});

// forEach + условия

const numbers6 = [1, 5, 10, 15, 20];

numbers6.forEach((number) => {
  if (number > 10) {
    console.log(number);
  }
});

const ages = [15, 18, 20, 16, 30];

ages.forEach((age) => {
  if (age >= 18) {
    console.log("Совершеннолетний");
  } else {
    console.log("Несовершеннолетний");
  }
});

const products3 = [
  { name: "Phone", price: 300000 },
  { name: "Laptop", price: 500000 },
  { name: "Mouse", price: 15000 },
];

products3.forEach((product) => {
  if (product.price > 100000) {
    console.log(product);
  }
});

const cards = ["card1", "card2", "card3", "card4"];

cards.forEach((card, index) => {
  if (index < 2) {
    console.log("Первая группа");
  } else {
    console.log("Вторая группа");
  }
});

// функции

function sayHello() {
  console.log("Hello");
}

sayHello();

function showName(name) {
  console.log(name);
}

showName("Aigerim");

function sum(a, b) {
  console.log(a + b);
}

sum(2, 5);

function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 5));

function checkAge(age) {
  if (age >= 18) {
    console.log("Можно войти");
  } else {
    console.log("Нельзя войти");
  }
}

checkAge(16);

function greet(name) {
  console.log(`Привет, ${name}`);
}

greet("Aigerim");
greet("Mihrimah");
greet("Nairiyat");

// функция + массив

function showNumber(number) {
  console.log(number);
}

const numbers7 = [1, 2, 3];

numbers7.forEach(showNumber);

numbers7.forEach((number) => {
  console.log(`Число ${number}`);
});

function greet(name) {
  console.log(`Привет, ${name}`);
}

const names2 = ["Amina", "Dana", "Aruzhan"];

names2.forEach(greet);

numbers7.forEach(showNumber); // функция будет вызываться при каждой итерации. мы как бы дали ссылку на функцию
numbers7.forEach(showNumber()); // скобки заставят функцию вызваться сразу, мы получим undefined и код остановится

// поиск элементов в html

const title = document.getElementById("title");
console.log(title.textContent);

const button = document.getElementById("button");
const theFirstText = document.querySelector(".text");
const theFirstCard = document.querySelector(".card");
const allCards = document.querySelectorAll(".card");
const fullText = document.getElementsByClassName("text");
const title1 = document.querySelector("#title");
const button1 = document.querySelector("#button");

// сравнение способов поиска

// <h1 id="main-title">Hello</h1>

const mainTitle = document.getElementById("main-title");
// ищет элемент в дом дереве только по ID, так как он уникален, это будет один элемент всегда, просто в скобках пишем ID
const mainTitle2 = document.querySelector("#main-title");
// ищет элементы в дом дереве и по ID(через #), и по классу(через .).находит первый подходящий элемент и все

/* 65. Что вернёт document.querySelector('.card'), если карточек на странице пять? 
первую карточку

66. Что использовать, если нужно получить все карточки?
querySelectorAll

67. Чем отличаются querySelector и querySelectorAll?
querySelector находит первый подходящий элемент
querySelectorAll находит все подходящие элементы

68. Что вернёт document.getElementsByClassName('item')?
<div class="item">1</div>
<div class="item">2</div>
<div class="item">3</div> 
все три элемента

*/

// DOM + forEach

const allCards2 = document.querySelectorAll(".card");

allCards2.forEach((card) => {
  console.log(card);
});

allCards2.forEach((card) => {
  console.log(card.textContent);
});

allCards2.forEach((card) => {
  card.classList.add("active");
});

allCards5.forEach((card, index) => {
  if (index < 2) {
    card.classList.add("first");
  } else {
    card.classList.add("second");
  }
});
// или
allCards5.forEach((card, index) => {
  card.classList.add(index < 2 ? "first" : "second");
});

allCards12.forEach((card, index) => {
  if (index < 5) {
    card.classList.add("big");
  } else {
    card.classList.add("small");
  }
});
// или
allCards12.forEach((card, index) => {
  card.classList.add(index < 5 ? "big" : "small");
});

// Часть 12. Код-ревью

/*74. Найдите ошибку.
const user = {
name: 'Amina'
age: 20
};
после Amina запятая пропущена

75. Что неправильно? Что получится и почему?
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits[3]);
в массиве всего три элемента, индекс начинается с 0
мы получим undefined так js ничего не найдет под индексом 3

76. Что получится?
const user = {
name: 'Amina',
age: 20
};
console.log(user.city);
undefined

77. Если задача была вывести каждый отдельный элемент — что здесь не так?
const numbers = [1, 2, 3];
numbers.forEach((number) => {
console.log(numbers);
});
в консоль лог надо передать number (параметр который при каждой итерации принимает аргумент)

78. Найдите ошибку.
const cards = document.querySelector('.card');
cards.forEach((card) => {
console.log(card);
});
forEach не используется с одним элементом
а querySelector только первый элемент находит

79. Что нужно изменить, если карточек несколько?
const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
console.log(card);
});

80. Найдите ошибку.
const title = document.getElementById('#title');
лишняя решетка
getElementById уже ищет только по ID

81. Найдите ошибку, если card — это класс.
const card = document.querySelector('card');
перед названием класса стаим точку

82. Есть ли здесь ошибка? Если нет — объясните, что делает код.
const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
if (index <= 2) {
card.classList.add('first');
} else {
card.classList.add('second');
}
});
Есть несколько карточек в переменной cards: карточкам с индексом 0,1 и 2 добавить класс first, остальным —
second.
*/

/*
<div class="product">Phone</div>
<div class="product">Laptop</div>
<div class="product">Tablet</div>
<div class="product">Mouse</div>
*/

const products4 = document.querySelectorAll(".product");
// через querySelectorAll сохраняем все продукты с указанным классом в переменную products4

products4.forEach((product) => { // применяем метод forEach в скобках параметр называем логично продукт
  console.log(product.textContent); // вызываем только текстовую часть элементов с помощью textContent
});

products4.forEach((product, index) => { // применяем метод forEach в скобках параметры продукт и индекс так как далее будет условие
  product.classList.add(index < 2 ? "product-first" : "product-second");
});// добавь классы по условию в скобках (если индекс меньше 2 ? вопрос как бы проверяет true или false наше условие)
// если true "product-first" добавь, а если false "product-second" добавь)

// Доп задание
const products5 = [
{ name: 'Phone', price: 300000 },
{ name: 'Laptop', price: 500000 },
{ name: 'Mouse', price: 15000 }
];

products5.forEach((product) => {
  console.log(product.name, product.price);
});

products5.forEach((product) => {
  console.log(product.price > 100000 ? "Дорогой товар" : "Бюджетный товар");
});