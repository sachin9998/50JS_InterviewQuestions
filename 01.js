// ====> Longest word in string
// Q] Write a function findLongestWord that takes a string as input and returns the longest word in string. If there are multiple longest words, return the first one encountered.

console.log(
  findLongestWord(
    "Watch IPL on sonymax live to know longest six hitter batter from team india"
  )
);

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
