const linearSearch = (list, value) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] == value) return i;
  }
  return -1;
};

const arr1 = [1, 2, 4, 8, 9, 10, 13, 17, 20];

console.log("linear search : ", linearSearch(arr1, 13));
