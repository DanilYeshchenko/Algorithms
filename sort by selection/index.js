function sortBySelection(array) {
  for (i in array) {
      max = i;

      for (let j = i; j < array.length; j++) {
          if (array[max] < array[j]) max = j;
      }

      if (max != i) {
          temp = array[i];
          array[i] = array[max];
          array[max] = temp;
      }
  }
  return array;
}

console.log(sortBySelection([11, 3, 52, 23, 9, -3, 99, -23, 12, 3, 6]));
