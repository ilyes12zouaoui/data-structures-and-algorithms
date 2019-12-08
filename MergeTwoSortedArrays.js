const arr1 = [0, 3, 4, 31, 40];
const arr2 = [4, 6, 30, 32];

const mergeSortedArrays = (arr1, arr2) => {
  if (arr1.length == 0) return arr2;
  if (arr2.length == 0) return arr1;

  let i = 0;
  let j = 0;
  let mergedArray = [];
  while (i < arr1.length || j < arr2.length) {
    //if all element of arr2 are added, only add from arr1
    if (j == arr2.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
    //if all element of arr1 are added, only add from arr2
    else if (i == arr1.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
    //compare element from arr1 and arr2 and add the smallest to the new merged sorted array
    else if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  return mergedArray;
};

console.time("mergeSortedArrays");
mergeSortedArrays(arr1, arr2);
console.timeEnd("mergeSortedArrays");

console.log("mergeSortedArrays function result", mergeSortedArrays(arr1, arr2));
