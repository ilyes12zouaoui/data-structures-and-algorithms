const insertSort = list => {
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

const arr1 = [1, 5, 7, 2, 6, 10, 4];

console.time("insertSort");
insertSort(arr1);
console.timeEnd("insertSort");

console.log("insertSort function result", insertSort(arr1));
