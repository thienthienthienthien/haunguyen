// every
function checkIfAllEven(arr) {
  if (!Array.isArray(arr)) return false;

  let isValid = true;

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    if (number % 2 !== 0) {
      isValid = false;
      break;
    }
  }

  return isValid;
}
console.log(checkIfAllEven([2, 2, 10]));
console.log(checkIfAllEven([2, 3, 10]));
//
//
// v2
function checkIfAllEven(arr) {
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    if (number % 2 !== 0) return false;
  }

  return true;
}
console.log(checkIfAllEven([2, 5, 8]));
console.log(checkIfAllEven([2, 50, 8]));
