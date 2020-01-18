function makeProducts(wrapper, productsItem, classList) {
    for (let i = 0; i < productsItem.amount; i++) {
        let a = document.createElement('a');
        a.classList.add(classList.link);
        a.href = productsItem.link;
        let div = document.createElement('div');
        div.classList.add(classList.div);
        let name = document.createElement('h3');
        name.classList.add(classList.name);
        if (productsItem.names.length > 1) {
            name.textContent = productsItem.names[i];
        } else {
            name.textContent = productsItem.names[0];
        }
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
        a.appendChild(div);
        wrapper.appendChild(a);
    }
}

export { makeProducts }