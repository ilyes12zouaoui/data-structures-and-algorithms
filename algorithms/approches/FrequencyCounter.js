//this pattern is used when you have two data related somehow to each other, and you gonna compare them with taking
//the frequency of the data in consideration
//=> comparison + frequency

const naiveSolution = (arr1, arr2) => {
  //if the arrays have the same size
  if (arr1.length != arr2.length) return false;

  //loop over each element in array1
  for (let number of arr1) {
    //check if the double value exists in array2
    let index = arr2.indexOf(number * 2);
    //if not return false
    if (index == -1) return false;
    //if yes splice it
    arr2.splice(index, 1);
  }
  return true;
};

const ferequencyCounter = (arr1, arr2) => {
  //if the arrays have the same size
  if (arr1.length != arr2.length) return false;

  //create two objects that have the value as key and the frequency as value
  let frequencyArr1 = {};
  let frequencyArr2 = {};

  for (let number of arr1) {
    frequencyArr1[number] = (frequencyArr1[number] || 0) + 1;
  }

  for (let number of arr2) {
    frequencyArr2[number] = (frequencyArr2[number] || 0) + 1;
  }

  for (let key in frequencyArr1) {
    //check if the double value of the key of the first array exists in the second array, and the frequency too
    if (
      !(key * 2 in frequencyArr2) ||
      frequencyArr1[key] != frequencyArr2[key * 2]
    )
      return false;
  }

  return true;
};

const ferequencyCounterV2 = (arr1, arr2) => {
  //if the arrays have the same size
  if (arr1.length != arr2.length) return false;

  //create an object that have the value as key and the frequency as value
  let frequencyArr1 = {};

  for (let number of arr1) {
    frequencyArr1[number] = (frequencyArr1[number] || 0) + 1;
  }

  for (let number of arr2) {
    //check if the double number exists in frequency object if it exists do minus one to frequency else
    //that means it's found in arr2 but there is zero occurency of it in the frequency object so return false
    if (frequencyArr1[number / 2]) {
      frequencyArr1[number / 2]--;
    } else return false;
  }

  return true;
};

let arr1 = [2, 2, 4];
let arr2 = [4, 8, 4];

let arr11 = [2, 2, 4];
let arr22 = [4, 8, 4];

let arr3 = [5, 2];
let arr4 = [4, 10, 4];
let arr5 = [8, 8, 20];

let arr6 = [6, 12, 6];
let arr7 = [6, 3, 3];

console.time("naive");
naiveSolution(arr1, arr2);
console.timeEnd("naive");

console.time("ferequencyCounter");
ferequencyCounter(arr4, arr5);
console.timeEnd("ferequencyCounter");

console.time("ferequencyCounterV2");
ferequencyCounterV2(arr4, arr5);
console.timeEnd("ferequencyCounterV2");

console.log("ferequencyCounter function result", ferequencyCounter(arr4, arr5));

console.log(
  "ferequencyCounterV2 function result",
  ferequencyCounterV2(arr4, arr5)
);

console.log("naive function result", naiveSolution(arr11, arr22));
