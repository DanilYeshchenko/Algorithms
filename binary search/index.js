function binarySearch(number, array) {
  let low = 0, high = array.length - 1;

  while (low <= high) {
      middle = Math.floor((low + high) / 2);
      if (array[middle] == number) return middle;
      if (array[middle] > number) high = --middle;
      else low = ++middle;
  }

  return -1;
}

function recursiveBinarySearch(number, array, low, high) {
  if (low > high) return null;
  let middle = Math.floor((low + high) / 2);
  if (array[middle] == number) return middle;
  if (array[middle] < number) return recursiveBinarySearch(number, array, ++middle, high);
  else return recursiveBinarySearch(number, array, low, --middle);
}

let array = [],
  number = 50; // the number we are looking for

for (let index = 0; index < 1000; index++) {
  array[index] = index + 1;
}

console.log('Index: ' + binarySearch(number, array));
console.log('Index: ' + recursiveBinarySearch(number, array, 0, array.length - 1));
