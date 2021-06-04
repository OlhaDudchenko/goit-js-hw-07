// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

const input = document.querySelector('#validation-input');
const inputAttribute = Number(input.getAttribute("data-length"));
console.log(inputAttribute)

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {

event.currentTarget.classList.add(event.currentTarget.value.length !== inputAttribute?"invalid":"valid");

};