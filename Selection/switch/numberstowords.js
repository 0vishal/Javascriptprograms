var digit = require("readline-sync");
var num = digit.question("enter the number to get in words : ");

switch(num) {
    case '1':
        console.log("Unit");      break;
    case '10':
        console.log("Tens");      break;
    case '100':
        console.log("Hundreds");     break;
    case '1000':
        console.log("Thousands");     break;
    case '10000':
        console.log("Ten of Thousand");    break;
    case '100000':
        console.log("Hundred of Thousand");   break;
       break;
    case '1000000':
        console.log("Millions");      break;
    case '1000000000':
        console.log("Billions");     break;
  }
