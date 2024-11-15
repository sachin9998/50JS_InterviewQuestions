//*--------------------------------
//* Coding Challenge
//*--------------------------------
//? 17: Write a function to check if a character is uppercase or lowercase.

function toSnakCase(str) {
  let str1 = str.trim().split(" "); // [ 'hello', 'world', 'thApa' ]

  return str1
    .map((item, index) => {
      if (index === str1.length - 1) {
        return item.toLowerCase();
      }

      return item.toLowerCase() + "_";
    })
    .join("");
}

console.log(toSnakeCase("hello world thApa")); // hello_world_thapa
