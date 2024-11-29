//*--------------------------------
//* Coding Challenge
//*--------------------------------
//?19: Write a function to check if a given string starts with a specific substring.

// const startsWith = (str1, str2) => {
//   return str1.toLowerCase().startsWith(str2);
// };

const startsWith = (str1, str2) => {
  return str1.toLowerCase().slice(0, str2.length) === str2;
};

// Example usage:
console.log(startsWith("Hello world", "hello")); // Output: true
console.log(startsWith("Hello world", "World")); // Output: false
