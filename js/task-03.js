// Используй массив объектов images для создания тегов img вложенных в li. 
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryEl = document.querySelector('#gallery');

                // 1 ВАРИАНТ РЕШЕНИЯ
// const itemsEl = galleryEl.insertAdjacentHTML('afterbegin', `<li class="gallery__list"><img src="${images[0].url}" alt="${images[0].alt}"></img></li><li class="gallery__list"><img src="${images[1].url}" alt="${images[1].alt}"></img></li><li class="gallery__list"><img src="${images[2].url}" alt="${images[2].alt}"></img></li>`);
// console.log(galleryEl);

                     // 2 ВАРИАНТ РЕШЕНИЯ
let items;
const createMarkup = (images) => {
 return items= images.map(image => {
const item = `<li class="gallery__list"><img src="${image.url}" alt="${image.alt}"></img></li>`;
        
  return item;

});
  
};
createMarkup(images);
galleryEl.insertAdjacentHTML('afterbegin', items.join(''));

console.log(galleryEl);


















