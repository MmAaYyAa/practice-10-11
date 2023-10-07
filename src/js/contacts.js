import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';
import {
  addContactService,
  deleteContactService,
  getContactsService,
  updateContactService,
} from './api';
import { TOKEN_LS } from './refs';

const contactForm = document.querySelector('.contacts-form');
const contactsList = document.querySelector('.contacts-list');

let instance = null;

contactForm.addEventListener('submit', handleAddContact);
contactsList.addEventListener('click', handleDelete);
contactsList.addEventListener('click', openModal);

renderContactsList();

function renderContactsList() {
  getContactsService().then(data => {
    contactsList.innerHTML = data.map(renderContact).join('');
  });
}

function handleAddContact(event) {
  event.preventDefault();

  const { name, number } = event.currentTarget.elements;

  const user = {
    name: name.value,
    number: number.value,
  };

  addContactService(user).then(data => {
    console.log(data);
    contactsList.insertAdjacentHTML('afterbegin', renderContact(data));
  });

  contactForm.reset();
}

function openModal(event) {
  if (!event.target.classList.contains('update')) {
    return;
  }

  const contactId = event.target.id;
  instance = basicLightbox.create(
    `
    <form class="update-form form" id=${contactId}>
      <input type="text" name="name" />
      <input type="number" name="number" />

      <button type="submit">Update contact</button>
    </form>
  `
  );

  instance.show();
  if (instance.visible()) {
    const updateForm = document.querySelector('.update-form');
    updateForm.addEventListener('submit', modalUpdateContact);
  }
}

async function modalUpdateContact(event) {
  event.preventDefault();
  const { name, number } = event.currentTarget.elements;

  const updateUser = {
    name: name.value,
    number: number.value,
  };

  await updateContactService(event.currentTarget.id, updateUser);
  instance.close();
  renderContactsList();
}

function renderContact({ name, number, id }) {
  return `
    <li>
      <p>Name: ${name}</p>
      <p>Number: ${number}</p>
      <button class="update" id="${id}">Update</button>
      <button class="delete" id="${id}">Delete</button>
    </li>
  `;
}

async function handleDelete(event) {
  if (!event.target.classList.contains('delete')) {
    return;
  }

  const contactId = event.target.id;
  await deleteContactService(contactId);
  renderContactsList();
}
