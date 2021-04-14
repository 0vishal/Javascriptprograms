var digit = require("readline-sync");
var option = digit.question("Enter the Option Unit conversion to CalculateUnit 1. Feet to Inches 2. Feet to Meter 3. Inch to Feet  4.Meter to feet");

var inputf = require("readline-sync");
var inputi = require("readline-sync");
var inputm = require("readline-sync");




switch(option) {
    case '1':
        var feet = inputf.question("enter the value of feet");
        let inches=((feet*12));
        console.log(inches);
       break; 
    case '2':
        var feet = inputf.question("enter the value of feet");
        let meter=((feet*0.3048));
        console.log(meter);
      break;
    case '3':
        var inches = inputi.question("enter the value of inches");
        let feet=((inches/12));
        console.log(feet);
      break;
    case '4':
        var meter = inputm.question("enter the value of Meter");
        let feet=((meter/0.3048));
        console.log(feet);
      break; 
}
