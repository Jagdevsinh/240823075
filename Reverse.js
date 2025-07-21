let num = 1423;
let reversed=0;
let number = num;
 while (number > 0){
     let digit = number %10;
     reversed = reversed * 10;
     number = Math.floor(number/10);
 }
 console.log("Original number:",num);
 console.log("Reversed number:",reversed);
