var number = require("readline-sync");
var Number = number.question("Enter no to print harmonic:");
Number = parseInt(Number)

for (var i = 1; i <= Number; i++) {
    if (i == 1) {
        var addSeries = 1 / i;
    } else {
        for (var j = 2; j <= Number; j++) {
            if (i == j) {
                addSeries = addSeries + "+1/" + i;
            }
        }
    }
}
var series = addSeries
console.log(series);