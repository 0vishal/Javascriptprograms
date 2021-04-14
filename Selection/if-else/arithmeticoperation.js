var inputa = require("readline-sync");
var a = inputa.question("enter the number 1 ");

var inputb = require("readline-sync");
var b = inputb.question("enter the number 2 ");

var inputc = require("readline-sync");
var c = inputc.question("enter the number 3 ");

let one = ((a + b * c));
console.log(one);
let two = ((a % b + c));
console.log(two);
let three = ((c + a / b));
console.log(three);
let four = ((a * b + c));
console.log(four);





if ((one > two) && (one > three) && (one > four)) {
    console.log(one);
    console.log("is max");
    if ((two < three) && (two < four)) {
        console.log(two);
        console.log("is min");
    }
    else if (three < four) {
        console.log(three);
        console.log("is min");
    }
    else {
        console.log(four);
        console.log("is min");
    }
}
else if ((two > one) && (two > three) && (two > four)) {
    console.log(two);
    console.log("is max");
    if ((three < four) && (three < one)) {
        console.log(three);
        console.log("is min");
    }
    else if (one < four) {
        console.log(one);
        console.log("is min");
    }
    else {
        console.log(four);
        console.log("is min");
    }
}
else if ((three > one) && (three > two) && (three > four)) {
    console.log(three);
    console.log("is max");
    if (four < one && four < two) {
        console.log(four);
        console.log("is min");
    }
    else if (one < two) {
        console.log(one);
        console.log("is min");
    }
    else {
        console.log(two);
        console.log("is min");
    }
}
else {
    console.log(four);
    console.log("is max");
    if (one < two && one < three) {
        console.log(one);
        console.log("is min");
    }
    else if (three < two) {
        console.log(three);
        console.log("is min");
    }
    else {
        console.log(two);
        console.log("is min");
    }
}
