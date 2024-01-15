// Write a function to check if a number a positive even number
// If yes, return true. Otherwise return false
function isPositiveEvenNumber(n) {
  let isValid; // undefined

  // checking...
  if (n > 0 && n % 2 === 0) {
    isValid = true;
  } else {
    isValid = false;
  }
  return isValid;
}
console.log(isPositiveEvenNumber(5));
// v2
function isPositiveEvenNumber2(n) {
  let isValid = false;
  if (n > 0 && n % 2 === 0) {
    isValid = true;
  }
  return isValid;
}
// v3
function isPositiveEvenNumber3(n) {
  if (n > 0 && n % 2 === 0) {
    return true;
  }
  return false;
}
// v4
function isPositiveEvenNumber4(n) {
  return n > 0 && n % 2 === 0;
}
console.log(isPositiveEvenNumber4(6));
