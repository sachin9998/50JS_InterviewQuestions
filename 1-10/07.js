// Find the maximum number from an array using reducer method

const findMax = (arr) => {
  const max = arr.reduce((accu, current) => {
    return current > accu ? current : accu;
  });

  return max;
};

console.log(findMax([1, 5, 3, 9, 2])); // => 9
