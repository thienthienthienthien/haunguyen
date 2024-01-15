// String exercise
// Write a Javascript function to parameterize a string
// Eg: parameterize('Code JS Is Fun') -> 'code-js-is-fun'
function parameterize(str) {
  let newStr = str.toLowerCase().replaceAll(' ', '-');
  return newStr;
}
console.log(parameterize('Code JS Is Fun'));

// v2
function parameterize(str) {
  let newStr = str.toLowerCase().split(' ').join('-');
  return newStr;
}
console.log(parameterize('Code JS Is Fun'));
