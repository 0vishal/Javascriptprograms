var number = require("readline-sync");
var Number = number.question("Enter no :");
Number=parseInt(Number)

    var fact=1;
    for(i=2;i<=Number;i++){
        fact=fact*i;
    }
    console.log("Factorial of "+Number+" is: "+fact);