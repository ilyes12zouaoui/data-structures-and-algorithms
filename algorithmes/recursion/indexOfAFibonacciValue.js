//a recursive function that take a value of a fibonacci sequence and return the index of that element

const fibonacciIndex = value => {
  //index of the fibonacci
  let index = 0;

  const fibonacci = n => {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fibonacci(n - 2) + fibonacci(n - 1);
  };

  const helper = value => {
    //get the value of the fibonacci sequence for that index
    let fibonacciValue = fibonacci(index);
    //if it equals the value we want then return the index
    if (fibonacciValue == value) return;
    //if it's smaller then the value we want increment it by one and repeat
    else if (fibonacci(index) < value) {
      //incremet the index and repeat
      index++;
      return helper(value);
    }
    //else there is no element in the fibonacci sequence for that value
    else {
      index = -1;
      return;
    }
  };

  helper(value);

  return index;
};

//index :     0 1 2 3 4 5 6 7  8  9  10
//fibonacci : 0 1 1 2 3 5 8 13 21 34 55

console.log("indice of fibonacci sequence", fibonacciIndex(34));
