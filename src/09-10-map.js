// map
function map(arr, mappingFn) {
  // arr should be an array
  // mappingFn should be a function
  if (!Array.isArray(arr) || typeof mappingFn !== 'function') return undefined;

  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const newElement = mappingFn(element, i);
    newArr.push(newElement);
  }

  return newArr;
}
console.log(map([1, 2, 3], (x) => x + 1));
console.log(map([1, 2, 3], (x) => x * 2));
//
console.log(
  map([1, 2, 3, 4], (x, index) => (index % 2 === 0 ? x + 5 : x * 10)),
);
//
console.log(map(['easy', 'frontend'], (x) => x.length));
