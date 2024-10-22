// Palindrome String

// Determine the given string is palindrome or not

const str = "thiS is String";
const str2 = "racecar";
const str3 = "hello";

const isPalindrome = (str) => {
  str = str.toLowerCase();
  console.log(str);

  const ans = str.split("").reverse().join("");
  console.log(ans);

  if (ans === str) {
    return "True";
  }

  return "False";
};

console.log(isPalindrome(str)); // false
console.log(isPalindrome(str2)); // true
console.log(isPalindrome(str3)); // false
