const selectionSort = list => {
  let maxIndex;
  for (let i = 0; i < list.length - 1; i++) {
    maxIndex = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] > list[maxIndex]) maxIndex = j;
    }
    let temp = list[i];
    list[i] = list[maxIndex];
    list[maxIndex] = temp;
  }
  return list;
};

const selectionSortWithCheckIfSwapIsRequired = list => {
  let maxIndex;
  for (let i = 0; i < list.length - 1; i++) {
    maxIndex = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] > list[maxIndex]) maxIndex = j;
    }
    if (maxIndex != i) {
      let temp = list[i];
      list[i] = list[maxIndex];
      list[maxIndex] = temp;
    }
  }
  return list;
};

const arr1 = [1, 5, 7, 2, 6, 10, 4];

const arr2 = [8, 1, 2, 3, 5, 6];

console.time("selectionSort");
selectionSort(arr1);
console.timeEnd("selectionSort");

console.time("selectionSortWithCheckIfSwapIsRequired");
selectionSortWithCheckIfSwapIsRequired(arr1);
console.timeEnd("selectionSortWithCheckIfSwapIsRequired");

console.log("selectionSort function result", selectionSort(arr1));
console.log(
  "selectionSortWithCheckIfSwapIsRequired function result",
  selectionSortWithCheckIfSwapIsRequired(arr1)
);
