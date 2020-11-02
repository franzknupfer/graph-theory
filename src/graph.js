export default class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  hasNode(name) {
    if (this.adjacencyList.get(name)) {
      return true;
    }
    return false;
  }

  addNode(name) {
    this.adjacencyList.set(name, new Set());
  }

  hasEdge(node1, node2) {
    if (this.adjacencyList.get(node1).has(node2)) {
      return true
    }
    return false;
  }

  createEdge(node1, node2) {
    this.adjacencyList.get(node1).add(node2);
    this.adjacencyList.get(node2).add(node1);
  }

  removeEdge(node1, node2) {
    this.adjacencyList.get(node1).delete(node2);
    this.adjacencyList.get(node2).delete(node1);
  }

  getEdges(name) {
    if (this.adjacencyList.has(name)) {
      let edges = [];
      this.adjacencyList.get(name).forEach(function(element) {
        edges.push(element);
      });
      return edges;
    }
    return null;
  }

  removeNode(name) {
    if (this.adjacencyList.has(name)) {
      this.adjacencyList.get(name).forEach((element) => {
        this.adjacencyList.get(element).delete(name);
      });
      this.adjacencyList.delete(name);
    }
  }

  reachable(startingNode, targetNode) {
    if ((!this.adjacencyList.has(startingNode)) || (!this.adjacencyList.has(targetNode))) {
      return false;
    }
    let stack = [startingNode];
    let traversedNodes = new Set();
    while (stack.length) {
      const currentNode = stack.shift();
      if (currentNode === targetNode) {
        return true;
      } else {
        traversedNodes.add(currentNode);
        const adjacencyList = this.adjacencyList.get(currentNode);
        adjacencyList.forEach(function(node) {
          if (!traversedNodes.has(node)) {
            stack.unshift(node);
          }
        });
      }
    }
    return false;
  }
}