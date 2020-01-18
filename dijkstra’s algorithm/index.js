const graph = require('./hashTables/graph');
const costs = require('./hashTables/costs');
const parents = require('./hashTables/parents');
const searchShortestPath = require('./searchShortestPath');

console.log(searchShortestPath(graph, costs, parents));
