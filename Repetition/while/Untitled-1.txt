console.log("flip Coin Simulator");
var Head = 0;
var Tail = 0;
while ((Head != 11) && (Tail != 11)) {
    let flipcoin = (Math.random() > 0.5) ? 1 : 0;
    if (flipcoin == 1) {
        Head++
    } else {
        Tail++
    }
}

if (Head == 11) {
    console.log("Head wins 11 times");
} else {
    console.log("Tail wins 11 times");
}