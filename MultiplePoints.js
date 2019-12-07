//creating pointers that reference a position in array for example, and move them to reach a certain position following a condition

//example a sorted array that we try to find a couple of numbers where the sum is 0

naiveSolution = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      if (sum == 0) return [arr[i], arr[j]];
    }
  }

  return undefined;
};

sumZero = arr => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum == 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return undefined;
};

let arr1 = [-5, -3, -2, 1, 2, 4, 6];

console.time("naive");
naiveSolution(arr1);
console.timeEnd("naive");

console.time("sumZero");
sumZero(arr1);
console.timeEnd("sumZero");

console.log("naive function result", naiveSolution(arr1));

console.log("sumZero result", sumZero(arr1));

//example a sorted array where we search for the number of unique values

const uniqueValues = numbers => {
  if (numbers.length == 0) return 0;
  if (numbers.length == 1) return 1;
  if (numbers[0] == numbers[numbers.length - 1]) return 0;

  let uniqueArr = [numbers[0]];
  let i = 0;
  let j = 1;

  while (j < numbers.length) {
    if (numbers[j] > uniqueArr[i]) {
      i++;
      uniqueArr.push(numbers[j]);
    }
    j++;
  }

  return i + 1;
};
let arr2 = [1, 2, 2, 3, 3, 3, 5, 5];
console.time("uniqueValues");
uniqueValues(arr2);
console.timeEnd("uniqueValues");

console.log("uniqueValues function result", uniqueValues(arr2));
