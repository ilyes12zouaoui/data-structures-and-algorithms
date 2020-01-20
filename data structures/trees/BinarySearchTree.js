class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root == null) return (this.root = newNode);

    //if there is a root
    //we check if the value of the root node is greater or less than the newNode value
    //then we move to the right or left
    //if  right or left is null
    //put the newNode there
    //repeat
    let current = this.root;
    while (true) {
      if (newNode == current.value) return undefined;
      if (newNode.value > current.value) {
        if (current.right == null) return (current.right = newNode);
        else current = current.right;
      } else {
        if (current.left == null) return (current.left = newNode);
        else current = current.left;
      }
    }
  }

  find(value) {
    if (this.root == null) return undefined;

    //check if the current node value is equals to the find value
    //if yes return the current node
    //else check if the current nide value is greater or less than the find value
    //then move to the right or left
    //if the right or left node is null return undefined
    //repeat
    let current = this.root;

    while (true) {
      if (current.value == value) {
        return current;
      } else if (value < current.value) {
        if (current.left == null) return undefined;
        current = current.left;
      } else {
        if (current.right == null) return undefined;
        current = current.right;
      }
    }
  }

  BFS() {
    let queue = [];
    let visited = [];
    let node;
    //insert the root in the queue
    //take out the queue top element and put it in visited
    //check if that element have a right or left and add them to the queue
    //repeat t'ill the queue is empty
    queue.push(this.root);
    while (queue.length != 0) {
      node = queue.shift();
      if (node.right != null) queue.push(node.right);
      if (node.left != null) queue.push(node.left);
      visited.push(node);
    }

    return visited;
  }

  DFSPreOrder() {
    let visited = [];
    let node = this.root;
    const traverse = node => {
      visited.push(node);
      if (node.left != null) traverse(node.left);
      if (node.right != null) traverse(node.right);
    };

    traverse(node);

    return visited;
  }

  DFSPostOrder() {
    let visited = [];
    let node = this.root;
    const traverse = node => {
      if (node.left != null) traverse(node.left);
      if (node.right != null) traverse(node.right);
      visited.push(node);
    };

    traverse(node);

    return visited;
  }

  DFSInOrder() {
    let visited = [];
    let node = this.root;
    const traverse = node => {
      if (node.left != null) traverse(node.left);
      visited.push(node);
      if (node.right != null) traverse(node.right);
    };

    traverse(node);

    return visited;
  }
}

let bst = new BST();
bst.insert(10);
bst.insert(12);
bst.insert(8);
bst.insert(6);
bst.insert(9);
bst.insert(5);
console.log(JSON.stringify(bst));

console.log("-----");
console.log(bst.find(55));
console.log(bst.find(8));
console.log("-----");
console.log(bst.BFS());
console.log("-----");
console.log(bst.DFSPreOrder());

console.log("-----");
console.log(bst.DFSPostOrder());

console.log("-----");
console.log(bst.DFSInOrder());
