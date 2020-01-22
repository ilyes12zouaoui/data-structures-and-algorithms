// 0 1 1 2 3 5 8 13 ...

//f(n) = f(n-1) + f(n-2)
//f(0) = 0
//f(1) = 1

const fibonacci = n => {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log("fibonacci", fibonacci(7));
