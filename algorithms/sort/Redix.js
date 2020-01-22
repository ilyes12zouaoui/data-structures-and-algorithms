//get the value of a specific digit of a number
const getDigit = (number, index) => {
  return Math.floor(Math.abs(number) / Math.pow(10, index)) % 10;
};

//number of digits of a given number
const digitCount = number => {
  return Math.floor(Math.log10(Math.abs(number))) + 1;
};

//return number of digits of the biggest number in an array
const mostDigits = arr => {
  let maxNumber = 0;
  arr.forEach(element => {
    maxNumber = Math.max(maxNumber, digitCount(element));
  });

  return maxNumber;
};

const redixSort = arr => {
  const maxDigit = mostDigits(arr);
  for (let k = 0; k < maxDigit; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      digitBuckets[getDigit(arr[i], k)].push(arr[i]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
};

let arr1 = [44, 22, 11, 55, 77, 45, 3, 2, 42, 41, 1, 5, 66];

console.log(redixSort(arr1));
