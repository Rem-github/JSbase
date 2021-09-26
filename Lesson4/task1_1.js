"use strict";
/* e5
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price * 0.85;
    console.log("Цена товара " + this.name + " " + "с дисконтом в 25% - " + this.price)
};

let product1 = new Product('Зонт', 100);
product1.make25PercentDiscount();
*/

// e6
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price * 0.85;
        console.log("Цена товара " + this.name + " " + "с дисконтом в 25% - " + this.price)
    }
}

let product1 = new Product('Зонт', 100);
product1.make25PercentDiscount();
