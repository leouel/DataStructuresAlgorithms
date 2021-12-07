function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        swap(j, j - 1, array);
      }
    }
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
  insertionSort(array);
  console.log(array);
}

main();
