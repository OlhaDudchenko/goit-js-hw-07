// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//1) Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//2) Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//3) Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
let counterValue = 0;

const ValueEl = document.querySelector('#value');
// console.log(ValueEl.textContent);


const removeDecrement = document.querySelector('#counter').firstElementChild;
// console.log(removeDecrement);
const addIncrement = document.querySelector('#counter').lastElementChild;
// console.log(addIncrement);




function onButtonClick() {
   
    counterValue += 1;
    ValueEl.textContent = counterValue;
    }

addIncrement.addEventListener('click', onButtonClick);

function onButtonClick2() {
   
    counterValue -= 1;
    ValueEl.textContent = counterValue;
}
removeDecrement.addEventListener('click', (onButtonClick2));

