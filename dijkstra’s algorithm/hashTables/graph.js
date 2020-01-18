let graph = {};

graph['start'] = {};
graph['start']['A'] = 4;
graph['start']['B'] = 9;
graph['start']['C'] = 7;

graph['A'] = {};
graph['A']['D'] = 11;
graph['A']['E'] = 3;
graph['A']['B'] = 5;

graph['B'] = {};
graph['B']['F'] = 1;

graph['C'] = {};
graph['C']['B'] = 5;
graph['C']['G'] = 8;

graph['D'] = {};
graph['D']['I'] = 10;
graph['D']['J'] = 7;

graph['E'] = {};
graph['E']['D'] = 3;
graph['E']['J'] = 11;
graph['E']['F'] = 2;

graph['F'] = {};
graph['F']['E'] = 2;
graph['F']['J'] = 11;
graph['F']['end'] = 16;
graph['F']['H'] = 4;

graph['G'] = {};
graph['G']['F'] = 8;
graph['G']['H'] = 7;

graph['H'] = {};
graph['H']['end'] = 9;

graph['I'] = {};
graph['I']['J'] = 6;
graph['I']['end'] = 15;

graph['J'] = {};
graph['J']['I'] = 6;
graph['J']['end'] = 9;

graph['end'] = {};

module.exports = graph;
