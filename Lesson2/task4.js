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
a = +prompt("Введите а ")
b = +prompt("Введите b ")
alert("a + b=" + getSum(a, b))
alert("a - b=" + getDiff(a, b))
alert("a * b=" + getMult(a, b))
alert("a / b=" + getDivision(a, b))