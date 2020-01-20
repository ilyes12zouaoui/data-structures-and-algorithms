//FIFO last in first out
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//stack using array
class QueueUsingArray {
  constructor() {
    this.array = [];
  }

  //add value to the back
  add(value) {
    let newNode = new Node(value);
    this.array.push(newNode);
    return this;
  }

  //delete value from the top
  remove() {
    return this.array.shift();
  }

  //return top element
  peek() {
    return this.array[this.array.length - 1];
  }
}

class QueueUsingLinkedList {
  constructor() {
    this.top = null;
    this.last = null;
    this.length = 0;
  }

  //add a node to the top
  add(value) {
    const newNode = new Node(value);
    if (this.top == null) {
      this.top = newNode;
      this.last = this.top;
      this.length++;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.length++;
    }
    return this;
  }

  //remove a node from the top
  remove() {
    if (this.length == 0) return null;
    else if (this.length == 1) {
      let tempNode = this.top;
      this.top = null;
      this.last = null;
      this.length--;
      return tempNode;
    } else {
      let tempNode = this.top;
      this.top = this.top.next;
      this.length--;
      return tempNode;
    }
  }

  //return the top element
  peek() {
    return this.top;
  }
}

let queue = new QueueUsingLinkedList();
// let queue = new QueueUsingArray();
queue.add(55);
queue.add("dadad");
console.log(queue);
console.log(queue.remove());
console.log(queue);
