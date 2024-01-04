
// Є сторінка, на якій є блок, у якому знаходиться цифра. Написати код, який при кожному
// перезавантаженні сторінки буде додавати до неї +1.

const count = localStorage.getItem('count') ?? 0;
const block = document.getElementById('count');
const newResult = (Number(count) + 1).toString();
block.innerText = newResult;
localStorage.setItem('count', newResult);
