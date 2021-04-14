var num = require("readline-sync");

function checkPalindrome() {
    var rem, temp, palindrome = 0;
    var number1 = num.question("enter the no 1 ");
    var number2 = num.question("enter the no 1 ");


    temp = number1;
    while (number1 > 0) {
        rem = number1 % 10;
        number1 = parseInt(number1 / 10);
        palindrome = palindrome * 10 + rem;
    }
    if (palindrome == number2) {
        console.log("two numbers are Palindrome");
    }
    else {
        console.log("two numbers are not palindrome");
    }
}

checkPalindrome();