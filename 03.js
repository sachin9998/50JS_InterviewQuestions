//*  Interview Question: Count Occurrences of Character

//! Task:
//? Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.

const countChar = (word, char) => {
  word = word.toLowerCase();
  char = char.toLowerCase();

  word = word.split(""); // ["m", "i", "s", "s", "i", "s", "s", "i", "p", "p", "i"];

  const totalCount = word.reduce((accumulator, currentChar) => {
    if (currentChar === char) {
      accumulator++;
    }

    return accumulator;
  }, 0);

  return totalCount;
};

console.log(countChar("MissIssippi", "I")); // Output: 4

//todo Constraints:
//? The function should be case-sensitive.
//? The function should handle both lowercase and uppercase characters.
//? The character parameter can be any printable ASCII character (the function should accept any character that is part of the ASCII character set and is printable).
