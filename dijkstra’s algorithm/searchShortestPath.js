var processed = []; // проверенные узлы

/* Поиск ближайшего к началу узла */
function findLowestCostNode(costs) {
    lowestCost = Infinity;
    lowestCostNode = null;

    for (let node in costs) {
        if (costs[node] < lowestCost && processed.indexOf(node) === -1) {
            lowestCost = costs[node];
            lowestCostNode = node;
        }
    }

    processed = [...processed, lowestCostNode];
    return lowestCostNode;
}

/* Обновления списков стоимости и родителей */
function updateCostsAndParents(graph, costs, parents) {
    let node = findLowestCostNode(costs, processed);

    while (node) {
        cost = costs[node];
        neighbors = graph[node];

        for (let n in neighbors) {
            newCost = cost + neighbors[n];
            if (newCost < costs[n]) {
                costs[n] = newCost;
                parents[n] = node;
            }
        }

        node = findLowestCostNode(costs, processed);
    }
}

/* Создание кратчайшего пути */
function creatShortestPath(parents) {
    let shortestPath = ['end'],
        parent = parents['end'];
    while (parent) {
        shortestPath = [parent, ...shortestPath];
        parent = parents[parent];
    }
    return shortestPath;
}

module.exports = function (graph, costs, parents) {
    updateCostsAndParents(graph, costs, parents);
    return creatShortestPath(parents);
}