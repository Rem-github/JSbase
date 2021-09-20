function getSum(a, b) {
    return a + b
}
function getDiff(a, b) {
    return a - b
}
function getMult(a, b) {
    return a * b
}
function getDivision(a, b) {
    return a / b
}
function mathOperation(a, b, oper) {
    switch (oper) {
        case "сумма":
            alert("a + b=" + getSum(a, b));
            break;
        case "разность":
            alert("a - b=" + getDiff(a, b));
            break;
        case "произведение":
            alert("a * b=" + getMult(a, b));
            break;
        case "деление":
            alert("a / b=" + getDivision(a, b));
            break;
    }
}
a = +prompt("Введите первое число");
b = +prompt("Введите второе число");
oper = prompt("Введите операцию")
mathOperation(a, b, oper)


