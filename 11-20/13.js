// Count vowels in String - a,e,i,o,u

console.log(countVowels("Helloo World"));
console.log(countVowels("thE quIck brown fOX"));
console.log(countVowels("Brrrpp"));

function countVowels(str) {
  const result = str.toLowerCase().split("");
  //   console.log(result);

  const vowel = ["a", "e", "i", "o", "u"];

  let count = 0;

  for (let char of result) {
    if (vowel.includes(char)) {
      {
        count++;
      }
    }
  }

  return count;
}
