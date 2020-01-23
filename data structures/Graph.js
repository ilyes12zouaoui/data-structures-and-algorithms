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
}

/*
graph to create: 

    0 - 3
   / \
  1 - 2

*/

let graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(0, 3);
graph.addEdge(1, 2);

console.log(graph);

graph.removeEdge(0, 2);
console.log(graph);

graph.removeVertex(1);
console.log(graph);
