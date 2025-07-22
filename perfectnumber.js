let num = 28;
let sum = 0;

for (let i = 1; i < num; i++) {
  sum += (num % i === 0) ? i : 0;
}

console.log(sum === num && "perfect"||"not perfect");
