function quicksort(array) {
  if (array.length < 2) return array;

  let privot = array[0],
    less = [],
    greater = [];

  for (i in array) {
    if (array[i] <= privot)
      less.push(array[i]);

    if (array[i] > privot)
      greater.push(array[i]);
  }

  return [...quicksort(less), privot, ...quicksort(greater)];
}


console.log(quicksort([16, 33, 1, -2, 5, 15, 8, 36, 19, 24, -7, 21, 23, 4, 33, 40]));
