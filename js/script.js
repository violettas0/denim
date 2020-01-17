let bestsellers = document.body.querySelector('.bestsellers');
let categories = document.body.querySelector('.categories');

bestsellersItems = {
    amount: 4,
    names: ['Jacket', 'Overalls', 'Jacket', 'Overalls'],
    prices: ['$ 120', '$ 140', '$ 90', '$ 160'],
    img: 'bs'
};

categoriesItems = {
    amount: 4,
    names: ['Jeans', 'Shirts', 'Jacket', 'Overalls'],
    img: 'ct'
};

bestsellersClassList = {
    div: 'bestsellers__item',
    name: 'bestsellers__name',
    price: 'bestsellers__price',
    img: 'bestsellers__img'
};

categoriesClassList = {
    div: 'categories__item',
    name: 'categories__name',
    img: 'categories__img'
};

function makeProducts(wrapper, productsItem, classList) {
    for (let i = 0; i < productsItem.amount; i++) {
        let div = document.createElement('div');
        div.classList.add(classList.div);
        let name = document.createElement('h3');
        name.classList.add(classList.name);
        name.textContent = productsItem.names[i];
        div.appendChild(name);
        if (productsItem.prices) {
            let price = document.createElement('span');
            price.classList.add(classList.price);
            price.textContent = productsItem.prices[i];
            div.appendChild(price);
        }
        let img = document.createElement('img');
        img.classList.add(classList.img);
        img.src = `img/${productsItem.img}${i+1}.jpg`;
        img.alt = 'Product photo';
        div.appendChild(img);
        wrapper.appendChild(div);
    }
}

makeProducts(bestsellers, bestsellersItems, bestsellersClassList);
makeProducts(categories, categoriesItems, categoriesClassList)
