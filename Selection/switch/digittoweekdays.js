var digit = require("readline-sync");
var num = digit.question("enter the week day number from 1 to 7 : ");

switch(num) {
  case '1':
    console.log("The day is monday");     break;
  case '2':
    console.log("The day is tuesday");     break;
    break;
  case '3':
    console.log("The day is wednesday");     break;
    break;
  case '4':
    console.log("The day is thursday");     break;
    break; 
  case '5':
    console.log("The day is friday");     break;
     break; 
  case '6':
    console.log("The day is saturday");     break;
     break;
  case '7':
    console.log("The day is sunday");     break;
    break;             
}
