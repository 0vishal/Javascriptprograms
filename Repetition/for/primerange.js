var number = require("readline-sync");
var a = number.question("Enter no :");
a = parseInt(a)
var b = number.question("Enter no :");
b = parseInt(b)
var prime=0;

for (var i = a; i <= b;) {
    for (var j = i - 1; j >= 2;) {
        if ((i % j) != 0) {
            prime = 1
        }
        else {
            prime = 0
        }
        j = (j - 1)
    }
    if (prime == 1) {
        console.log(i);
    }
    i = (i + 1)
}