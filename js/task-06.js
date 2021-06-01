// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

let input = document.querySelector('#validation-input');
const inputAttribute =Number(input.getAttribute("data-length"));

input.addEventListener('input', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length !== inputAttribute) {
       return input.className = 'invalid ';
    }
    return input.className = 'valid ';
}