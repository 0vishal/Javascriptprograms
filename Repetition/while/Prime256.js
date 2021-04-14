var digit = require("readline-sync");
var number = digit.question("enter the no: ");
number = parseInt(number);
counter = 0;
result = 0;

while ((counter < number) && (result < 256)) {
    result = (2 ** counter)
     console.log(result)
    counter = (counter + 1)
}