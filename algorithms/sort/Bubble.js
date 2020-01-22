const bubbleSort = list => {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - 1 - i; j++) {
      if (list[j + 1] > list[j]) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
  return list;
};

//if the array is almost sorted it will better to test if we did swap or not as a condition to break from the loop

const bubbleSortWithSwapCheck = list => {
  let swap;
  for (let i = 0; i < list.length; i++) {
    swap = false;
    for (let j = 0; j < list.length - 1 - i; j++) {
      if (list[j + 1] > list[j]) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
        swap = true;
      }
    }
    if (swap == false) return list;
  }

  return list;
};

const arr1 = [1, 5, 7, 2, 6, 10, 4];

const arr2 = [8, 1, 2, 3, 5, 6];

// console.log("bubble sort descending:", bubbleSort(arr1));

console.time("bubbleSort");
bubbleSort(arr2);
console.timeEnd("bubbleSort");

console.time("bubbleSortWithSwap");
bubbleSortWithSwapCheck(arr2);
console.timeEnd("bubbleSortWithSwap");

console.log("bubbleSort function result", bubbleSort(arr2));
console.log(
  "bubbleSortWithSwap function result",
  bubbleSortWithSwapCheck(arr2)
);
