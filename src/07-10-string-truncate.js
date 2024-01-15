// Create a function truncate(tex, maxlength) that check the length of the text
// and if it exceeds maxlength - replaces the end of str with the ellipsis character `"..."`
// to make its length equal to maxlength.

// Easy -> truncate('Easy', 4) -> Easy…

// Horizontal ellipsis code 8230. String.fromCodePoint(8230)
// UTF-16 '\u2026'

// …

function truncate(text, maxlength) {
  if (text.length <= maxlength) return text;

  const shortStr = text.slice(0, maxlength - 1);
  const ellipsis = '…';

  return `${shortStr}${ellipsis}`;
}

console.log(truncate('Easy', 4));
console.log(truncate('Easy Frontend', 4));
