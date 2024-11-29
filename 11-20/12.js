// Remove duplicates from an array

function removeDuplicates(arr) {
  let newArr = [...new Set(arr)];
  return newArr;
}

console.log(removeDuplicates([1, 2, 3, 2, 1, 4]));
console.log(removeDuplicates([5, 6, 7, 7, 8, 8, 9]));
console.log(removeDuplicates([]));

// Output:
// [ 1, 2, 3, 4 ]
// [ 5, 6, 7, 8, 9 ]
// []
