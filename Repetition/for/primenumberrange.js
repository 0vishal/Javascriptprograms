var number = require("readline-sync");
var n1 = number.question("Enter no :");
n1 = parseInt(n1)
var n2 = number.question("Enter no :");
n2 = parseInt(n2)
var flag;
for (i = n1; i <= n2; i++) {
    let num = (i / 2);
    for (j = 2; j <= num; j++) {
        let check = (i % j);
        if (check == 0) {
            let flag = 1;
        }
        if(flag == 0) {
            console.log(i);
        }
    
        i = i + 1;
    }
}
