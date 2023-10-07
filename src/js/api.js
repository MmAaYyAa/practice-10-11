import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { TOKEN_LS } from './refs';

const token = localStorage.getItem(TOKEN_LS);

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export async function registerService(obj) {
  try {
    const { data } = await axios.post('users/signup', obj);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function loginService(obj) {
  try {
    const { data } = await axios.post('users/login', obj);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function addContactService(obj) {
  try {
    const { data } = await axios.post('contacts', obj);
    Notify.success('Contact is added');
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteContactService(contactId) {
  try {
    const { data } = await axios.delete(`contacts/${contactId}`);
    return data;
  } catch (error) {
    Notify.failure(error.message);
  }
}

export async function updateContactService(contactId, obj) {
  try {
    const { data } = await axios.patch(`contacts/${contactId}`, obj);
    Notify.success('Contact is updated');
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getContactsService() {
  try {
    const { data } = await axios('contacts');
    return data;
  } catch (error) {
    console.error(error);
  }
}
