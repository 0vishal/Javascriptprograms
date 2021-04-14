var number = require("readline-sync");
var Number = number.question("Enter no :");
Number = parseInt(Number)

for (i = 2; i <= Number; i++) {
    while ((Number % i) == 0) {
        console.log(i);
        Number = (Number / i)
    }
}