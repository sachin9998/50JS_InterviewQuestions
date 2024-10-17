//* ---------------------------------------------------------
//* Programming Question: Longest Word in a String
//* ---------------------------------------------------------

//? Q: Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

//* Constraints:
//? The input string may contain alphabetic characters, digits, spaces, and punctuation.
//? The input string is non-empty.
//? The input string may contain multiple words separated by spaces.

//* Note:
//? If the input string is empty or contains only whitespace, the function should return an false.
//? The function should ignore leading and trailing whitespace when determining the longest word.

console.log(
  findLongestWord(
    "Watch IPL on sonymax live to know longest six hitter batter from team india"
  )
);

// Brute Force Approach

function findLongestWord(str) {
  if (str.trim().length === 0) {
    return false;
  }

  let max = 0;
  let ans = "";

  const arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i].length;

    if (current > max) {
      max = current;
      ans = arr[i];
    }
  }

  return ans;
}

// Answer - sonymax

// Optimal Approach
const findLongestWord2 = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  words = str.split(" ");
  words = words.sort((a, b) => b.length - a.length);
  console.log(words);
  // return words.at(-1);
  return words[0];
};

console.log(
  findLongestWord2(
    "Watch Thapa Technical javascript awesomethapatechnical course on youtube"
  )
);

// Reduce Method
const findLongestWord3 = (str) => {
  str = str.split(" ");

  return str.reduce((accumulator, currentWord) => (currentWord.length > accumulator.length ? currentWord : accumulator), "")
};

console.log(
  findLongestWord3(
    "Watch Thapa Technical javascript awesomethapatechnical course on youtube"
  )
);
