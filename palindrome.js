function checkPalindrome(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join(''); 
    if (str === reversedStr) {
      console.log("palindrome");
    } else {
      console.log("not palindrome");
    }
  }
  checkPalindrome(121);  
  
  