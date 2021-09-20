inputVal = prompt("Введите сумму в рублях");
keyNumber = inputVal.charAt(inputVal.length - 1);
if ((parseInt(inputVal) > 4) && (parseInt(inputVal) < 20)) {
    rub = "рублей";
}
else {
    switch (keyNumber) {
        case "1":
            rub = "рубль";
            break;
        case "2":
            rub = "рубля";
            break;
        case "3":
            rub = "рубля";
            break;
        case "4":
            rub = "рубля";
            break;
        default:
            rub = "рублей";
    }
}

alert("Ваша сумма в " + inputVal + " " + rub + " успешно зачислена.")