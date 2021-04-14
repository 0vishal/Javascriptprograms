var digit = require("readline-sync");
var num = digit.question("enter the number to get in words : ");

if (num==1) {
    console.log("Unit"); 
} else if (num==10) {
    console.log("Tens"); 
} else if (num==100) {
    console.log("Hundreds"); 
}    
  else if (num==1000) {
    console.log("Thousands");
 }    
  else if (num==10000) {
    console.log("Ten of Thousands");
  }    
  else if (num==100000) {
     console.log("Hundred of Thousand");
  }    
  else if (num==1000000) {
    console.log("Millions"); 
  }  
  else if (num==1000000000) {
    console.log("Billions"); 
  }
  else {
      console.log("Wrong input");
  } 