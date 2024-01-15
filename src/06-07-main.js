// Random a number in range of [a, b] with a < b
// min: a
// range: b - a
// [10, 100]
// min: 10
// range: 100 - 10 = 90
// -> random from 0 to 90 and plus 10
function randomNumberInRange(a, b) {
  if (a >= b) return -1;

  const random = Math.random() * (b - a);
  const result = Math.round(random) + a;

  return result;
}
console.log(randomNumberInRange(10, 20));
console.log(randomNumberInRange(10, 20));
console.log(randomNumberInRange(10, 20));
console.log(randomNumberInRange(10, 20));
console.log(randomNumberInRange(10, 20));
console.log(randomNumberInRange(10, 20));
console.log(randomNumberInRange(100, 200));
console.log(randomNumberInRange(1000, 2000));
