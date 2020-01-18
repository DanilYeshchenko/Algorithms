const searchSeller = require('./searchSeller');
const searchShortestPath = require('./searchShortestPath');

let graph = new Object;

graph['Danil'] = ['Oleg', 'Andrey', 'Artem'];
graph['Oleg'] = ['Andrey', 'Jhon'];
graph['Andrey'] = ['Oleg', 'William'];
graph['Artem'] = ['Bob'];
graph['Jhon'] = ['Oleg', 'William'];
graph['William'] = ['Andrey', 'Jhon'];
graph['Bob'] = ['Artem'];

searchSeller(graph, 'Danil');
searchShortestPath(graph, 'Danil', 'Bob');
