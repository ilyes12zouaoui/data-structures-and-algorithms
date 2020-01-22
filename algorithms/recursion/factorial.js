const iterativeFactorial = n => {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
};

const recursiveFactorial = n => {
  //base condition
  if (n == 0 || n == 1) {
    return 1;
  }

  return n * recursiveFactorial(n - 1);
};

console.log("factorial", iterativeFactorial(5));
console.log("factorial", recursiveFactorial(5));
