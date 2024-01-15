// Write a function to transform a string:
// - The first letter is UPPERCASE
// - The rest is LOWERCASE
function capitalize(str) {
  if (str === '') return '';

  const firstLetter = str[0].toUpperCase();
  const rest = str.slice(1).toLowerCase();

  return `${firstLetter}${rest}`;
}
console.log(capitalize('easy FrOntend'));
console.log(capitalize(''));
console.log(capitalize('ABC'));
