// Напиши скрипт, который выполнит следующие операции.

//1) Посчитает и выведет в консоль количество категорий в ul#categories, то есть
// элементов li.item. Получится 'В списке 3 категории.'.

const liItemsEl = document.querySelectorAll('.item');
// console.log(liItemsEl);
const composeMessage=() =>{
    return `В списке ${liItemsEl.length} категории.`;
   }
console.log(composeMessage());


//2) Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
// текст заголовка элемента (тега h2) и количество элементов в категории (всех
// вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные Количество элементов: 4 



const createMessage = ()=> {
     return liItemsEl.forEach(liItemEl => console.log(`Категория: ${liItemEl.firstElementChild.textContent} Количество элементов: ${liItemEl.lastElementChild.children.length} `));
}
createMessage();


    