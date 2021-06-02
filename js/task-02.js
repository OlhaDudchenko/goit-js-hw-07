// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingridientsList = document.querySelector('#ingredients');

 
const createElements = (ingredients) => {
  return ingredients.map((ingridient, index) => {
    const ingridientsListItem = document.createElement('li');
    ingridientsListItem.textContent = ingredients[index];
    return ingridientsListItem;
  });

};


const items = createElements(ingredients);
ingridientsList.append(...items);
console.log(ingridientsList);