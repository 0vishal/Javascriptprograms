var i;
const n = 5;
let sum = 0;
for (i = 0; i < n; i++) {
    let ran = Math.floor(Math.random() * 99) + 10;
    sum += ran;
}
console.log(sum);