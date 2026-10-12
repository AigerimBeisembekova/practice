/* Тема: HTML-формы и события JavaScript
Цель: закрепить работу с form, input, label, валидацией, событиями submit/input/change,
event.preventDefault(), value, checkValidity(), reportValidity() и FormData.
Модальные окна в это ДЗ не входят.
Важно: выполняйте задания постепенно. После каждого задания проверяйте
результат в браузере и в DevTools Console. */

// 1. Простая форма подписки
// Создайте форму подписки с полем Email и кнопкой «Подписаться». У поля должны
// быть label, placeholder, name, type="email" и required. У кнопки укажите
// type="submit".
// <form id="subscribe-form">
// ...
// </form>

// <form id="subscribe-form-1">
//   <input class="email-input-1"
//   label = "Почта"
//   placeholder = "Введите почту"
//   name = "email"
//   type = "email"
//   required>
//   <button class="submit-button-1" type="submit">Подписаться</button>
// </form>

// 2. Первое событие submit
// Найдите форму через querySelector(). Добавьте обработчик события submit.
// Отмените стандартное поведение формы с помощью event.preventDefault() и
// выведите в консоль сообщение «Форма отправлена».
// form.addEventListener('submit', function (event) {
// ...
// });

const submissionForm = document.querySelector("#subscribe-form-1");

submissionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Форма отправлена");
});

// 3. Получаем значение поля
// При отправке формы получите значение Email и выведите его в консоль. Проверьте,
// чем отличается вывод самого input от input.value.
// console.log(emailInput);
// console.log(emailInput.value);

const emailInput1 = document.querySelector(".email-input-1");

submissionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(emailInput1);
  console.log(emailInput1.value);
});

// 4. Проверяем валидность
// Добавьте minlength или другие подходящие HTML-ограничения. В JavaScript вызовите
// checkValidity() и посмотрите, какое значение он возвращает для валидной и
// невалидной формы. Если форма невалидна, вызовите reportValidity() и прекратите
// выполнение обработчика через return.
// if (!form.checkValidity()) {
// form.reportValidity();
// return;
// }
// 5. Очистка формы
// После успешной отправки очистите форму. Найдите подходящий метод формы
// самостоятельно. Проверьте, очищается ли input после submit.

submissionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!submissionForm.checkValidity()) {
    submissionForm.reportValidity();
    return;
  }
  console.log(emailInput1.value);
  submissionForm.reset();
});

// 6. Форма обратной связи
// Создайте новую форму с полями: имя, email и сообщение. Все поля обязательные.
// Для имени установите minlength="2", для email используйте type="email", для
// сообщения - textarea. При успешной отправке выведите все значения в консоль.

// const feedbackForm = document.querySelector("#feedback-form");
// const feedbackBtn = document.querySelector(".feedback-button");
// const feedbackName = document.querySelector(".feedback-name");
// const feedbackEmail = document.querySelector(".feedback-email");
// const feedbackMessage = document.querySelector(".feedback-message");

// feedbackForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   if (!feedbackForm.checkValidity()) {
//     feedbackForm.reportValidity();
//     return;
//   }
//   console.log(feedbackName.value);
//   console.log(feedbackEmail.value);
//   console.log(feedbackMessage.value);
//   feedbackForm.reset();
// });

// 7. FormData
// Переделайте задание №6 так, чтобы не получать value каждого поля вручную.
// Создайте FormData на основе формы и выведите значения через formData.get().
// Убедитесь, что у каждого поля есть атрибут name.
// const formData = new FormData(form);
// console.log(formData.get('name'));
// console.log(formData.get('email'));

// const feedbackForm = document.querySelector("#feedback-form");

// feedbackForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   if (!feedbackForm.checkValidity()) {
//     feedbackForm.reportValidity();
//     return;
//   }
//   const formData = new FormData(feedbackForm);
//   feedbackForm.reset();
//   console.log(formData.get("name"));
//   console.log(formData.get("email"));
//   console.log(formData.get("message"));
// });

// 8. FormData → объект
// Преобразуйте FormData из предыдущего задания в обычный JavaScript-объект с
// помощью Object.fromEntries(). Выведите получившийся объект в консоль.
// const formData = new FormData(form);
// const formValues = Object.fromEntries(formData);
// console.log(formValues);

const feedbackForm = document.querySelector("#feedback-form");

feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!feedbackForm.checkValidity()) {
    feedbackForm.reportValidity();
    return;
  }
  const formData = new FormData(feedbackForm);
  const feedbackFormValues = Object.fromEntries(formData);
  feedbackForm.reset();
  console.log(feedbackFormValues);
});

// 9. Событие input
// Добавьте поле «Имя пользователя». Во время ввода текста показывайте в консоли
// текущее значение поля. Используйте событие input. Проверьте, как часто оно
// срабатывает.
// usernameInput.addEventListener('input', function () {
// ...
// });

const usernameInput = document.querySelector(".feedback-username");

usernameInput.addEventListener("input", () => {
  console.log(usernameInput.value);
}); // каждый символ выводится

// 10. Счётчик символов
// Создайте textarea с maxlength="100". Под ней разместите текст «0 / 100». При
// каждом вводе обновляйте число введённых символов. Например, после слова
// «Привет» должно отображаться «6 / 100».

const textarea = document.querySelector(".feedback-textarea-input");
const charCount = document.querySelector(".char-count");

textarea.addEventListener("input", () => {
  const currentLength = textarea.value.length;
  charCount.textContent = currentLength + " /100";
});

// 11. Событие change
// Создайте select с вариантами «Frontend», «Backend», «Design». Добавьте обработчик
// change и выводите выбранное значение в консоль. Сравните поведение change и
// input.

const roleSelect = document.querySelector(".roleSelect");

roleSelect.addEventListener("change", () => {
  console.log(roleSelect.value);
});

// 12. Чекбокс согласия
// Добавьте checkbox «Я согласен с правилами» и кнопку отправки формы. Сделайте
// checkbox обязательным через HTML. При submit проверьте валидность формы и
// выводите данные только после успешной проверки.

//все итак сработала с FormData или надо было отдельную форму создать для чекбокс?

// 13. Итоговое задание: анкета
// Создайте небольшую анкету: имя, фамилия, email, дата рождения, направление
// (select), комментарий (textarea) и обязательный checkbox согласия. Используйте label
// и placeholder там, где это уместно. Добавьте HTML-валидацию. При submit отмените
// стандартное поведение, проверьте форму, соберите данные через FormData,
// преобразуйте их в объект и добавьте свойство createdOn со значением new Date().
// Выведите итоговый объект в консоль и очистите форму после успешной отправки.

const surveyForm = document.querySelector("#surveyForm");

surveyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if(!surveyForm.checkValidity()){
    surveyForm.reportValidity();
    return;
  }
  const surveyFormData = new FormData(surveyForm);
  const userProfile = Object.fromEntries(surveyFormData);
  userProfile.createdOn = new Date();
  console.log(userProfile);
  surveyForm.reset();
});

/*  Мини-шпаргалка
submit Срабатывает при отправке формы.
event.preventDefault() Отменяет стандартное действие браузера.
input.value Получает текущее значение конкретного поля.
form.checkValidity() Возвращает true/false в зависимости от
HTML-валидации.
form.reportValidity() Показывает стандартные сообщения об ошибках
валидации.
new FormData(form) Собирает значения полей формы, у которых есть name.
Object.fromEntries(...) Преобразует пары ключ-значение в обычный объект.
input Срабатывает во время изменения значения поля.
change Срабатывает при подтверждённом изменении
значения элемента. */
