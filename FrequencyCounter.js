//this patter is used when you have two data related somehow to each other, and you gonna compare them with taking
//the frequency of the data in consideration
//=> compareson + frequency

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

let arr1 = [2, 2, 4];
let arr2 = [4, 8, 4];
let arr3 = [5, 2];
let arr4 = [4, 10, 4];
let arr5 = [8, 8, 20];

console.time("naive function");
console.log("naive function result", naiveSolution(arr1, arr2));
console.timeEnd("naive function");

console.time("ferequencyCounter function");
console.log("ferequencyCounter function result", ferequencyCounter(arr4, arr5));
console.timeEnd("ferequencyCounter function");
