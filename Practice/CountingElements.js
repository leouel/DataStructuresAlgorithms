function countingElements(array) {
  let amounts = {};
  for (let i = 0; i < array.length; i++) {
    if (array[i] in amounts) {
      amounts[array[i]] += 1;
    } else {
      amounts[array[i]] = 1;
    }
  }
  return amounts;
}

function main() {
  let array = [10, 10, 15, 20, 10, 15, 20, 20, 15, 9];
  console.log(countingElements(array));
}

main();
