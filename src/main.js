import { nanoid } from 'nanoid';
import clipboardCopy from 'clipboard-copy';
import './style.css';

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');
const warningCopyPassword = document.querySelector('h4');

passwordBtnEl.addEventListener('click', () => {
  warningCopyPassword.innerHTML = 'Clique na senha para copiá-la';
  warningCopyPassword.style.color = 'white';
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
});

displayPasswordEl.addEventListener('click', (element) => {
  if (displayPasswordEl.innerText === '...') {
    warningCopyPassword.style.color = 'rgb(142, 47, 47)';
    warningCopyPassword.innerHTML = 'Clique no botão para gerar uma senha segura';
  } else {
    clipboardCopy(element.target.innerHTML);
    warningCopyPassword.innerText = 'Senha copiada para área de transferência!';
    warningCopyPassword.style.color = 'rgb(95, 225, 86)';
  }
});

window.onload = () => {
  warningCopyPassword.innerHTML = 'Clique no botão para gerar uma senha segura';
};
