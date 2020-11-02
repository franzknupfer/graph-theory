import Graph from '../src/graph.js';

describe('depth-first search', () => {

  let graph = new Graph();
  graph.addNode("Jasmine");
  graph.addNode("Ada");
  graph.addNode("Lydia");
  graph.addNode("Rose");
  graph.addNode("Dylan");
  graph.addNode("Allison");
  graph.addNode("Thomas");
  graph.addNode("Sarah");
  graph.createEdge("Jasmine", "Ada");
  graph.createEdge("Jasmine", "Lydia");
  graph.createEdge("Jasmine", "Rose");
  graph.createEdge("Ada", "Dylan");
  graph.createEdge("Lydia", "Ada");
  graph.createEdge("Dylan", "Allison");
  graph.createEdge("Lydia", "Thomas");

  test('should check if Ada is reachable from Jasmine', () => {
    expect(graph.reachable("Jasmine", "Ada")).toEqual(true);
  });

  test('should check if Thomas is reachable from Jasmine', () => {
    expect(graph.reachable("Jasmine", "Thomas")).toEqual(true);
  });

  test('should return false if the target node does not exist', () => {
    expect(graph.reachable("Jasmine", "Albert")).toEqual(false);
  });

  test('should return false if the starting node does not exist', () => {
    expect(graph.reachable("Albert", "Thomas")).toEqual(false);
  });

  test('should return false if the target node can not be reached from the starting node', () => {
    expect(graph.reachable("Jasmine", "Sarah")).toEqual(false);
  });
});