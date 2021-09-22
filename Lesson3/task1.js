"use strict";
for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(i + "- это 0")
    }
    else {
        switch (i % 2) {
            case 0:
                console.log(i + "- это четное число");
                break;
            case 1:
                console.log(i + "- это нечетное число");
                break;
        }
    }
}