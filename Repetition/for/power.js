var digit = require("readline-sync");
var num = digit.question("enter the number n to print the power of 2 ");
var i=0;

for (i=0; i<=num; ++i); {
    let power=((2**i));
    console.log(power);
}

