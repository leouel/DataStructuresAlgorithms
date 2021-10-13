function quickSort(array) {
  quickSortHelper(array, 0, array.length - 1);
  return array;
}

function quickSortHelper(array, startIdx, endIdx) {
  if (startIdx >= endIdx) return;
  const pivot = startIdx;
  let leftIdx = startIdx + 1;
  let rightIdx = endIdx;
  while (leftIdx <= rightIdx) {
    if (array[leftIdx] > array[pivot] && array[rightIdx] < array[pivot]) {
      swap(leftIdx, rightIdx, array);
    }
    if (array[leftIdx] <= array[pivot]) leftIdx++;
    if (array[rightIdx] >= array[pivot]) rightIdx--;
  }
  swap(rightIdx, pivot, array);
  const leftSubArrayIsSmaller =
    rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
  if (leftSubArrayIsSmaller) {
    quickSortHelper(array, startIdx, rightIdx - 1);
    quickSortHelper(array, rightIdx + 1, endIdx);
  } else {
    quickSortHelper(array, rightIdx + 1, endIdx);
    quickSortHelper(array, startIdx, rightIdx - 1);
  }
}

function swap(i, j, array) {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

function main() {
  let array = [8, 5, 2, 9, 7, 6, 3, 1, 4];
  console.log(quickSort(array));
}

main();
