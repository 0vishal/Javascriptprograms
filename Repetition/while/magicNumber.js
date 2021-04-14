var digit = require("readline-sync");
let high = 100;
let low = 0;
var isNotMagicNumber = 1
let mid = parseInt((low + high) / 2);

while (isNotMagicNumber == 1) {
    if (low == mid) {
        isNotMagicNumber = 0
        console.log("The magic number is " + low);
    }
    else {
        console.log("choose one number in mind between 1 to 100 ");
        var choice = digit.question("is number is less than " + mid + " yes: ");
    }

    if ((choice == "yes" || choice == "y" || choice == "Y")) {
        high = mid
    } else {
        low = mid
    }

    mid = parseInt((low + high) / 2);
}