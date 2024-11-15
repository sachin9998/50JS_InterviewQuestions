// Write a function to check if a character is uppercase or lowercase.

const isUpperCase = (char) => {
  if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    return true;
  }
};

const isLowerCase = (char) => {
  return char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;
};

console.log(isUpperCase("S")); // Output: true
console.log(isLowerCase("b")); // Output: true
