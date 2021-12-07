function minAndMaxArray(array) {
  let minNmax = [];
  let min = Infinity;
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) (min = array[i]), (minNmax[0] = min);
    if (max < array[i]) (max = array[i]), (minNmax[1] = max);
  }
  return minNmax;
}

function main() {
  let array = [12, 29, 6, 90, 55, 101, 24];
  console.log(minAndMaxArray(array));
}

main();
