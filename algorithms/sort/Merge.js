let arr1 = [1, 5, 10, 15, 20];
let arr2 = [2, 3, 4, 12, 13, 17];
let arr3 = [1, 7, 2, 3, 17, 52, 5, 5, 66, 32];

const mergeTwoSortedArrays = (arr1, arr2) => {
  let result = [];
  let i = 0;
  let j = 0;
  while (i <= arr1.length && j <= arr2.length) {
    if (i == arr1.length) {
      result = result.concat(arr2.slice(j));
      break;
    } else if (j == arr2.length) {
      result = result.concat(arr1.slice(i));
      break;
    } else if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else if (arr1[i] >= arr2[j]) {
      result.push(arr2[j]);
      j++;
    }
  }
  return result;
};

const mergeSort = arr => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeTwoSortedArrays(left, right);
};

// console.log("result0,", mergeTwoSortedArrays(arr1, arr2));
console.log("result1,", mergeSort(arr3));
