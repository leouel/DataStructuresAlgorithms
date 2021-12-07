function sumOfDigit(num) {
  let sum = 0;
  while (num > 1) {
    sum += Math.floor(num % 10);
    Math.floor((num /= 10));
  }
  return sum;
}

function main() {
  let num = 687;
  console.log(sumOfDigit(num));
}

main();
