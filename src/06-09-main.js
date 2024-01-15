// 1. Write a function to check if a number is odd/even
function isOdd(n) {
  return n % 2 !== 0;
}

function isEven(n) {
  return n % 2 === 0;
}
// 2. Write a function to check if a number is divisible by 5
function isDivisibleBy5(n) {
  return n % 5 === 0;
}
// 3. Write a function to check if a number is perfect square
function isPerfectSquare(n) {
  if (n <= 0) return false;

  const sqrtN = Math.sqrt(n);
  const sqrtInt = Math.trunc(sqrtN);
  return sqrtInt * sqrtInt === n;
}
console.log(isPerfectSquare(90));
console.log(isPerfectSquare(25));
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(30));
