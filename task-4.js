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
const names = ["Aigerim", "Mihrimah", "Nairiyat"];
names.forEach(greet);

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
  if(age >= 18) {
    return "Доступ разрешён";
  }else{
    return "Доступ запрещён";
  }
}
console.log(checkAge(20));
console.log(checkAge(14));

// 7. Создайте функцию greet с параметром по умолчанию name = 'Гость'. Проверьте вызов
// функции с аргументом и без аргумента.
function greet(name = "Гость") {
  console.log()
}


// 8. Объясните своими словами разницу между параметром и аргументом. Приведите
// собственный пример функции.
// Часть 2. Виды функций
// 9. Перепишите Function Declaration в Function Expression.
// function showMessage() {
// console.log('Hello');
// }
// 10. Перепишите эту же функцию в Arrow Function.
// 11. Перепишите функцию ниже в короткую стрелочную функцию с неявным return.
// function double(number) {
// return number * 2;
// }
// 12. Не запускайте код сразу. Что произойдёт и почему?
// sayHello();
// function sayHello() {
// console.log('Hello');
// }
// 13. Не запускайте код сразу. Что произойдёт и почему?
// sayHello();
// const sayHello = function () {
// JavaScript - дополнительное ДЗ: функции и события | 1
// console.log('Hello');
// };
// 14. Напишите три одинаковые по логике функции sum(a, b): Function Declaration, Function
// Expression и Arrow Function.
// Часть 3. return и область видимости функции
// 15. Что выведется? Почему?
// function sum(a, b) {
// console.log(a + b);
// }
// const result = sum(2, 3);
// console.log(result);
// 16. Исправьте функцию так, чтобы result получил число 5.
// function sum(a, b) {
// console.log(a + b);
// }
// const result = sum(2, 3);
// 17. Что выведется и почему?
// const message = 'Outside';
// function showMessage() {
// const message = 'Inside';
// console.log(message);
// }
// showMessage();
// console.log(message);
// 18. Найдите проблему.
// function createUser() {
// const user = {
// name: 'Amina',
// age: 20
// };
// }
// console.log(user);
// 19. Измените функцию createUser так, чтобы созданный объект можно было сохранить в
// переменную снаружи функции.
// Часть 4. Callback-функции
// 20. Объясните, почему здесь передаётся showNumber без круглых скобок.
// const numbers = [1, 2, 3];
// function showNumber(number) {
// console.log(number);
// }
// numbers.forEach(showNumber);
// JavaScript - дополнительное ДЗ: функции и события | 2
// 21. Что не так в этом коде?
// const numbers = [1, 2, 3];
// function showNumber(number) {
// console.log(number);
// }
// numbers.forEach(showNumber());
// 22. Создайте отдельную функцию showProductName(product), которая выводит название товара.
// Передайте её в forEach.
// const products = [
// { name: 'Phone', price: 300000 },
// { name: 'Laptop', price: 500000 },
// { name: 'Mouse', price: 15000 }
// ];
// 23. Создайте функцию getProductName(product), которая возвращает product.name. Передайте
// её в map и получите массив названий товаров.
// 24. Создайте функцию isExpensive(product), которая возвращает true, если цена больше 100000.
// Передайте её в filter.
// Часть 5. map, filter и функции
// 25. С помощью map получите массив цен, увеличенных на 10%.
// const prices = [1000, 2000, 5000];
// 26. С помощью filter оставьте только совершеннолетних пользователей.
// const users = [
// { name: 'Amina', age: 17 },
// { name: 'Dana', age: 25 },
// { name: 'Ali', age: 16 },
// { name: 'Aruzhan', age: 20 }
// ];
// 27. Сначала filter: оставьте доступные товары. Затем map: получите только их названия.
// const products = [
// { name: 'Phone', price: 300000, isAvailable: true },
// { name: 'Laptop', price: 500000, isAvailable: false },
// { name: 'Mouse', price: 15000, isAvailable: true }
// ];
// 28. Найдите логическую ошибку. Задача - получить только товары дороже 100000.
// const result = products.map((product) => {
// return product.price > 100000;
// });
// 29. Найдите ошибку. Задача - получить удвоенные числа.
// const numbers = [1, 2, 3];
// const result = numbers.map((number) => {
// number * 2;
// });
// 30. Объясните разницу между результатами map и filter на одном и том же массиве.
// Часть 6. addEventListener - база
// JavaScript - дополнительное ДЗ: функции и события | 3
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
// 32. Вынесите обработчик клика в отдельную функцию showMessage и передайте функцию в
// addEventListener.
// 33. Объясните разницу между этими двумя вариантами и укажите, какой правильный.
// button.addEventListener('click', showMessage);
// button.addEventListener('click', showMessage());
// 34. При клике на .color-button переключайте класс active через classList.toggle.
// 35. При наведении мыши на .title выводите в консоль именно textContent заголовка, а не текст,
// написанный вручную.
// 36. Добавьте событие mouseleave для заголовка и выводите «Курсор ушёл».
// 37. На поле .name-input повесьте событие input и выводите в консоль текущее значение поля.
// 38. Попробуйте использовать event.target.value вместо заранее сохранённой переменной input.
// Часть 7. event и preventDefault
// 39. Что такое event в этом коде? Что, по вашему мнению, в нём хранится?
// button.addEventListener('click', (event) => {
// console.log(event);
// });
// 40. Выведите event.target при клике на кнопку. Посмотрите в консоли, какой HTML-элемент вы
// получили.
// 41. Добавьте обработчик клика на ссылку .google-link. Используйте event.preventDefault(), чтобы
// переход на Google не произошёл, и выведите «Переход отменён».
// 42. Добавьте обработчик submit для .form. Отмените стандартную отправку формы через
// event.preventDefault().
// 43. После preventDefault выведите значение .email-input в консоль.
// 44. Ответьте своими словами: что именно отменяет preventDefault? Отменяет ли он выполнение
// вашего JS-кода?
// Часть 8. Функции + события
// JavaScript - дополнительное ДЗ: функции и события | 4
// 45. Создайте отдельную функцию showInputValue, которая выводит значение .name-input.
// Вызывайте её при клике на .show-button.
// 46. Измените showInputValue так, чтобы она возвращала значение input через return. В
// обработчике клика сохраните результат в переменную и выведите её.
// 47. Создайте функцию isInputEmpty(value), которая возвращает true, если строка пустая. При
// клике на кнопку проверяйте поле и выводите «Введите имя» или введённое имя.
// 48. Создайте функцию toggleButton(button), которая принимает HTML-элемент и переключает у
// него класс active. Используйте её внутри click-обработчика.
// 49. Есть несколько карточек. Для каждой через forEach добавьте обработчик click. При клике
// добавляйте класс selected только той карточке, на которую нажали.
// <div class="card">Phone</div>
// <div class="card">Laptop</div>
// <div class="card">Tablet</div>
// 50. Решите предыдущую задачу, используя event.target вместо переменной card внутри callback.
// Часть 9. Задачи чуть сложнее
// 51. Создайте массив товаров. С помощью filter получите доступные товары, map - их названия, а
// затем forEach - выведите каждое название.
// const products = [
// { name: 'Phone', price: 300000, isAvailable: true },
// { name: 'Laptop', price: 500000, isAvailable: false },
// { name: 'Mouse', price: 15000, isAvailable: true },
// { name: 'Tablet', price: 200000, isAvailable: true }
// ];
// 52. Создайте функцию getAvailableProductNames(products), которая принимает массив товаров и
// возвращает массив названий только доступных товаров. Используйте filter + map.
// 53. Создайте функцию getExpensiveProducts(products, minPrice), которая возвращает товары
// дороже minPrice.
// 54. Создайте кнопку «Показать дорогие товары». По клику вызывайте getExpensiveProducts и
// выводите результат в консоль.
// 55. Создайте input для минимальной цены и кнопку. Пользователь вводит цену, нажимает
// кнопку, после чего в консоли отображаются товары дороже введённой цены. Не забудьте, что
// input.value возвращает строку.
// 56. Усложнение: если поле цены пустое, не выполняйте filter, а выведите сообщение об ошибке.
// Часть 10. Code review
// 57. Найдите ошибку.
// const button = document.querySelector('.button');
// function showMessage() {
// console.log('Hello');
// }
// button.addEventListener('click', showMessage());
// 58. Почему этот код не выводит удвоенные числа?
// JavaScript - дополнительное ДЗ: функции и события | 5
// const numbers = [1, 2, 3];
// const result = numbers.map((number) => {
// number * 2;
// });
// console.log(result);
// 59. Что здесь не так, если нужно получить только совершеннолетних?
// const adults = users.map((user) => {
// return user.age >= 18;
// });
// 60. Что произойдёт? Почему?
// function showName() {
// const name = 'Amina';
// }
// showName();
// console.log(name);
// 61. Найдите две проблемы.
// const button = document.querySelector('.save-button');
// button.addEventListener('click', () => {
// const message = 'Saved';
// });
// console.log(message);
// 62. Код работает, но можно ли сделать его логичнее? Перепишите с помощью map.
// const numbers = [1, 2, 3];
// const doubled = [];
// numbers.forEach((number) => {
// doubled.push(number * 2);
// });
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
// JavaScript - дополнительное ДЗ: функции и события | 6
// Главная цель: научиться видеть функцию не только как отдельную тему, а как основной строительный
// блок JavaScript: функции вызываются вручную, передаются в forEach/map/filter, используются как
// обработчики событий и помогают разделять большую задачу на маленькие понятные части.
// JavaScript - дополнительное ДЗ: функции и события | 7
