import { makeProducts } from './makeProducts.js'

let bestsellers = document.body.querySelector('.bestsellers__items');
let categories = document.body.querySelector('.categories__items');

let bestsellersItems = {
    amount: 4,
    link: 'product-card.html',
    names: ['Jacket', 'Overalls', 'Jacket', 'Overalls'],
    prices: ['$ 120', '$ 140', '$ 90', '$ 160'],
    img: 'bs'
};

let categoriesItems = {
    amount: 4,
    link: 'catalog.html',
    names: ['Jeans', 'Shirts', 'Jackets', 'Overalls'],
    img: 'ct'
};

let bestsellersClassList = {
    link: 'bestsellers__link',
    div: 'bestsellers__item',
    name: 'bestsellers__name',
    price: 'bestsellers__price',
    img: 'bestsellers__img'
};

let categoriesClassList = {
    link: 'categories__link',
    div: 'categories__item',
    name: 'categories__name',
    img: 'categories__img'
};


makeProducts(bestsellers, bestsellersItems, bestsellersClassList);
makeProducts(categories, categoriesItems, categoriesClassList);

