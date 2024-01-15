// 1. Write a function to calculate the area of a rectangle
function calAreaRectangle(a, b) {
  if (a <= 0 || b <= 0) return -1;

  return a * b;
}
console.log(calAreaRectangle(0, 5));
console.log(calAreaRectangle(6, 5));
// 2. Write a function to calculate the perimeter of a rectangle
function getPerimeterRectangle(a, b) {
  if (a <= 0 || b <= 0) return -1;

  return (a + b) * 2;
}
console.log(getPerimeterRectangle(2, -4));
console.log(getPerimeterRectangle(2, 8));
// 3. Write a function to calculate the area of a circle
function calAreaCircle(r) {
  if (r <= 0) return -1;

  return r * r * Math.PI;
}
console.log(calAreaCircle(5));
