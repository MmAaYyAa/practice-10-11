import { loginService } from './api';
import { TOKEN_LS } from './refs';

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleLogin);

function handleLogin(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  const user = {
    email: email.value,
    password: password.value,
  };

  loginService(user).then(data => {
    localStorage.setItem(TOKEN_LS, data.token);
  });

  loginForm.reset();
}
