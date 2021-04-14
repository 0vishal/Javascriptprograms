var number = require("readline-sync");
var num = number.question("Enter a number: ");
num = parseInt(num);
isprime(num);
var check_palindrome_isPrime = isPalindrome(num);
isprime(check_palindrome_isPrime);


function isprime(num) {
    var flag = 0;
    for (i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            flag = 1;
        }
    }
    if (flag == 1) {
        console.log(num+" not a prime number ");
    }
    else {
        console.log(num+" is a prime number " );
    }
}

function isPalindrome(num) {
    var rem, temp, palindrome = 0;

    temp = num;
    while (num > 0) {
        rem = num % 10;
        num = parseInt(num / 10);
        palindrome = palindrome * 10 + rem;
    }
    if (palindrome == temp) {
        console.log(palindrome+" Number is Palindrome");
        return palindrome;
    }
    else {
        console.log(palindrome+" Number is not palindrome");
        return palindrome;
    }
}