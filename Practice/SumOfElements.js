function sumOfElements(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function main() {
  let array = [15, 12, 13, 10];
  console.log(sumOfElements(array));
}

main();
