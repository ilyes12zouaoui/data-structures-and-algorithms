//Node (value, pointer to next Node)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//SinglyLinkedList of Nodes (head, tail, length)

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter != index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index, value) {
    const node = this.get(index);
    if (node == null) return false;
    node.value = value;
    return true;
  }

  reverse() {
    if (this.length == 0 || this.length == 1) return undefined;

    let current = this.head;

    this.head = this.tail;
    this.tail = current;

    let prev = null;
    let nextNode;

    for (let i = 0; i < this.length; i++) {
      nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }

    return this;
  }

  showInArray() {
    let list = [];
    let current = this.head;
    while (current != null) {
      list.push(current.value);
      current = current.next;
    }
    console.log(list);
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) return false;

    if (index == 0) return !!this.unshift(value);
    if (index == this.length) return !!this.push(value);

    let prev = this.get(index - 1);
    let temp = prev.next;
    let newNode = new Node(value);

    prev.next = newNode;
    newNode.next = temp;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index == 0) return this.shift();
    if (index == this.length) return this.pop();

    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = prev.next.next;
    this.length--;
    return temp;
  }

  unshift(value) {
    //create a new node
    const newNode = new Node(value);
    //if there is a head, make the newNode points to it then make the newNode the head of the linkedList
    if (this.head != null) {
      newNode.next = this.head;
      this.head = newNode;
    }
    //if there is no head that means that linkedlist is empty so the newNode is the head and the tail
    else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  shift() {
    if (this.length == 0) return undefined;
    if (this.length == 1) {
      const temp = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return temp;
    }
    const temp = this.head;
    this.head = this.head.next;
    this.length--;
    return temp;
  }

  push(value) {
    //create a new node
    const newNode = new Node(value);
    //if there is no tail
    if (this.tail == null) {
      //make the newNode the tail and the head of the linkedList
      this.tail = newNode;
      this.head = newNode;
    }
    //if there is a tail
    else {
      //make the old tail points to the new node
      this.tail.next = newNode;
      //make the newNode the tail of the linkedList
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  popV2() {
    //if the linked list is empty
    if (this.length == 0) return undefined;
    //if the linked list has only one node
    if (this.length == 1) {
      const temp = this.tail;
      this.tail = null;
      this.head = null;
      this.length--;
      return temp;
    }
    //if the linked list has more then one node
    else {
      //get the head of the linked list
      let currentNode = this.head;
      //travese t'ill reaching the second last item
      while (currentNode.next.next != null) {
        currentNode = currentNode.next;
      }
      //save the last last item to return
      const temp = currentNode.next;
      //make the second last item as the tail of the linkedlist
      currentNode.next = null;
      this.tail = currentNode;
      this.length--;
      return temp;
    }
  }

  pop() {
    if (this.length == 0) return undefined;
    //if the linked list has only one node
    if (this.length == 1) {
      const temp = this.tail;
      this.tail = null;
      this.head = null;
      this.length--;
      return temp;
    }
    //if the linked list has more then one node
    else {
      //create two nodes that will be decaled by one
      let current = this.head;
      let newTail = this.head;
      //travese t'ill we reach the last two nodes
      while (current.next != null) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.length--;
      return current;
    }
  }
}

let linkedList = new SinglyLinkedList();
linkedList.push(22);
linkedList.push(55);
linkedList.push(77);
linkedList.push(152);
linkedList.push(221);

linkedList.showInArray();
linkedList.reverse();
linkedList.showInArray();
