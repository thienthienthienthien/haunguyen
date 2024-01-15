// 1. Get the ones of a number having 3 digits
function getTheOnes(n) {
  if (n.toString().length !== 3) return -1;

  return n % 10;
}
console.log(getTheOnes(560));
// 2. Get the tens of a number having 3 digits
function getTheTens(n) {
  if (n.toString().length !== 3) return -1;

  //   let step1 = n % 100;
  //   let step2 = step1 / 10;
  //   let step3 = Math.trunc(step2);
  //   console.log(step3);

  return Math.trunc((n % 100) / 10);
}
console.log(getTheTens(571));
// 3. Get the hundreds of a number having 3 digits
function getTheHundreds(n) {
  if (n.toString().length !== 3) return -1;

  return Math.trunc(n / 100);
}
console.log(getTheHundreds(478));
// 4. Sum all digits of a number having 3 digits
function sumAllDigits(n) {
  if (n.toString().length !== 3) return -1;

  const ones = n % 10;
  const tens = Math.trunc((n % 100) / 10);
  const hundreds = Math.trunc(n / 100);

  return ones + tens + hundreds;
}
console.log(sumAllDigits(395));
