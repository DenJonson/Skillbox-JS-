import './button.css';

export function createBtn(container = document.body) {

  const btn = document.createElement('button');

  btn.innerHTML = '0';
  btn.classList.add('simple-button');

  btn.addEventListener('click', () => {
    btn.innerHTML = Number(btn.innerHTML) + 1;
  })

  container.append(btn);

}