const factorial = (num) => {
  let fact = 1;

  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }

  return fact;
};

console.log(factorial(5));

for (var i = 0; i < 4; i++) {
  console.log(i);
}

for (let i = 0; i < 4; i++) {
  console.log(i);
}

console.log("Value of ", i); // 4
