// Tính tổng các phần tử trong mảng
const myArr = [2, 4, 6];

let sum = 0;
for (let i = 0; i < myArr.length; i++) {
  const number = myArr[i];
  sum = sum + number;
}
console.log(sum);

// Tính tổng các phần tử trong mảng dùng reduce
const mySum = myArr.reduce((sum, value) => sum + value);
console.log(result);

//
// reduce cơ bản như sau
// reduce(callbackFn)
// reduce(callbackFn, initialValue)
// inittialValue không có cũng được
// callbackFn sẽ nhận vào 3 tham số gồm: accumulator, currentValue, index
// Trong đó:
//    accumulator là giá trị tính được ở bước trước đó
//    currentValue là giá trị ở vị trí hiện tại
//    index là vị trí hiện tại
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#examples

// reduce(arr, callbackFn, initialValue)
// rules:
// - arr should be an array and callbackFn should be a function
// - arr.length = 0 and initialValue = undefined -> throw error
// - arr.length = 0 and initialValue != undefined -> return initialValue
function reduce(arr, callbackFn, initialValue) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') {
    throw new Error('Invalid parameters');
  }

  if (arr.length === 0) {
    if (initialValue === undefined) {
      throw new Error('Should have initialValue when arr is empty');
    }
    return initialValue;
  }

  const hasInitialValue = initialValue !== undefined;

  const startIndex = hasInitialValue ? 0 : 1;

  let accumulator = hasInitialValue ? initialValue : arr[0];

  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callbackFn(accumulator, arr[i], i);
  }

  return accumulator;
}

function calcSum(prevSum, number) {
  return prevSum + number;
}

reduce([2, 4, 6], calcSum, 100);

reduce(
  [2, 4, 6],
  function (prevSum, number) {
    return prevSum + number;
  },
  0,
);

const result = reduce([2, 4, 6], (prevSum, number) => prevSum + number, 0);
console.log(result);
