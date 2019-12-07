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
