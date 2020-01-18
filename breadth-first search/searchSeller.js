function personIsSeller(person) {
    if (person === 'Bob') return true;
    else false;
}

module.exports = function (graph, name) {
    let checked = [],                                    // проверенные
        queue = [];                                      // очередь

    queue.push(...graph[name])                           // добавление элементов в очередь

    while (queue.length > 0) {                           // пока очередь не станет пустой
        person = queue.shift();                          // достаем элемент из очереди
        if (checked.indexOf(person) === -1) {            // если проверяем человека первый раз
            if (personIsSeller(person)) {                // если человек продавец
                console.log('Yes! We did it! ' + person + ' is seller');
                return true;
            }
            queue.push(...graph[person]);                // добавление элементов в очередь
            checked = [...checked, person];              // добавление человека в список проверенных
        }
    }

    return false
}
