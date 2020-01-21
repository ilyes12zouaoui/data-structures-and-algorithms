//parent = n
//child1 = n*2+1
//child2 = n*2+2

//child = n
//parent = (n-1)/2
class MaxBinaryHeap {
  constructor() {
    this.array = [];
  }

  insert(value) {
    //push value to the array
    //check if it's bigger of it's parent node
    //if yes swap
    //else break
    //repeat t'ill it's not bigger
    this.array.push(value);
    let index = this.array.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (value < this.array[parentIndex]) break;
      let temp = this.array[index];
      this.array[index] = this.array[parentIndex];
      this.array[parentIndex] = temp;
      index = parentIndex;
    }
  }

  removeMax() {
    //remove the top element and put the last element is his place
    //compare the new top element with the two children and swap with the bigger one
    //repeat t'ill the children are smaller than that element or there no more children

    this.array[0] = this.array[this.array.length - 1];
    this.array.pop();
    let index = 0;
    let length = this.array.length;
    //while there is a child
    while (true) {
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = index * 2 + 2;
      //check if the right child exists
      if (rightChildIndex < length) {
        //check if our element is bigger that the two children then stop
        if (
          this.array[index] > this.array[rightChildIndex] &&
          this.array[index] > this.array[leftChildIndex]
        )
          break;
        if (this.array[rightChildIndex] > this.array[leftChildIndex]) {
          //compare the two children and swap with the bigger
          let temp = this.array[index];
          this.array[index] = this.array[rightChildIndex];
          this.array[rightChildIndex] = temp;
          index = rightChildIndex;
        } else {
          let temp = this.array[index];
          this.array[index] = this.array[leftChildIndex];
          this.array[leftChildIndex] = temp;
          index = leftChildIndex;
        }
      }
      //else check if left child exists at least
      else if (leftChildIndex < length) {
        //compare the leftchild and swap if the leftchild is bigger else stop
        if (this.array[leftChildIndex] > this.array[index]) {
          let temp = this.array[index];
          this.array[index] = this.array[leftChildIndex];
          this.array[leftChildIndex] = temp;
          index = leftChildIndex;
        } else {
          break;
        }
      }
      //else stop cause there is no more children to go to
      else {
        break;
      }
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(50);
heap.insert(40);
heap.insert(30);
heap.insert(15);

// console.log(heap);

heap.insert(45);
heap.insert(5);
console.log(heap);
heap.removeMax();
// heap.removeMax();
// heap.removeMax();
console.log(heap);
