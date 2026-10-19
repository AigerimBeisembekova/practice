// Тема: формы, события и модальные окна в JavaScript

/* Цель: закрепить работу с HTML-формами и постепенно собрать полный сценарий:
обработка submit, получение данных, FormData, Object.fromEntries(), проверки,
работа с объектом пользователя и управление модальным окном.*/

/* 1. Форма обратной связи
Создайте форму с полями «Имя», «Email» и «Сообщение» и кнопкой «Отправить».
Используйте label, name, подходящие type, required, minlength и placeholder. В
JavaScript найдите форму и обработайте событие submit. Страница при отправке не
должна перезагружаться. После отправки выведите в консоль значения всех трёх
полей. */

const formSix = document.querySelector("#formSix");

formSix.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formSix);
  console.log(formData.get("name"));
  console.log(formData.get("email"));
  console.log(formData.get("message"));
    formSix.reset();
});

/* 2. Проверка двух значений
Создайте форму изменения пароля с двумя полями: «Новый пароль» и «Повторите
пароль». Оба поля должны быть обязательными и содержать минимум 6 символов.
После отправки формы получите введённые значения и сравните их. Если пароли
не совпадают - покажите пользователю сообщение через alert и прекратите
дальнейшее выполнение функции. Если совпадают - выведите сообщение об
успешной смене пароля в консоль.*/

const passwordCheck = document.querySelector("#password-practice");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm-password");


passwordCheck.addEventListener("submit", (event) => {
  event.preventDefault();
  if (password.value !== confirmPassword.value) {
    alert("Пароли не совпадают");
    return;
  } else {
    console.log("Успешная смена пароля");
  }
});

/* 3. Собираем данные через FormData
Создайте небольшую анкету с полями «Имя», «Фамилия», «Email» и «Дата
рождения». При отправке формы соберите введённые данные с помощью FormData.
Преобразуйте полученные данные в обычный JavaScript-объект с помощью
Object.fromEntries() и выведите объект в консоль. Проверьте, что названия свойств
получившегося объекта соответствуют атрибутам name элементов формы.*/

const formSeven = document.querySelector("#formSeven");

formSeven.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formSeven);
  const formSevenValues = Object.fromEntries(formData);
  formSeven.reset();
  console.log(formSevenValues);
});

/* 4. Регистрация пользователя
Создайте форму регистрации с полями: имя, логин, email, пароль и повтор пароля.
Добавьте HTML-валидацию. После отправки соберите данные формы в объект.
Проверьте совпадение паролей. Если они не совпадают - сообщите об ошибке и
остановите выполнение. Если пароли совпадают, удалите из объекта password и
repeatPassword, добавьте свойство createdOn с текущей датой и временем и
выведите готовый объект пользователя в консоль.*/

const registrationFormPractice = document.querySelector(
  "#registrationFormPractice",
);
const password1 = document.querySelector(".password-1");
const confirmPassword1 = document.querySelector(".confirm-password-1");


registrationFormPractice.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(registrationFormPractice);
  const registrationFormPracticeValues = Object.fromEntries(formData);
  if (password1.value !== confirmPassword1.value) {
    alert("Пароли не совпадают");
    return;
  } else {
    delete registrationFormPracticeValues.password;
    delete registrationFormPracticeValues["confirm-password"];
    registrationFormPracticeValues.createdOn = new Date();
    registrationFormPractice.reset();
    console.log(registrationFormPracticeValues);
  }
});

/* 5. Форма внутри модального окна
Создайте кнопку «Оставить заявку». При нажатии должна открываться модалка с
формой, содержащей имя, телефон и email. Модальное окно должно закрываться
по крестику и по нажатию на затемнённую область вокруг него. Открытие и
закрытие реализуйте через добавление и удаление CSS-класса. При отправке
формы страница не должна перезагружаться. Соберите данные через FormData,
преобразуйте их в объект и выведите результат в консоль. После успешной
отправки закройте модальное окно.*/

const modalOpenBtn = document.querySelector(".modal-open-btn");
const modalContainer = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal-close");
const modalOverlay = document.querySelector(".modal-overlay");
const modalForm = document.querySelector(".registration-form");

modalOpenBtn.addEventListener("click", () => {
  modalContainer.classList.add("is-open");
});

modalCloseBtn.addEventListener("click", () => {
  modalContainer.classList.remove("is-open");
});

modalOverlay.addEventListener("click", () => {
  modalContainer.classList.remove("is-open");
});

modalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(modalForm);
  const modalFormValues = Object.fromEntries(formData);
  console.log(modalFormValues);
  modalForm.reset();
  modalContainer.classList.remove("is-open");
});

/* 6. Итоговое задание - регистрация на мероприятие
Создайте кнопку «Зарегистрироваться на мероприятие». По нажатию
открывается модальное окно с формой.
Форма должна содержать: имя, фамилию, email, дату рождения, логин, пароль и
повтор пароля.
Добавьте подходящую HTML-валидацию: обязательные поля, правильный тип
email, минимальную длину имени, логина и пароля и другие уже знакомые вам
ограничения.
Модальное окно должно открываться по кнопке и закрываться по крестику или
клику на затемнённую область.
При отправке формы отмените стандартное поведение браузера, получите
данные через FormData и преобразуйте их через Object.fromEntries() в обычный
объект.
Проверьте совпадение паролей. При ошибке покажите сообщение пользователю
и остановите дальнейшее выполнение. При успешной проверке удалите из
объекта пароль и повтор пароля, добавьте createdOn с текущей датой и
временем.
В результате в консоли должен появиться готовый объект зарегистрированного
пользователя без паролей. После успешной регистрации очистите форму и
закройте модальное окно.
Подсказка по логике ДЗ: задания 1-5 тренируют отдельные части. В задании 6
нужно самостоятельно соединить их в один полный сценарий работы формы.*/

const modal2OpenBtn2 = document.querySelector(".modal2-open-btn");
const modal2Container = document.querySelector(".modal2");
const modal2Overlay = document.querySelector(".modal2-overlay");
const regForm = document.querySelector("#reg-form");
const modal2CloseBtn = document.querySelector(".modal2-close");
const password3 = document.querySelector("#password3");
const confirmPassword3 = document.querySelector("#confirmPassword3");


modal2OpenBtn2.addEventListener("click", (event) => {
  modal2Container.classList.add("is-open");
});

modal2Overlay.addEventListener("click", (event) => {
  modal2Container.classList.remove("is-open");
});

modal2CloseBtn.addEventListener("click", (event) => {
  modal2Container.classList.remove("is-open");
});

regForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(regForm);
  const regFormValues = Object.fromEntries(formData);
  if (password3.value !== confirmPassword3.value) {
    alert("Пароли не совпадают");
  } else {
    delete regFormValues.password;
    delete regFormValues.confirmPassword;
    regFormValues.createdOn = new Date();
    console.log(regFormValues);
    regForm.reset();
    modal2Container.classList.remove("is-open");
  }
});
