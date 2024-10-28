function sumOfDigits(num) {
  let arr = Array.from(String(num), Number);
  console.log(arr);

  return arr.reduce((accu, curEle) => (accu += curEle), 0);
}

console.log(sumOfDigits(1234));
console.log(sumOfDigits(4321));
console.log(sumOfDigits(123456));
