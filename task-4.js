// Темы: функции, callback-функции, addEventListener, event, preventDefault, а также повторение
// объектов, map и filter.
// Как выполнять: не копируйте решение из примеров. Сначала попробуйте проговорить алгоритм
// словами. В заданиях на code review обязательно напишите, что делает код, где ошибка и почему она
// возникает. В задачах с DOM можно создать небольшой HTML-файл и подключить к нему JS.

// Часть 1. Функции - база
// 1. Создайте функцию sayHello, которая выводит в консоль строку «Hello!». Затем вызовите её.
function sayHello() {
  console.log("Hello!");
}
sayHello();

// 2. Создайте функцию greet, которая принимает имя и выводит строку вида «Привет, Amina!».
function greet(name) {
  console.log(`Привет, ${name}!`);
}
greet("Amina");

// Вызовите функцию минимум с тремя разными именами.
const names111 = ["Aigerim", "Mihrimah", "Nairiyat"];
names111.forEach(greet);

// 3. Создайте функцию sum, которая принимает два числа и возвращает их сумму через return.
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 5));

// 4. Создайте функцию multiply, которая принимает два числа и возвращает их произведение.
function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 5));
// 5. Создайте функцию formatPrice, которая принимает цену и возвращает строку вида «300000 ₸».
function formatPrice(price) {
  return `${price} ₸`;
}
console.log(formatPrice(300000));

// 6. Создайте функцию checkAge, которая принимает возраст и возвращает «Доступ разрешён»,
// если возраст 18 или больше, иначе «Доступ запрещён».

function checkAge(age) {
  if (age >= 18) {
    return "Доступ разрешён";
  } else {
    return "Доступ запрещён";
  }
}
console.log(checkAge(20));
console.log(checkAge(14));

// 7. Создайте функцию greet с параметром по умолчанию name = 'Гость'. Проверьте вызов
// функции с аргументом и без аргумента.
function greet(name = "Гость") {
  console.log(`hello ${name}`);
}
greet();
greet("Aigerim");

// 8. Объясните своими словами разницу между параметром и аргументом. Приведите
// собственный пример функции.
// параметр это переменная которую мы создаем. то, что принимает функция
// аргумент это значение которое мы подставляем на место параметра при вызове функции

function sayHi(name) {
  console.log(`Hi ${name}`);
}
sayHi("Aigerim");
// name - параметр, Aigerim - аргумент

// Часть 2. Виды функций
// 9. Перепишите Function Declaration в Function Expression.
// function showMessage() {
// console.log('Hello');
// }

const showMessage = function () {
  console.log("Hello");
};

showMessage();

// 10. Перепишите эту же функцию в Arrow Function.

const showMessage1 = () => {
  console.log("Hello");
};

showMessage1();

// 11. Перепишите функцию ниже в короткую стрелочную функцию с неявным return.
// function double(number) {
// return number * 2;
// }

const double = (number) => number * 2;
console.log(double(4));

// 12. Не запускайте код сразу. Что произойдёт и почему?
sayHello();
function sayHello() {
  console.log("Hello");
}
// выйдет Hello потому что declaration можно вызвать до объявления
// но лучше так не делать

// 13. Не запускайте код сразу. Что произойдёт и почему?
// sayHello2();
// const sayHello2 = function () {
//   console.log("Hello");
// };
// ошибка потому что expression функция вызвана до объявления

// 14. Напишите три одинаковые по логике функции sum(a, b): Function Declaration, Function
// Expression и Arrow Function.

function sum(a, b) {
  console.log(a + b);
}
sum(2, 3);

const sum1 = function (a, b) {
  console.log(a + b);
};
sum1(3, 4);

const sum2 = (a, b) => {
  console.log(a + b);
};
sum2(4, 5);

// Часть 3. return и область видимости функции
// 15. Что выведется? Почему?
function sum3(a, b) {
  console.log(a + b);
}
const result = sum3(2, 3);
console.log(result);
// 5 и undefined
// сначала консоль выведет 5, потом result не найдет sum3 потому что нет return

// 16. Исправьте функцию так, чтобы result получил число 5.
// function sum(a, b) {
// console.log(a + b);
// }
// const result = sum(2, 3);

function sum4(a, b) {
  return a + b;
}
const result1 = sum4(2, 3);
console.log(result1);

// 17. Что выведется и почему?
const message = "Outside";
function showMessage2() {
  const message = "Inside";
  console.log(message);
}
showMessage2();
console.log(message);
// inside потом outside
// сначала консоль сработает при вызове функции, а внутри тела функции message равен Inside
// потом вторая консоль выведет message Outside который в глобальной видимости

// 18. Найдите проблему. // return нужен
// 19. Измените функцию createUser так, чтобы созданный объект можно было сохранить в
// переменную снаружи функции.

// function createUser() {
// const user = {
// name: 'Amina',
// age: 20
// };
// }
// console.log(user);

function createUser() {
  const user = {
    name: "Amina",
    age: 20,
  };
  return user;
}
const user = createUser();
console.log(user);

// Часть 4. Callback-функции
// 20. Объясните, почему здесь передаётся showNumber без круглых скобок.
const numbers = [1, 2, 3];
function showNumber(number) {
  console.log(number);
}
numbers.forEach(showNumber);
// потому что мы используем forEach и передаем ссылку на функцию

// 21. Что не так в этом коде?
// const numbers = [1, 2, 3];
// function showNumber(number) {
// console.log(number);
// }
// numbers.forEach(showNumber());// скобки после showNumber лишние

// 22. Создайте отдельную функцию showProductName(product), которая выводит название товара.
// Передайте её в forEach.
const products = [
  { name: "Phone", price: 300000 },
  { name: "Laptop", price: 500000 },
  { name: "Mouse", price: 15000 },
];

function showProductName(product) {
  console.log(product.name);
}

products.forEach(showProductName);

// 23. Создайте функцию getProductName(product), которая возвращает product.name. Передайте
// её в map и получите массив названий товаров.

function getProductName(product) {
  return product.name;
}

const ProductsNames = products.map(getProductName);
console.log(ProductsNames);

// 24. Создайте функцию isExpensive(product), которая возвращает true, если цена больше 100000.
// Передайте её в filter.

function isExpensive(product) {
  return product.price > 100000;
}

const expensiveProducts = products.filter(isExpensive);
console.log(expensiveProducts);

// Часть 5. map, filter и функции
// 25. С помощью map получите массив цен, увеличенных на 10%.
const prices = [1000, 2000, 5000];

const increasedPrices = prices.map((price) => price * 1.1);
console.log(increasedPrices);

// 26. С помощью filter оставьте только совершеннолетних пользователей.
const users = [
  { name: "Amina", age: 17 },
  { name: "Dana", age: 25 },
  { name: "Ali", age: 16 },
  { name: "Aruzhan", age: 20 },
];

const adultUsers = users.filter((user) => user.age >= 18);

// const adultUsers = users.filter((user) => {
//   if(user.age >= 18)
//     return user;
// });
console.log(adultUsers);

// 27. Сначала filter: оставьте доступные товары. Затем map: получите только их названия.
const products1 = [
  { name: "Phone", price: 300000, isAvailable: true },
  { name: "Laptop", price: 500000, isAvailable: false },
  { name: "Mouse", price: 15000, isAvailable: true },
];

const availableProductsNames = products1
  .filter((product) => {
    return product.isAvailable;
  })
  .map((product) => {
    return product.name;
  });

console.log(availableProductsNames);

// 28. Найдите логическую ошибку. Задача - получить только товары дороже 100000.
// const result = products.map((product) => {
// return product.price > 100000;
// });

const result2 = products1.filter((product) => {
  return product.price > 100000;
});

// 29. Найдите ошибку. Задача - получить удвоенные числа.
// const numbers = [1, 2, 3];
// const result = numbers.map((number) => {
// number * 2;
// });

const numbers1 = [1, 2, 3];
const result3 = numbers1.map((number) => {
  return number * 2;
});
console.log(result3);

// 30. Объясните разницу между результатами map и filter на одном и том же массиве.
const products2 = [
  { name: "Phone", price: 300000, isAvailable: true },
  { name: "Laptop", price: 500000, isAvailable: false },
  { name: "Mouse", price: 15000, isAvailable: true },
]; //  с помощью map мы можем например получить новый массив с ценами дороже на 10%
// а с помощью filter можем получить новый массив доступных или дорогих или дешевых товаров

// Часть 6. addEventListener - база
// HTML для заданий:

// <h1 class="title">Выбери свой продукт</h1>
// <input class="name-input" type="text">
// <button class="show-button">Показать</button>
// <button class="color-button">Сменить цвет</button>
// <a class="google-link" href="https://google.com">Google</a>
// <form class="form">
// <input class="email-input" type="email">
// <button type="submit">Отправить</button>
// </form>

// 31. Найдите кнопку .show-button через querySelector и добавьте обработчик click, который
// выводит «Кнопка нажата».

const showButton = document.querySelector(".show-button");

// showButton.addEventListener("click", () => {
//   console.log("Кнопка нажата");
// });

// 32. Вынесите обработчик клика в отдельную функцию showMessage и передайте функцию в
// addEventListener.

// function showMessage3() {
//   console.log("Кнопка нажата");
// }

// showButton.addEventListener("click", showMessage3);

// 33. Объясните разницу между этими двумя вариантами и укажите, какой правильный.
// button.addEventListener('click', showMessage); правильный - с указанием ссылки на функцию
// button.addEventListener('click', showMessage()); неправильно - скобки вызывают функцию принудительно

// 34. При клике на .color-button переключайте класс active через classList.toggle.
const colorButton = document.querySelector(".color-button");

colorButton.addEventListener("click", () => {
  colorButton.classList.toggle("active");
});

// 35. При наведении мыши на .title выводите в консоль именно textContent заголовка, а не текст,
// написанный вручную.
const title = document.querySelector("#title");

title.addEventListener("mouseover", () => {
  console.log(title.textContent);
});

// 36. Добавьте событие mouseleave для заголовка и выводите «Курсор ушёл».
title.addEventListener("mouseleave", () => {
  console.log("Курсор ушёл");
});

// 37. На поле .name-input повесьте событие input и выводите в консоль текущее значение поля.
const nameInput = document.querySelector(".name-input");

nameInput.addEventListener("input", () => {
  console.log(nameInput.value);
});

// 38. Попробуйте использовать event.target.value вместо заранее сохранённой переменной input.
nameInput.addEventListener("input", (event) => {
  console.log(event.target.value);
});

// Часть 7. event и preventDefault
// 39. Что такое event в этом коде? Что, по вашему мнению, в нём хранится?
// button.addEventListener('click', (event) => {
// console.log(event);
// });

// event тут параметр функции, то есть когда происходит клик, браузер создает объект события и передает его
// аргументом в этот параметр

// 40. Выведите event.target при клике на кнопку. Посмотрите в консоли, какой HTML-элемент вы
// получили.
showButton.addEventListener("click", (event) => {
  console.log(event.target);
});
// <button class="show-button">Показать</button>

// 41. Добавьте обработчик клика на ссылку .google-link. Используйте event.preventDefault(), чтобы
// переход на Google не произошёл, и выведите «Переход отменён».
const googleLink = document.querySelector(".google-link");

googleLink.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Переход отменён");
});

// 42. Добавьте обработчик submit для .form. Отмените стандартную отправку формы через
// event.preventDefault().
// 43. После preventDefault выведите значение .email-input в консоль.

const form = document.querySelector(".form");
const emailInput = document.querySelector(".email-input");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(emailInput.value);
});

// 44. Ответьте своими словами: что именно отменяет preventDefault? Отменяет ли он выполнение
// вашего JS-кода?
// нет, он отменяет действия браузера по умолчанию как обновление страницы или переход на другой URL

// Часть 8. Функции + события
// 45. Создайте отдельную функцию showInputValue, которая выводит значение .name-input.
// Вызывайте её при клике на .show-button.
function showInputValue() {
  console.log(nameInput.value);
}

showButton.addEventListener("click", showInputValue);

// 46. Измените showInputValue так, чтобы она возвращала значение input через return. В
// обработчике клика сохраните результат в переменную и выведите её.

function showInputValue1() {
  return nameInput.value;
}

showButton.addEventListener("click", () => {
  const result = showInputValue1();
  console.log(result);
});

// 47. Создайте функцию isInputEmpty(value), которая возвращает true, если строка пустая. При
// клике на кнопку проверяйте поле и выводите «Введите имя» или введённое имя.
function isInputEmpty(value) {
  return value === "";
}

showButton.addEventListener("click", () => {
  const inputValue = showInputValue1();
  if (isInputEmpty(inputValue)) {
    console.log("Введите имя");
  } else {
    console.log(inputValue);
  }
});

// 48. Создайте функцию toggleButton(button), которая принимает HTML-элемент и переключает у
// него класс active. Используйте её внутри click-обработчика.
function toggleButton(button) {
  button.classList.toggle("active");
}

colorButton.addEventListener("click", toggleButton);

// 49. Есть несколько карточек. Для каждой через forEach добавьте обработчик click. При клике
// добавляйте класс selected только той карточке, на которую нажали.
// <div class="card">Phone</div>
// <div class="card">Laptop</div>
// <div class="card">Tablet</div>
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((item) => item.classList.remove("selected"));
    card.classList.add("selected");
  });
});

// 50. Решите предыдущую задачу, используя event.target вместо переменной card внутри callback.

const cards1 = document.querySelectorAll(".card");

cards1.forEach((card) => {
  card.addEventListener("click", (event) => {
    cards1.forEach((item) => item.classList.remove("selected"));
    event.target.classList.add("selected");
  });
});

// Часть 9. Задачи чуть сложнее

// 51. Создайте массив товаров. С помощью filter получите доступные товары, map - их названия, а
// затем forEach - выведите каждое название.
const products11 = [
  { name: "Phone", price: 300000, isAvailable: true },
  { name: "Laptop", price: 500000, isAvailable: false },
  { name: "Mouse", price: 15000, isAvailable: true },
  { name: "Tablet", price: 200000, isAvailable: true },
];

const availableProductsNames11 = products11
  .filter((product) => product.isAvailable)
  .map((product) => product.name);

availableProductsNames11.forEach((name) => {
  console.log(name);
});

// 52. Создайте функцию getAvailableProductNames(products), которая принимает массив товаров и
// возвращает массив названий только доступных товаров. Используйте filter + map.
const products22 = [
  { name: "Phone", price: 300000, isAvailable: true },
  { name: "Laptop", price: 500000, isAvailable: false },
  { name: "Mouse", price: 15000, isAvailable: true },
  { name: "Tablet", price: 200000, isAvailable: true },
];

function getAvailableProductNames(products) {
  return products
    .filter((product) => product.isAvailable)
    .map((product) => product.name);
}

const availableNames = getAvailableProductNames(products22);
console.log(availableNames);

// 53. Создайте функцию getExpensiveProducts(products, minPrice), которая возвращает товары
// дороже minPrice.
const products33 = [
  { name: "Phone", price: 300000, isAvailable: true },
  { name: "Laptop", price: 500000, isAvailable: false },
  { name: "Mouse", price: 15000, isAvailable: true },
  { name: "Tablet", price: 200000, isAvailable: true },
];

function getExpensiveProducts(products, minPrice) {
  return products.filter((product) => product.price >= minPrice);
}

const expensiveProducts33 = getExpensiveProducts(products33, 100000);
console.log(expensiveProducts33);

// 54. Создайте кнопку «Показать дорогие товары». По клику вызывайте getExpensiveProducts и
// выводите результат в консоль.

const expensiveProductsButton = document.querySelector(
  ".expensive-products-button",
);

expensiveProductsButton.addEventListener("click", () => {
  const result = getExpensiveProducts(products33, 100000);
  console.log(result);
});

// 55. Создайте input для минимальной цены и кнопку. Пользователь вводит цену, нажимает
// кнопку, после чего в консоли отображаются товары дороже введённой цены. Не забудьте, что
// input.value возвращает строку.

const products44 = [
  { name: "Phone", price: 300000, isAvailable: true },
  { name: "Laptop", price: 500000, isAvailable: false },
  { name: "Mouse", price: 15000, isAvailable: true },
  { name: "Tablet", price: 200000, isAvailable: true },
];

const minPriceInput = document.querySelector(".min-price-input");
const minPriceButton = document.querySelector(".min-price-button");

minPriceButton.addEventListener("click", () => {
  const minPrice = Number(minPriceInput.value);
  const expensiveProducts44 = products44.filter(
    (product) => product.price > minPrice,
  );
  console.log(expensiveProducts44);
});

// 56. Усложнение: если поле цены пустое, не выполняйте filter, а выведите сообщение об ошибке.

const products55 = [
  { name: "Phone", price: 300000, isAvailable: true },
  { name: "Laptop", price: 500000, isAvailable: false },
  { name: "Mouse", price: 15000, isAvailable: true },
  { name: "Tablet", price: 200000, isAvailable: true },
];

const minPriceInput1 = document.querySelector(".min-price-input");
const minPriceButton1 = document.querySelector(".min-price-button");

minPriceButton1.addEventListener("click", () => {
  if (minPriceInput1.value.trim() === "") {
    alert("введите цену в поле ввода");
    return;
  }
  const minPrice = Number(minPriceInput1.value);
  const expensiveProducts55 = products55.filter(
    (product) => product.price > minPrice,
  );
  console.log(expensiveProducts55);
});

// Часть 10. Code review
// 57. Найдите ошибку.
// const button = document.querySelector('.button');
// function showMessage() {
// console.log('Hello');
// }
// button.addEventListener('click', showMessage());

// const button = document.querySelector(".button");
// function showMessage22() {
//   console.log("Hello");
// }
// button.addEventListener("click", showMessage22); // лишние скобки  принудительно вызовут функцию

// 58. Почему этот код не выводит удвоенные числа?
// const numbers = [1, 2, 3];
// const result = numbers.map((number) => {
// number * 2;
// });
// console.log(result);

const numbers22 = [1, 2, 3];
const result22 = numbers22.map((number) => {
  return number * 2; // return нужен чтобы сохранить новый массив
});
console.log(result22);

// 59. Что здесь не так, если нужно получить только совершеннолетних?
// const adults = users.map((user) => {
// return user.age >= 18;
// });

const adults = users.filter((user) => {
  return user.age >= 18;
}); // когда ставим условие нужен фильтр

// 60. Что произойдёт? Почему?
// function showName() {
// const name = 'Amina';
// }
// showName();
// console.log(name);

// ошибка потому что переменная внутри функции и при выводе в консоль он просто не найдет name
// а функция просто сработает под капотом, мы ничего не увидим

// 61. Найдите две проблемы.
// const button = document.querySelector('.save-button');
// button.addEventListener('click', () => {
// const message = 'Saved';
// });
// console.log(message);

// консоль снаружи не видит переменную локальную
// не знаю, то что консоль раньше слушателя событий сработает?

// 62. Код работает, но можно ли сделать его логичнее? Перепишите с помощью map.
// const numbers = [1, 2, 3];
// const doubled = [];
// numbers.forEach((number) => {
// doubled.push(number * 2);
// });

const numbers55 = [1, 2, 3];
const doubled55 = numbers55.map((number) => {
  return number * 2;
});
console.log(doubled55);

// Часть 11. Итоговая мини-задача
// Создайте небольшую страницу со списком товаров и фильтром по цене.
// Требования:
// 1. Есть массив объектов products с name, price и isAvailable.
// 2. Есть input для минимальной цены.
// 3. Есть кнопка «Показать товары».
// 4. По клику на кнопку получить значение input.
// 5. Преобразовать значение input в number.
// 6. Через filter оставить доступные товары дороже введённой цены.
// 7. Через map получить массив их названий.
// 8. Вывести результат в console.log.
// 9. Логику фильтрации вынести в отдельную функцию.
// 10. Обработчик клика также можно вынести в отдельную функцию.
// Дополнительно: если поле пустое, вывести «Введите минимальную цену» и не выполнять фильтрацию.
// Главная цель: научиться видеть функцию не только как отдельную тему, а как основной строительный
// блок JavaScript: функции вызываются вручную, передаются в forEach/map/filter, используются как
// обработчики событий и помогают разделять большую задачу на маленькие понятные части.

const minPriceInput66 = document.querySelector(".min-price-input");
const showProductsButton66 = document.querySelector(".min-price-button");

const products66 = [
  { name: "Huawei", price: 50000, isAvailable: true },
  { name: "Oppo", price: 120000, isAvailable: false },
  { name: "Samsung", price: 170000, isAvailable: true },
  { name: "IPhone", price: 250000, isAvailable: false },
];

const filteredProductsNames = products66
  .filter((product) => product.isAvailable)
  .map((product) => product.name);

console.log(filteredProductsNames);

function filteredProductsNames66(price) {
  return products66
    .filter((product) => product.isAvailable && product.price >= price)
    .map((product) => product.name);
}

function inputValue66() {
  const inputValue66 = minPriceInput66.value;
  if (inputValue66 === "") {
    console.log("Введите минимальную цену");
    return;
  } else {
    const inputPrice = +inputValue66;
    const result = filteredProductsNames66(inputPrice);
    console.log(result);
  }
}

showProductsButton66.addEventListener("click", inputValue66);
