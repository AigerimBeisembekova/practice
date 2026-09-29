const name = "Aigerim";
const age = 33;
const city = "Almaty";
const isStudent = true;
const price = 5000;

const name2 = "Amina";
console.log(name2); // Amina

let score = 10;
score = 15;
console.log(score); // 15

let count = 5;
count = count + 2;
console.log(count); // 7

const age2 = 20;
let score2 = 0;
const siteName = "Shop";
let count2 = 1;

const age3 = 20;
age4 = 21;
// почему ошибка? потому что нельзя переназначить переменную const

//const user name = 'Amina'; почему ошибка?
const username = "Amina";

// const 1name = 'Amina'; почему ошибка?
const name1 = "Amina"; // название переменных нельзя начинать с цифр

const name3 = "Nana"; // строка
const age5 = 20; // число
const isOnline = true; //булевое значение
const price2 = "5000"; // строка
const value = false; // булевое значение
let value2; // что находится в переменной value2? undefined
//определить результат выражения true или false
5 > 3; // true
2 > 10; // false
10 === 10; // true
10 === 5; // false
20 >= 18; // true
17 >= 18; // false
5 !== 10; // true

const age6 = "20";
console.log(age6 === 20); // false, потому что разные типы данных

const age7 = 20;
if (age7 >= 18) {
  console.log("Можно");
} // Можно

const age8 = 15;
if (age8 >= 18) {
  console.log("Можно");
} // ничего не выведет, потому что условие не выполняется

const age9 = 16;
if (age9 >= 18) {
  console.log("Вход разрешен");
} else {
  console.log("Вход запрещен");
} // Вход запрещен

const temperature = 30;
if (temperature > 25) {
  console.log("Жарко");
} else {
  console.log("Не жарко");
}

const age10 = 19;
if (age10 >= 18) {
  console.log("Совершеннолетний");
} else {
  console.log("Несовершеннолетний");
}

const score1 = 80;
if (score1 >= 60) {
  console.log("Зачет");
} else {
  console.log("Не зачет");
}

const password = "12345";
if (password === "12345") {
  console.log("Добро пожаловать");
} else {
  console.log("Неверный пароль");
}

const isOnline1 = true;
if (isOnline1) {
  console.log("Пользователь онлайн");
} else {
  console.log("Пользователь офлайн");
} // Пользователь онлайн

const hasTicket = false;
if (hasTicket) {
  console.log("Можно войти");
} else {
  console.log("Билета нет");
} // билета нет

/* найди ошибку и исправь
 const age = 15;
if (age >= 18) {
  console.log('Можно войти');
} else {
  console.log('Можно войти');
} 
*/

const age11 = 15;
if (age11 >= 18) {
  console.log("Можно войти");
} else {
  console.log("Вход запрещен");
}

/* найди ошибку и исправь
const age = 18;
if age >= 18 {
  console.log('Можно');
}
*/

const age12 = 18;
if (age12 >= 18) {
  console.log("Можно");
}

/* найди ошибку
const age = 18;
if (age = 18) {
  console.log('Возраст 18');
}
*/

const age13 = 18;
if (age13 === 18) {
  console.log("Возраст 18");
}

// определи результат до запуска кода

let number = 5;

number = number + 2;

if (number > 6) {
  console.log("A");
} else {
  console.log("B");
} // A

let score3 = 10;

score3 = score3 + 5;

if (score3 >= 15) {
  console.log("Успех");
} else {
  console.log("Попробуй ещё");
} // Успех

const price3 = 1000;

if (price3 > 500) {
  console.log("Дорого");
} else {
  console.log("Недорого");
} // Дорого

const userAge = "18";

if (userAge === 18) {
  console.log("Возраст подходит");
} else {
  console.log("Возраст не подходит");
} // Возраст не подходит

const number2 = 2;
if (number2 > 0) {
  console.log("положительное число");
} else {
  console.log("число не положительное");
}

const temperature2 = 20;
if (temperature2 >= 25) {
  console.log("Жарко");
} else {
  console.log("Прохладно");
}

const score4 = 75;
if (score4 >= 60) {
  console.log("экзамен сдан");
} else {
  console.log("экзамен не сдан");
}

const isLoggedIn = true;
if (isLoggedIn) {
  console.log("Добро пожаловать");
} else {
  console.log("Пожалуйста, войдите в аккаунт");
}

/* найди все ошибки
const age = '20'

if age >= 18 {
  console.log('Можно войти')
} else {
  console.log('Нельзя войти')
}
*/

const age15 = 20;

if (age15 >= 18) {
  console.log("Можно войти");
} else {
  console.log("Нельзя войти");
}

// Посмотрите на код и объясните каждую строку своими словами:
let count5 = 2; // переменная count5 хранит в себе число 2

count5 = count5 + 3; // перезаписываем значение переменной, теперь это 2+3=5

if (count5 >= 5) {
  // если значение в переменной count5 >= пяти
  console.log("A"); // то выведи в консоль А
} else {
  // если нет
  console.log("B"); // то выведи в консоль В
} // будет А 5=5

// Не запускайте код. Ответьте: Что выведется и почему?
const value3 = 10;

if (value3 !== 10) {
  console.log("Первый");
} else {
  console.log("Второй");
}
// будет Второй, потому что в условии значение переменной НЕ должно быть равно 10

const age19 = 17;
if (age19 >= 18) {
  console.log("Доступ разрешён");
} else {
  console.log("Доступ запрещён");
}

const age20 = 20;
if (age20 >= 18) {
  console.log("Доступ разрешён");
} else {
  console.log("Доступ запрещён");
}
