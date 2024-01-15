// Write function to find longest word
// for i
// forEach
// reduce

const wordList = ['a', 'ab', 'abc', 'op'];

function findLongestWordI(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  let longestWord = wordList[0];
  for (let i = 0; i < wordList.length; i++) {
    const currentWord = wordList[i];
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }

  return longestWord;
}
console.log(findLongestWordI(wordList));

//

function findLongestWordE(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  let longestWord = wordList[0];
  wordList.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}
console.log(findLongestWordE(wordList));

//

function findLongestWordReduce(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  const longestWord = wordList.reduce((word, nextWord) =>
    word.length < nextWord.length ? nextWord : word,
  );

  return longestWord;
}
console.log(findLongestWordReduce(wordList));

// v2
function findLongestWordReduce(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  return wordList.reduce((word, nextWord) =>
    word.length < nextWord.length ? nextWord : word,
  );
}
console.log(findLongestWordReduce(wordList));
