import throttle from 'lodash.throttle';
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
const formEl = document.querySelector('form');

formEl.addEventListener('input', throttle(local, 500));
formEl.addEventListener('submit', onSubmit);

const saveData = localStorage.getItem('feedback-form-state');
const parsedData = JSON.parse(saveData);

if (parsedData) {
  inputEl.value = parsedData.email;
  textareaEl.value = parsedData.message;
}

function local(ev) {
  const email = inputEl.value;
  const message = textareaEl.value;
  localStorage.setItem('feedback-form-state', JSON.stringify({ email, message }));
}

function onSubmit(ev) {
  ev.preventDefault();
  const email = ev.currentTarget.elements.email.value;
  const message = ev.currentTarget.elements.message.value;
  if (!message || !email) {
    return alert('Все поля должны быть заполнены!');
  }
  const obj = {
    message,
    email,
  };
  console.log(obj);
  localStorage.removeItem('feedback-form-state');
  formEl.reset();
}
