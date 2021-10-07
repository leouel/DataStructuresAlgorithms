function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(i, min, array);
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
  console.log(array);
}

main();
