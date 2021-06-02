// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//1) Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//2) Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//3) Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
const refs = {
ValueEl:document.querySelector('#value'),
removeDecrement:document.querySelector('#counter').firstElementChild,
addIncrement:document.querySelector('#counter').lastElementChild,
};

refs.addIncrement.addEventListener('click', onButtonClick);
refs.removeDecrement.addEventListener('click', (onButtonClick2));
let counterValue = 0;

function onButtonClick() {
   counterValue += 1;
   refs.ValueEl.textContent = counterValue;
};


function onButtonClick2() {
    counterValue -= 1;
    refs.ValueEl.textContent = counterValue;
};


