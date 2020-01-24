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

class WeightedGraph {
  constructor() {
    this.nodes = 0;
    this.adjacentList = {};
  }

  addVertex(value) {
    //if vertex doesn't exist add it
    if (!this.adjacentList[value]) {
      this.adjacentList[value] = [];
      this.nodes++;
    }
  }

  addEdge(v1, v2, weight) {
    //check for node of each
    //check both nodes exists
    if (!!this.adjacentList[v1] && !!this.adjacentList[v2]) {
      //check if edge exists already then don't add it again else add it
      if (!this.adjacentList[v1].some(edge => edge.node == v2))
        this.adjacentList[v1].push({ node: v2, weight });
      if (!this.adjacentList[v2].some(edge => edge.node == v1))
        this.adjacentList[v2].push({ node: v1, weight });
    }
  }

  removeEdge(v1, v2) {
    this.adjacentList[v1] = this.adjacentList[v1].filter(
      edge => edge.node != v2
    );
    this.adjacentList[v2] = this.adjacentList[v2].filter(
      edge => edge.node != v1
    );
  }

  removeVertex(value) {
    //remove the all edges with that node
    let edges = this.adjacentList[value];
    for (let edge of edges) {
      this.adjacentList[edge.node] = this.adjacentList[edge.node].filter(
        edge => edge.node != value
      );
    }
    //remove the node itself
    delete this.adjacentList[value];
    this.nodes--;
  }

  //shortest paths from start node to other nodes, a weightedGraph
  dijkstra(start) {
    let visited = [];
    let previous = {};
    let distances = {};
    let toVisit = new PriorityQueue();
    //initialization
    //
    //previous nodes with null
    //toVisit primaryQueue with the start node
    //distances with infinity except the start node with 0

    for (let node in this.adjacentList) {
      distances[node] = Infinity;
      //because i don't have the implementation to change a node priority in a heap
      //i will keep adding new nodes with the same value but different priorities
      //and the condition to stop in the while loop is when all nodes are visited once
      toVisit.enQueue(node, Infinity);
      previous[node] = null;
    }
    //distance to the start node is 0
    distances[start] = 0;
    //priority of the start node in the priorityqueue is 0
    toVisit.enQueue(start, 0);

    while (visited.length < this.nodes) {
      //get the node with the shortest path
      let current = toVisit.deQueue();
      //if it's non visited
      if (!visited.includes(current.value)) {
        //push it ot visited array
        visited.push(current.value);
        //for each node connected
        for (let edge of this.adjacentList[current.value]) {
          //calculate the distance to those nodes
          let distance = distances[current.value] + edge.weight;
          //   console.log("distance", distance, current);
          //if the distance is smaller than what we already have
          if (distance < distances[edge.node]) {
            distances[edge.node] = distance;
            previous[edge.node] = current.value;
            //because i don't have the implementation to change the node priority in a heap if it already exists
            //i will just keep adding with smaller priority and stop when we visit all nodes
            toVisit.enQueue(edge.node, distance);
          }
        }
      }
    }
    return {
      previous,
      distances
    };
  }
}

/*
graph to create: 
      4
    0 - 3
1  / \ 3
  1 - 2
2 | 1
  4

*/

let graph = new WeightedGraph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);

graph.addEdge(0, 1, 1);
graph.addEdge(0, 2, 3);
graph.addEdge(0, 3, 4);
graph.addEdge(1, 2, 1);
graph.addEdge(1, 4, 2);

// console.log(JSON.stringify(graph));
// console.log("----------------");
// graph.removeEdge(0, 2);
console.log(JSON.stringify(graph));
// console.log("----------------");

// graph.removeVertex(1);
console.log(graph.dijkstra(3));
