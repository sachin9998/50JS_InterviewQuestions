// Calculate sum of squares of all element

function sumOfSquares(arr) {
  return arr.reduce((count, num) => {
    return (count += num * num);
  }, 0);
}

console.log(sumOfSquares([1, 2, 3])); // 14
