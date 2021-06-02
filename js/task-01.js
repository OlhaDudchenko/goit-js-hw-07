// Напиши скрипт, который выполнит следующие операции.

//1) Посчитает и выведет в консоль количество категорий в ul#categories, то есть
// элементов li.item. Получится 'В списке 3 категории.'.

const items = document.querySelectorAll('.item');

function composeMessage(){
    console.log( `В списке ${items.length} категории.`);
}
composeMessage();



//2) Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
// текст заголовка элемента (тега h2) и количество элементов в категории (всех
// вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные Количество элементов: 4 



function createMessage(){
items.forEach(item => console.log(`Категория: ${item.firstElementChild.textContent} Количество элементов: ${item.lastElementChild.children.length} `));
}
createMessage();


    