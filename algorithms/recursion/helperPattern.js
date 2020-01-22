//if we need to update a variable accross the recursion calls, weather we past it as a parameter and then return it
//or we use the recursion helper pattern

//example return the odd numbers of an array in a new array

let arr1 = [1, 2, 3, 4, 5, 8, 9, 22, 23];

// 1-pass the result variable as paramater to the recursive function

const oddNumbersRecursion = (myArray, result) => {
  //base condition
  if (myArray.length == 0) return result;

  //manipulate the result variable
  if (myArray[0] % 2 == 0) {
    result.push(myArray[0]);
  }
  return oddNumbersRecursion(myArray.slice(1), result);
};

// 2-use helper pattern

const oddNumberHelperRecursion = myArray => {
  let result = [];

  const helper = myArray => {
    if (myArray.length == 0) return;

    if (myArray[0] % 2 == 0) {
      result.push(myArray[0]);
    }

    return helper(myArray.slice(1));
  };

  helper(myArray);
  return result;
};

let resultArray = [];
console.log("recursion", oddNumbersRecursion(arr1, resultArray));
console.log("recursion with helper", oddNumberHelperRecursion(arr1));
