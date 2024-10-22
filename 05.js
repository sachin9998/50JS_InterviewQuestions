//*-------------------------------------------
//*  Programming Question: Sort an Array
//*-------------------------------------------

// ? Write a function to sort an array of numbers in an ascending order.

const sortAscending = (arr) => {
  console.log(arr);
  const ans = arr.sort((a, b) => a - b);
  return arr;
};

// Example usage:
// console.log(sortAscending([5, 3, 1, 8])); // Output: [1, 3, 5, 8]
console.log(sortAscending([5, 3, 10, 8])); // Output: [3, 5, 8,10]

//todo Requirements:
//? The function should take an array of numbers as input.
//? It should return a new array with the numbers sorted in ascending order.
//? The original array should remain unchanged.
//? You are not allowed to use the built-in sort() method.

// Note
//// Without a comparator function, the sort method sorts the array elements as strings by default, which might not always yield the correct numeric sorting, especially for numbers with more than one digit
