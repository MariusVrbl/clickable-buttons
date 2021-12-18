'use strict';

const button = document.querySelector('.button');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-button');
const btnsOpen = document.querySelectorAll('.show-button');

for (let i = 0; i < btnsOpen.length; i++)
  btnsOpen[i].addEventListener('click', function () {
    button.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

// Duplicate code below, need to fix it
btnClose.addEventListener('click', function () {
  button.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  button.classList.add('hidden');
  overlay.classList.add('hidden');
});

// Press button function
document.addEventListener('keydown', function (press) {
  console.log(press.key);
  if (press.key === 'Escape' && !button.classList.contains('hidden')) {
    button.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
