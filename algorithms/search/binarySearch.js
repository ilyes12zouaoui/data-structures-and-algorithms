// the array must be sorted first !
const binarySearch = (list, value) => {
  let left = 0;
  let right = list.length - 1;
  while (left < right) {
    //get the middle index as an integer
    let center = Math.floor((right + left) / 2);

    //if the value of the middle element is the one we are searching for return the middle index
    if (list[center] == value) return center;
    //if the value of the middle element is bigger than what we are searching for update the right index
    else if (value < list[center]) right = center - 1;
    else left = center + 1;
  }
  return -1;
};

const arr1 = [1, 2, 4, 8, 9, 10, 13, 17, 20];

console.log("binary search : ", binarySearch(arr1, 13));
