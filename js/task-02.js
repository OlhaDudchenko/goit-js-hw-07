const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// console.log(ingredients);
const ingridientsListEl = document.querySelector('#ingredients');
// console.log(ingridientsListEl);
 
const createElements = (ingredients) => {
    return ingredients.map((ingridient,index) => {
        const liEl = document.createElement('li');
        liEl.textContent = ingredients[index];
        return liEl;
    });

}
// console.log(createElements(ingredients));

const elements = createElements(ingredients);
ingridientsListEl.append(...elements);
console.log(ingridientsListEl);