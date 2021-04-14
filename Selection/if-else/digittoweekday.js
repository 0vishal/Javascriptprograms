var digit = require("readline-sync");
var num = digit.question("enter the week day number from 1 to 7 : ");

if (num==1) {
    console.log("The weekday is monday"); 
} else if (num==2) {
    console.log("The weekday is Tuesday"); 
} else if (num==3) {
    console.log("The weekday is Wednesday"); 
}    
  else if (num==4) {
    console.log("The weekday is Thursday");
  }    
  else if (num==5) {
    console.log("The weekday is Friday");
  }    
  else if (num==6) {
     console.log("The weekday is saturday");
  }    
  else if (num==7) {
    console.log("The weekday is Sunday"); 
  }  
  else {
      console.log("Wrong input");
  } 
