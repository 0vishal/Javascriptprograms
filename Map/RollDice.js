var dice=new Map();
var i=0;
var one,two,three,four,five,six=0;

while(one < 10 & two < 10 & three < 10 & four < 10 & five < 10 &  six < 10){
    var roll=Math.floor((Math.random()*6)+1);
    dice.set(i++,roll);
    switch(roll){
        case 1:
            let one=one+1;
            break;
        case 2:
            let two=two+1;
            break;
        case 3:
            let three=three+1;
            break;
        case 4:
            let four=four+1;
            break;
        case 5:
            let five=five+1;
            break;
        case 6:
            let six=six+1;
            break;
    }
}

console.log("The total number of times the die is rolled is : "+dice.size);

var number=new Map();

number.set(1,one);
number.set(2,two);
number.set(3,three);
number.set(4,four);
number.set(5,five);
number.set(6,six);

console.log("The number of times each value has occured is : ");
for([key,value] of number){
    console.log(key+' = '+value);
}

var biggest=number.get(1);
var smallest=number.get(1);

for(let j of number.values()){
    if(j > biggest){
        biggest=j;
    }
    if(j < smallest){
        smallest=j;
    }
}

console.log("The number that appeared maximum time is: ");
for(let k of number.keys()){
    if(number.get(k) == biggest){
        console.log(k);
    }
}

console.log("The number that appeared minimum time is: ");
for(let l of number.keys()){
    if(number.get(l) == smallest){
        console.log(l);
    }
}