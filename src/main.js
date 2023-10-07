import { TOKEN_LS } from './js/refs';

const registerBtn = document.querySelector('.register');
const loginBtn = document.querySelector('.login');
const logoutBtn = document.querySelector('#logout');
const contactsBtn = document.querySelector('.contacts');

if (localStorage.getItem(TOKEN_LS) === null) {
  isLoggedOut();
} else {
  isLoggedIn();
}

function isLoggedIn() {
  registerBtn.classList.add('is-hidden');
  loginBtn.classList.add('is-hidden');
  contactsBtn.classList.remove('is-hidden');
  logoutBtn.classList.remove('is-hidden');
}

function isLoggedOut() {
  registerBtn.classList.remove('is-hidden');
  loginBtn.classList.remove('is-hidden');
  contactsBtn.classList.add('is-hidden');
  logoutBtn.classList.add('is-hidden');
}
