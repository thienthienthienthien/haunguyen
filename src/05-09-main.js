// Write a function to classify student
// Receive mark as a number, output as below
// mark > 8 -> Excellence
// 7 <= mark <= 8 -> Good
// 4 <= mark <= 6 -> Not Good
// mark < 4 -> Bad
function classifyStudent(mark) {
  let result;
  if (mark > 8) result = `Excellence`;
  else if (mark >= 7) result = `Good`;
  else if (mark >= 4) result = `Not Good`;
  else result = `Bad`;
  return result;
}
console.log(classifyStudent(7));
//
// v2
function classifyStudent(mark) {
  // Validate Agruments
  // mark should be in range [0, 10]
  if (mark < 0 || mark > 10) return ``;
  let result = `Bad`;
  if (mark > 8) result = `Excellence`;
  else if (mark >= 7) result = `Good`;
  else if (mark >= 4) result = `Not Good`;
  return result;
}
console.log(classifyStudent(1));
//
// v3
function classifyStudent(mark) {
  // Validate Agruments
  // mark should be in range [0, 10]
  if (mark < 0 || mark > 10) return ``;

  if (mark > 8) return `Excellence`;
  if (mark >= 7) return `Good`;
  if (mark >= 4) return `Not Good`;
  return `Bad`;
}
console.log(classifyStudent(8));
