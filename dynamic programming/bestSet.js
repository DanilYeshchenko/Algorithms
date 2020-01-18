module.exports = function (items, size) {
  const set = [];
  for (let i = 0; i < Object.keys(items).length; i++)
    set[i] = [];

  for (x in items) {
    const i = items[x].id;
    const item = items[x];

    for (let j = 0; j < size; j++) {
      if (item.weight > j + 1) {
        if (!i) set[i][j] = 0;
        else set[i][j] = set[i - 1][j];
      } else {
        if (!i) set[i][j] = item.price;
        else {
          const lastMax = set[i - 1][j];
          let currentMax;
          if (item.weight < j + 1) currentMax = item.price + set[i - 1][j - item.weight];
          else currentMax = item.price;
          set[i][j] = Math.max(lastMax, currentMax);
        }
      }
    }
  }

  console.log(set); // test

  const bestPrice = [...set.pop()].pop();
  return bestPrice;
}
