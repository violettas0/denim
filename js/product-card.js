import { makeProducts } from './makeProducts.js'

let recommendation = document.body.querySelector('.recommendation');

let recommendationItems = {
    amount: 4,
    link: 'product-card.html',
    names: ['Overalls', 'Overalls','Jacket', 'Jacket'],
    prices: ['$ 140', '$ 110', '$ 70', '$ 60'],
    img: 'rm'
};

let recommendationList = {
    link: 'recommendation__link',
    div: 'recommendation__item',
    name: 'recommendation__name',
    price: 'recommendation__price',
    img: 'recommendation__img'
};

makeProducts(recommendation, recommendationItems, recommendationList);