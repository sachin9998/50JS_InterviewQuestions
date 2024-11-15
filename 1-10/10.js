// Check if arrays are equal

console.log(arrayAreEqual([1, 2, 3], [1, 2, 3]));
console.log(arrayAreEqual([1, 2, 3], [1, 2, 4]));
console.log(arrayAreEqual([], []));

function arrayAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((currValue, index) => currValue === arr2[index]);
}
