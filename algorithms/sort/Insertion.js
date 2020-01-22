const insertionSort = list => {
  for (let i = 1; i < list.length; i++) {
    let j = i - 1;
    while (list[j + 1] > list[j] && j >= 0) {
      let temp = list[j];
      list[j] = list[j + 1];
      list[j + 1] = temp;
      j--;
    }
  }
  return list;
};

const insertionSortV2 = list => {
  for (let i = 1; i < list.length; i++) {
    let j = i - 1;
    const value = list[i];
    while (j >= 0 && list[j] > value) {
      list[j + 1] = list[j];
      j--;
    }
    list[j + 1] = value;
  }
  return list;
};

const arr1 = [1, 5, 7, 2, 6, 10, 4];
const arr2 = [1, 5, 7, 2, 6, 10, 4];

console.time("insertionSortV2");
insertionSortV2(arr2);
console.timeEnd("insertionSortV2");
console.time("insertSort");
insertionSort(arr1);
console.timeEnd("insertSort");

console.log("insertionSort function result", insertionSort(arr1));
console.log("insertionSortV2 function result", insertionSortV2(arr2));
