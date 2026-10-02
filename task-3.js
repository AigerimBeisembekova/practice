// Часть 1. forEach - закрепление
// 1. Есть массив. С помощью forEach выведите каждый элемент в консоль.
const fruits = ["apple", "banana", "orange"];

fruits.forEach((fruit) => {
  console.log(fruit);
});

// 2. Выведите каждое число, умноженное на 2.
const numbers = [2, 4, 6, 8];

numbers.forEach((number) => {
  console.log(number * 2);
});

// 3. Выведите строки вида «Привет, Amina», «Привет, Dana» и т.д.
const names = ["Amina", "Dana", "Aruzhan"];

names.forEach((name) => {
  console.log(`Привет, ${name}`);
});

// 4. Используйте второй параметр forEach - index - и выведите индекс и значение каждого
// элемента.
const colors = ["red", "green", "blue"];

colors.forEach((color, index) => {
  console.log(index, color);
});

// 5. Выведите только элементы с индексом меньше 3.
const numbers2 = [10, 20, 30, 40, 50];

numbers2.slice(0, 3).forEach((number) => console.log(number));
numbers2.slice(2, 5).forEach((number) => console.log(number));
numbers2.slice(1, 4).forEach((number) => console.log(number));

// 6. Для каждого возраста выведите «Совершеннолетний» или «Несовершеннолетний».
const ages = [15, 18, 20, 16, 30];

ages.forEach((age) => {
  if (age >= 18) {
    console.log("Совершеннолетний");
  } else {
    console.log("Несовершеннолетний");
  }
});

// 7. Для каждого товара выведите строку вида «Phone - 300000».
const products = [
  { name: "Phone", price: 300000 },
  { name: "Laptop", price: 500000 },
  { name: "Mouse", price: 15000 },
];

products.forEach((product) => {
  console.log(`${product.name} - ${product.price}`);
});

// 8. С помощью forEach выведите только названия товаров дороже 100000.

products.forEach((product) => {
  if (product.price > 100000) {
    console.log(product.name);
  }
});

// Часть 2. Цикл for
// 9. С помощью for выведите числа от 0 до 4.
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 10. С помощью for выведите числа от 1 до 5.

for (let i = 1; i < 6; i++) {
  console.log(i);
}

// 11. С помощью for выведите только чётные числа от 0 до 10.

for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 12. С помощью for выведите числа от 5 до 1 в обратном порядке.

for (let i = 5; i > 0; i--) {
  console.log(i);
}

// 13. Переберите массив с помощью for и выведите каждый фрукт.
const fruits2 = ["apple", "banana", "orange"];

for (let i = 0; i < fruits2.length; i++) {
  console.log(fruits2[i]);
}

// 14. С помощью for выведите каждый элемент массива вместе с его индексом.
const colors2 = ["red", "green", "blue"];

for (let i = 0; i < colors2.length; i++) {
  console.log(i, colors2[i]);
}

// JavaScript - дополнительное домашнее задание | 1
// 15. С помощью for найдите сумму всех чисел. Используйте отдельную переменную total.
const numbers3 = [10, 20, 30, 40];

let total = 0;

for (let i = 0; i < numbers3.length; i++) {
  total += numbers3[i];
}

console.log(total);

// 16. С помощью for посчитайте, сколько в массиве чисел больше 10.
const numbers4 = [3, 15, 7, 20, 25, 2];

let count = 0;

for (let i = 0; i < numbers4.length; i++) {
  if (numbers4[i] > 10) {
    count++;
  }
}

console.log(count);

// 17. С помощью for выведите названия только доступных товаров.
const products4 = [
  { name: "Phone", isAvailable: true },
  { name: "Laptop", isAvailable: false },
  { name: "Mouse", isAvailable: true },
];

for (let i = 0; i < products4.length; i++) {
  if (products4[i].isAvailable) {
    console.log(products4[i].name);
  }
}

// 18. Есть карточки на странице. Найдите их через querySelectorAll и с помощью for добавьте всем
// класс active.
const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
  cards[i].classList.add("active");
}

// Часть 3. for или forEach?
// 19. Для каждой задачи ниже напишите, какой вариант вы бы выбрали - for или forEach - и
// коротко объясните почему:
// а) вывести каждый элемент массива;
// и то, и другое можно. forEach поменьше кода более читабельно

// б) пройти только по каждому второму элементу;
// for потому что легче указать шаг итерации, forEach будет полюбому проходить по каждому элементу

// в) перебрать массив в обратном порядке;
// for потому что можно начать с конца массива и идти к началу

// г) просто добавить класс каждой карточке;
// forEach потому что по каждому элементу пройдет и добавит класс

// д) остановить перебор, когда найден нужный элемент.
// for потому что можно использовать break

// 20. Перепишите этот код с forEach на обычный for.
const numbers6 = [1, 2, 3];
numbers6.forEach((number) => {
  console.log(number);
});

for (let i = 0; i < numbers6.length; i++) {
  console.log(numbers6[i]);
}

// 21. Перепишите этот код с for на forEach.
const fruits3 = ["apple", "banana", "orange"];
for (let i = 0; i < fruits3.length; i++) {
  console.log(fruits3[i]);
}

fruits3.forEach((fruit) => {
  console.log(fruit);
});

// Часть 4. while - самостоятельное знакомство
// Подсказка: цикл while выполняет код, пока условие равно true. Не забудьте изменять переменную
// внутри цикла, иначе можно получить бесконечный цикл.
// 22. Перед запуском предположите, что выведет код. Затем проверьте себя.
// let i = 0;
// while (i < 3) {
// console.log(i);
// i++;
// }
// 0,1,2

// 23. Самостоятельно напишите while, который выводит числа от 1 до 5.

let i = 1;
while (i < 6) {
  console.log(i);
  i++;
}

// 24. Напишите while, который выводит числа от 5 до 1.

let j = 5;
while (j > 0) {
  console.log(j);
  j--;
}

// 25. Исправьте код так, чтобы цикл не был бесконечным.
let count1 = 0;
while (count1 < 5) {
  console.log(count1);
  count1++;
}

// 26. Ответьте своими словами: чем while отличается от for? В какой ситуации, по вашему мнению,
// while может быть удобнее?
// for больше подходит, когда изестно количество итераций, например пройтись по массиву от начала до конца
// while больше подходит, когда количество итерация неизвестно, например пока какое то условие не станет true/false

// Часть 5. Область видимости (scope)
// 27. Что произойдёт? Сначала ответьте без запуска.
if (true) {
  const name = "Amina";
}
console.log(name); // Будет ошибка, потому что переменная name объявлена внутри блока if и недоступна снаружи
// 28. Будет ли ошибка? Почему?
const city = "Astana";
if (true) {
  console.log(city);
} // Ошибки не будет, потому что переменная city объявлена в глобальной области видимости и доступна внутри блока if

// 29. Что выведется и почему?
let score = 10;
if (true) {
  let score = 20;
}
console.log(score); //  будет 10, потому что консоль снаружи блока if

// 30. Что выведется и почему?
let score1 = 10;
if (true) {
  score1 = 20;
}
console.log(score1);

// 31. Что произойдёт после завершения цикла?
for (let i = 0; i < 3; i++) {
  console.log(i);
}
console.log(i); //0,1,2 потом ошибка потому что вторая консоль за пределами for

// 32. Объясните разницу между двумя примерами: в одном мы создаём новую переменную внутри
// блока, в другом изменяем внешнюю.

// 33. Что выведется?
const message = "Outside";
if (true) {
  const message = "Inside";
  console.log(message);
}
console.log(message); // inside, outside
// потому что сначала внутри блока сработает консоль, а потом снаружи тоже сработает вторая консоль

// Часть 6. map
// 34. С помощью map получите новый массив [2, 4, 6, 8].
const numbers7 = [1, 2, 3, 4];

const doubledNumbers = numbers7.map((number) => number * 2);
console.log(doubledNumbers);

// 35. С помощью map получите массив имён пользователей.
const users = [
  { name: "Amina", age: 20 },
  { name: "Dana", age: 25 },
  { name: "Aruzhan", age: 19 },
];

const username = users.map((user) => user.name);
console.log(username);

// 36. С помощью map получите массив строк вида «Phone - 300000».
const products7 = [
  { name: "Phone", price: 300000 },
  { name: "Laptop", price: 500000 },
];

const produstStrings = products7.map((product) => {
  return `${product.name} - ${product.price}`;
});

console.log(produstStrings);

// 37. С помощью map увеличьте каждое число на 10.
const numbers8 = [5, 10, 15];

const numersIncreased = numbers8.map((number) => console.log(number + 10));

// 38. Найдите ошибку. Почему результат получается неправильным?
// const numbers = [1, 2, 3];
// const result = numbers.map((number) => {
// number * 2;
// });
// console.log(result);
// нету return, поэтому ничего не происходит

const numbers9 = [1, 2, 3];
const result = numbers9.map((number) => {
  return number * 2;
});
console.log(result);

// Часть 7. filter
// 39. С помощью filter оставьте только числа больше 10.
const numbers10 = [5, 10, 15, 20, 3];

numbers10.filter((number) => {
  if (number > 10) {
    console.log(number);
  }
});

// 40. Оставьте только совершеннолетних пользователей.
const users1 = [
  { name: "Amina", age: 17 },
  { name: "Dana", age: 25 },
  { name: "Ali", age: 16 },
  { name: "Aruzhan", age: 20 },
];

const adults = users1.filter((user) => user.age >= 18);
console.log(adults);

// 41. Оставьте только доступные товары.
const products5 = [
  { name: "Phone", isAvailable: true },
  { name: "Laptop", isAvailable: false },
  { name: "Mouse", isAvailable: true },
];

const availableProducts = products5.filter((product) => product.isAvailable);
console.log(availableProducts);

// 42. Оставьте только товары дороже 100000.
const products6 = [
  { name: "Phone", price: 300000 },
  { name: "Laptop", price: 500000 },
  { name: "Mouse", price: 15000 },
];

const expensiveProducts = products6.filter((product) => product.price > 100000);
console.log(expensiveProducts);

// 43. Объясните, почему для задачи ниже лучше map, а не filter: «получить новый массив, где
// каждое число умножено на 2».

// потому что мы используем map когда нужно взаимодействовать с каждым элементом массива и получить новый
// в map у нас будет столько же элементов как и в исходном массиве
// а фильтр фильтрует по какому то условию и возвращает новый массив

// Часть 8. map + filter вместе
// 44. Сначала оставьте только числа больше 10, а затем умножьте каждое оставшееся число на 2.
const numbers11 = [5, 10, 15, 20, 25];

const changedNumbers = numbers11
  .filter((number) => number > 10)
  .map((number) => number * 2);
console.log(changedNumbers);

// 45. Сначала оставьте только доступные товары, затем получите массив только их названий.
const products8 = [
  { name: "Phone", isAvailable: true },
  { name: "Laptop", isAvailable: false },
  { name: "Mouse", isAvailable: true },
];

const availibleProductsNames = products8
  .filter((product) => product.isAvailable)
  .map((product) => product.name);
console.log(availibleProductsNames);

// 46. Сначала оставьте совершеннолетних пользователей, затем получите массив их имён.
const users3 = [
  { name: "Amina", age: 17 },
  { name: "Dana", age: 25 },
  { name: "Ali", age: 16 },
  { name: "Aruzhan", age: 20 },
];

const adultsNames = users3.filter((user) => {
  return user.age >= 18;
});
users3.map((user) => {
  return user.name;
});

console.log(adultsNames);

// Часть 9. Code review
// 47. Задача - вывести каждый элемент массива отдельно. Найдите логическую ошибку.
// const numbers = [1, 2, 3];
// numbers.forEach((number) => {
// console.log(numbers);
// });

const numbers12 = [1, 2, 3];
numbers12.forEach((number) => {
  console.log(number);
});

// 48. Задача - получить новый массив с удвоенными числами. Что нужно исправить?
// const numbers = [1, 2, 3];
// const result = numbers.filter((number) => {
// return number * 2;
// });

const numbers13 = [1, 2, 3];
const result1 = numbers13.map((number) => {
  return number * 2;
});
console.log(result1);

// 49. Что произойдёт? Объясните проблему.
for (let i = 0; i < 3; i++) {
  const message = "Hello";
}
console.log(message);
// ошибка потому что консоль не видит переменную внутри блока

// 50. Что не так с условием цикла?
// const numbers = [10, 20, 30];
// for (let i = 0; i <= numbers.length; i++) {
// console.log(numbers[i]);
// }

const numbers14 = [10, 20, 30];
for (let i = 0; i < numbers14.length; i++) {
  console.log(numbers14[i]);
}

// 51. Почему этот while опасен?
// let k = 0;
// while (k < 5) {
// console.log(k);
// }
// он бесконечно будет давать 0
// нужно добавить i++

let k = 0;
while (k < 5) {
  k++;
  console.log(k);
}

// 52. Задача - оставить только доступные товары. Исправьте код.
// const products = [
// { name: 'Phone', isAvailable: true },
// { name: 'Laptop', isAvailable: false }
// ];
// const result = products.map((product) => {
// return product.isAvailable;
// });

const products9 = [
  { name: "Phone", isAvailable: true },
  { name: "Laptop", isAvailable: false },
];
const result2 = products9.filter((product) => {
  return product.isAvailable;
});
console.log(result2);

// Часть 10. Итоговая задача
// 53. Работаем с одним массивом. Выполните все пункты по очереди.
const products10 = [
  { name: "Phone", price: 300000, isAvailable: true },
  { name: "Laptop", price: 500000, isAvailable: false },
  { name: "Mouse", price: 15000, isAvailable: true },
  { name: "Tablet", price: 200000, isAvailable: true },
];
// а) С помощью forEach выведите название каждого товара.

products10.forEach((product) => {
  console.log(product.name);
});

// б) С помощью for выведите название и индекс каждого товара.

for (let i = 0; i < products10.length; i++) {
  console.log(i, products10[i].name);
}

// в) С помощью filter получите только доступные товары.

const availibaleProducts2 = products10.filter((product) => product.isAvailable);
console.log(availibaleProducts2);

// г) С помощью filter получите только товары дороже 100000.

const expensiveProducts2 = products10.filter(
  (product) => product.price > 100000,
);
console.log(expensiveProducts2);

// д) С помощью map получите массив только названий товаров.

const productNames2 = products10.map((product) => product.name);
console.log(productNames2);

// е) Сначала отфильтруйте доступные товары, затем через map получите только их названия.

const availableProductsNames2 = products10
  .filter((product) => {
    return product.isAvailable;
  })
  .map((product) => {
    return product.name;
  });
console.log(availableProductsNames2);

// ж) Объясните, чем отличаются результаты работы forEach, map и filter.
// forEach проходит по каждому элементу массива и выпоняет функцию. но не возвращает новый массив
// map проходит по каждому элементу массива и возвращает новый массив с измененными элементами
// filter проходит по каждому элементу массива и просто фильтрует по условию. затем возвращает новый массив
// с элементами которые подходят под условие
