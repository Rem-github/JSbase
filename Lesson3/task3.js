"use strict";
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
// вариант через for of
for (let product of products) {
    product.price *= 0.85
}
console.log(products);

// вариант через forEach
products.forEach(function (product) { product.price *= 0.85 });
console.log(products);
