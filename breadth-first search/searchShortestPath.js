module.exports = function (graph, person, searchPerson) {
    let level = 0,
        checked = [],
        queue = [];

    queue.push(...graph[person])

    while (queue.length > 0) {
        let queueCurrentLevel = [...queue];
        level++;

        while (queueCurrentLevel.length > 0) {
            let checkPerson = queueCurrentLevel.shift();
            queue.shift();

            if (checked.indexOf(checkPerson) === -1) {
                if (checkPerson == searchPerson) {
                    console.log(`${searchPerson} находится на ${level} уровне`);
                    return level;
                } else {
                    checked = [...checked, checkPerson];
                    queue.push(...graph[checkPerson]);
                }
            }
        }
    }

    console.log(`Объект ${person} и объект ${searchPerson} не соединены между собой.`);
    return -1;
}
