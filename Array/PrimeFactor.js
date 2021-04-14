var digit = require("readline-sync");
var num = digit.question("enter the Single digit no: ");
console.log(findPrimeFactors(num));

var factors=[];
var index=0;

function findPrimeFactors(number){
    var flag;
    for(i=2;i<=number;i++){
        if(number%i == 0){
            flag=1;
            for(j=2;j<=i/2;j++){
                if(i%j == 0){
                    flag=0;
                    break;
                }
            }
            if(flag == 1){
                 factors[(index++)]=i;
            }
        }
    }
    return factors;
}