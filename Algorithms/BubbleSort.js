function bubbleSort(array) {
  let isSorted = false;
  let counter = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        isSorted = false;
      }
    }
    counter++;
  }
  return array;
}

// helper function
function swap(i, j, array) {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

function main() {
  let array = [1, 7, 8, 2, 10, 5, 3, 6, 4, 9];
  console.log(`Before:`);
  console.log(array);

  console.log(`After:`);
  console.log(array);
}

main();
