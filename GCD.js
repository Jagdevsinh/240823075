let a = 20;
let b = 28;

while (b !== 0) {
  let temp = b;
  b = a % b;
  a = temp;
}

console.log("" + a);
