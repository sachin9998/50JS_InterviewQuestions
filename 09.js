const arr = [5, 10, 2, 8];

const total = arr.reduce((avg, element) => {
  return avg += element;
}, 0);

console.log(total);
console.log(total / arr.length);
