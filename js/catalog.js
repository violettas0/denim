import { makeProducts } from './makeProducts.js'

let catalog = document.body.querySelector('.catalog');

let catalogItems = {
    amount: 9,
    link: 'product-card.html',
    names: ['Jacket'],
    prices: ['$ 40', '$ 70', '$ 60', '$ 50', '$ 40', '$ 110', '$ 35', '$ 85', '$ 160'],
    img: 'jckt'
};

let catalogList = {
    link: 'product__link',
    div: 'product__item',
    name: 'product__name',
    price: 'product__price',
    img: 'product__img'
};

makeProducts(catalog, catalogItems, catalogList);