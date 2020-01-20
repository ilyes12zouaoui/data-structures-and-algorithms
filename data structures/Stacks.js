//LIFO last in first out
//stack using array
class StackUsingArray {
  constructor() {
    this.array = [];
  }

  //add value to the top
  add(value) {
    let newNode = new Node(value);
    this.array.push(newNode);
    return this;
  }

  //delete value from the top
  remove() {
    return this.array.pop();
  }

  //return top element
  peek() {
    return this.array[this.array.length - 1];
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StackUsingLinkedList {
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
      newNode.next = this.top;
      this.top = newNode;
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

// let stack = new StackUsingLinkedList();
let stack = new StackUsingArray();
stack.add(55);
stack.add("dadad");
console.log(stack);
console.log(stack.remove());
console.log(stack);
