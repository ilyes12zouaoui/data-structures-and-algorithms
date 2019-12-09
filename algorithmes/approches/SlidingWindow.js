//create a subset from one position to another(array, string, etc) that increases or decreases according to a condition

//example find the subset of an array of numbers that has the biggest sum and return that sum

const naiveSolution = (numbers, subsetSize) => {
  if (numbers.length < subsetSize) return 0;
  let maxSum = -Infinity;
  for (let i = 0; i < numbers.length - subsetSize + 1; i++) {
    let tempSum = numbers[i];
    for (j = 1; j < subsetSize; j++) {
      tempSum += numbers[i + j];
    }
    if (maxSum < tempSum) maxSum = tempSum;
  }
  return maxSum;
};

const slidingWindow = (numbers, subsetSize) => {
  if (numbers.length < subsetSize) return 0;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < subsetSize; i++) {
    maxSum += numbers[i];
  }
  tempSum = maxSum;
  for (let i = subsetSize; i < numbers.length; i++) {
    tempSum = tempSum - numbers[i - subsetSize] + numbers[i];
    if (tempSum > maxSum) maxSum = tempSum;
  }
  return maxSum;
};

let arr1 = [2, 6, 9, 1, 2, 5, 4, 3];

console.time("naiveSolution");
naiveSolution(arr1, 4);
console.timeEnd("naiveSolution");

console.time("slidingWindow");
slidingWindow(arr1, 4);
console.timeEnd("slidingWindow");

console.log("naiveSolution result", naiveSolution(arr1, 4));

console.log("slidingWindow result", slidingWindow(arr1, 4));
