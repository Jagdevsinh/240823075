function sumofdigits(num) {
    const digits = num.toString().split('');      
    const sum = digits.reduce((acc, digit) => acc + Number(digit), 0); 
    return sum;
  }
  console.log(sumofdigits(123));  
  