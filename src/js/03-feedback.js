const throttle = require('lodash.throttle');
const feedback = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

feedback.addEventListener('input', throttle(saveData, 500));
feedback.addEventListener('submit', submit);

if (localStorage.getItem(STORAGE_KEY)) {
  getData();
}

function saveData() {
  let email = this.email.value;
  let message = this.message.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message }));
}

function submit(event) {
  event.preventDefault();
  console.log(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}

function getData() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  try {
    for (let key in data) {
      feedback[key].value = data[key];
    }
  } catch (error) {
    console.log('error', error);
  }
}
