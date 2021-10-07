function reverseArray(array) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    swap(left, right, array);
    left++;
    right--;
  }
  return array;
}

function swap(i, j, array) {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

function main() {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  reverseArray(array);
  console.log(array);
}

main();
