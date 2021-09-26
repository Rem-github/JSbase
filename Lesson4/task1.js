"use strict";

class NumberParts {
    constructor(units, tens, hundreds) {
        this.units = units;
        this.tens = tens;
        this.hundreds = hundreds;
    }
}
function CreateNumberParts(userNumber) {
    let unit;
    let ten;
    let hundred;
    if (Number.isInteger(userNumber) && String(userNumber).length <= 3) {
        unit = userNumber % 10;
        ten = Math.floor(userNumber / 10) % 10;
        hundred = Math.floor(userNumber / 100);
    }
    let num = new NumberParts(unit, ten, hundred);
    return num;
}

let userNumber = +prompt("Введите целое число от 0 до 999");
console.log(CreateNumberParts(userNumber));

