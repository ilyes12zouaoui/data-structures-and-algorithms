class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.array = [];
  }

  //insert a node in the priority queue depending on it's priority
  enQueue(value, priority) {
    //push to the end of the heap
    //compare with the parent priority if the parent priority value is bigger swap
    //else stop
    let newNode = new Node(value, priority);
    this.array.push(newNode);
    let index = this.array.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (this.array[parentIndex].priority > priority) {
        let temp = this.array[index];
        this.array[index] = this.array[parentIndex];
        this.array[parentIndex] = temp;
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  //remove the root element in the priority queue
  deQueue() {
    //save the root element in a variable to return at the end
    //put the last element in it"s place and remove the last element
    //compare the priority of that element to it's children priority and swap with the smallest one else stop
    let max = this.array[0];
    this.array[0] = this.array[this.array.length - 1];
    this.array.pop();
    let length = this.array.length;
    let index = 0;
    let element = this.array[0];
    while (true) {
      let rightChildIndex = index * 2 + 2;
      let leftChildIndex = index * 2 + 1;

      //if the two children exist then
      //compare to the element priority if none is lesser stop
      //else swap with the child with the smallest priority
      if (rightChildIndex < length) {
        if (
          element.priority < this.array[leftChildIndex].priority &&
          element.priority < this.array[rightChildIndex].priority
        ) {
          break;
        } else if (
          this.array[leftChildIndex].priority <
          this.array[rightChildIndex].priority
        ) {
          this.array[index] = this.array[leftChildIndex];
          this.array[leftChildIndex] = element;
          index = leftChildIndex;
        } else {
          this.array[index] = this.array[rightChildIndex];
          this.array[rightChildIndex] = element;
          index = rightChildIndex;
        }
      }
      //there is only one child node so just compare the priority with it and swap if it's smaller else stop
      else if (leftChildIndex < length) {
        if (this.array[leftChildIndex].priority < element.priority) {
          this.array[index] = this.array[leftChildIndex];
          this.array[leftChildIndex] = element;
          index = leftChildIndex;
        } else {
          break;
        }
      }
      //there is no child node
      else {
        break;
      }
    }
    return max;
  }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enQueue("aa", 1);
priorityQueue.enQueue("bb", 2);
priorityQueue.enQueue("cc", 3);
priorityQueue.enQueue("dd", 4);
priorityQueue.enQueue("ee", 0);

console.log(priorityQueue);

console.log("--------------");
priorityQueue.deQueue();
console.log(priorityQueue);
