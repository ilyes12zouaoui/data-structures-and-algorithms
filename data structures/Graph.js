class Graph {
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

  addEdge(v1, v2) {
    //check both nodes exists
    if (!!this.adjacentList[v1] && !!this.adjacentList[v2]) {
      //check if edge exists already then don't add it again else add it
      if (!this.adjacentList[v1].includes(v2)) this.adjacentList[v1].push(v2);
      if (!this.adjacentList[v2].includes(v1)) this.adjacentList[v2].push(v1);
    }
  }

  removeEdge(v1, v2) {
    this.adjacentList[v1] = this.adjacentList[v1].filter(node => node != v2);
    this.adjacentList[v2] = this.adjacentList[v2].filter(node => node != v1);
  }

  removeVertex(value) {
    //remove the all edges with that node
    let edges = this.adjacentList[value];
    for (let node of edges) {
      this.adjacentList[node] = this.adjacentList[node].filter(
        node => node != value
      );
    }
    //remove the node itself
    delete this.adjacentList[value];
    this.nodes--;
  }

  DFSRecursively(start) {
    let result = [];
    let visited = {};
    const helper = node => {
      //put node in visited and result
      result.push(node);
      visited[node] = true;
      //go throught childrens and check if child is not visited then visit it recursively
      for (let child of this.adjacentList[node]) {
        if (!visited[child]) {
          helper(child);
        }
      }
      return;
    };

    helper(start);

    return result;
  }

  DFSiteratively(start) {
    //we have result and visited
    //and we use a stack where we put nodes to visit
    let result = [];
    let visited = { [start]: true };

    let toVisit = [start];
    //while there is a node to visit
    while (toVisit.length != 0) {
      let currentNode = toVisit.pop();
      //put that node in visited and result
      result.push(currentNode);
      //loop throught it's children and if one of them is not visited put it inside the toVisit stuck
      for (let child of this.adjacentList[currentNode]) {
        if (!visited[child]) {
          visited[child] = true;
          toVisit.push(child);
        }
      }
    }
    return result;
  }

  BFS(start) {
    //visited nodes
    let visited = { [start]: true };
    //result
    let result = [];

    //queue that contains nodes to visit
    let toVisit = [start];

    //while there is a node in queue
    while (toVisit.length != 0) {
      let current = toVisit.shift();
      result.push(current);

      for (let node of this.adjacentList[current]) {
        if (!visited[node]) {
          visited[node] = true;
          toVisit.push(node);
        }
      }
    }

    return result;
  }
}

/*
graph to create: 

    0 - 3
   / \
  1 - 2
  |
  4

*/

let graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(0, 3);
graph.addEdge(1, 2);
graph.addEdge(1, 4);

console.log(graph);
console.log(graph.DFSRecursively(0));
console.log(graph.DFSiteratively(0));
console.log(graph.BFS(4));

// graph.removeEdge(0, 2);
// console.log(graph);

// graph.removeVertex(1);
// console.log(graph);
