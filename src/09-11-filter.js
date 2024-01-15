// filter(arr, callbackFn)
// callbackFn -> true || false

function filter(arr, callbackFn) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') return -1;

  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (callbackFn(element, i)) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(filter([1, 2, 3, 4, 5], (x) => x > 3));
console.log(
  filter([2, 2, 4, 4, 5], (x, index) => x % 2 === 0 && index % 2 === 1),
);
