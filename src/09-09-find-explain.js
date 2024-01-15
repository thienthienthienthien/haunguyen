// find( calbackFn )
// find( x => x > 0 )

// Linh canh
function findFirstEven(numberList) {
  if (!Array.isArray(numberList)) return false;

  let firstEven;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number % 2 === 0) {
      firstEven = number;
      break;
    }
  }

  return firstEven;
}

//
//
// v2
function findFirstEven(numberList) {
  if (!Array.isArray(numberList)) return false;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number % 2 === 0) {
      return number;
    }
  }

  return undefined;
}
console.log(findFirstEven([1, 2, 3, 5]));
//
//
// v3
function findFirstEven(numberList, callbackFn) {
  if (!Array.isArray(numberList)) return false;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (callbackFn(number)) {
      return number;
    }
  }

  return undefined;
}

function isEven(number) {
  return number % 2 === 0;
}
console.log(findFirstEven([1, 2, 3, 5], isEven));
//
// inline callbackFn = anonymous function
console.log(
  findFirstEven([1, 2, 3, 5], function (num) {
    return num % 2 === 0;
  }),
);
//
// arrow function
console.log(findFirstEven([1, 2, 3, 5], (num) => num % 2 === 0));
