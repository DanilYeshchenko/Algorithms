const stations = require('./sets');

module.exports = function (states) {
  finalStations = new Set();
  statesNeeded = new Set(states);

  while (statesNeeded.size) {
    bestStation = null;
    statesCovered = new Set();

    for (station in stations) {
      covered = new Set([...statesNeeded].filter(x => stations[station].has(x)));
      if (covered.size > statesCovered.size) {
        bestStation = station;
        statesCovered = covered;
      }
    }
    finalStations.add(bestStation);
    statesNeeded = new Set([...statesNeeded].filter(x => !statesCovered.has(x)));
  }
  return finalStations;
}
