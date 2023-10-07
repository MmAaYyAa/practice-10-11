import { registerService } from './api';
import { TOKEN_LS } from './refs';

const registerForm = document.querySelector('.register-form');

registerForm.addEventListener('submit', handleRegister);

function handleRegister(event) {
  event.preventDefault();

  const { name, email, password } = event.currentTarget.elements;

  const newUser = {
    name: name.value,
    email: email.value,
    password: password.value,
  };

  registerService(newUser).then(data => {
    localStorage.setItem(TOKEN_LS, data.token);
  });

  registerForm.reset();
}

// blended@blended.com
