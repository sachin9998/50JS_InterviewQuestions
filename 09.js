// const arr = [5, 10, 2, 8];

// const total = arr.reduce((avg, element) => {
//   return avg += element;
// }, 0);

// console.log(total);
// console.log(total / arr.length);


function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

// Example usage:
const myList = arrayToList([1, 2, 3]);
console.log(myList);