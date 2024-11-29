function sumOfDigits(num) {
  let arr = Array.from(String(num), Number);
  console.log(arr);

  return arr.reduce((accu, curEle) => (accu += curEle), 0);
}

