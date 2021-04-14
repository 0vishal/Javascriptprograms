var number = require("readline-sync");
var Number = number.question("enter the number to check prime or not:");
Number = parseInt(Number);
var flag = 0;


for ( i=2; i<= Number/2; i++ ) {

    let check=(Number%i);
        if ( check == 0 ) {
        	flag = 1;
        }
}
 if (flag == 1) {
        console.log("It is not a prime number: " + Number);
    }
    else {
        console.log("It is a prime number: " + Number);
    }