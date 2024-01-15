const numberList = [1, 3, 5, 7];
numberList.splice(2, 1, 2, 4);
console.log(numberList); // [ 1, 3, 2, 4, 7 ]

const numberList2 = [1, 3, 5, 7];
numberList2.splice(0, 0, 2, 4);
console.log(numberList2); // [ 2, 4, 1, 3, 5, 7 ]

const numberList3 = [1, 3, 5, 7];
numberList3.splice(1, 0, 4);
console.log(numberList3); // [ 1, 4, 3, 5, 7 ]

const numberList4 = [1, 3, 5, 7];
numberList4.splice(1, 1);
console.log(numberList4);
