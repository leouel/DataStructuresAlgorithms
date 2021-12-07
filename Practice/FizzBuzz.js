function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
      console.log("Buzz");
    } else if (i % 5 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}

function main() {
  let number = 15;
  fizzBuzz(number);
}

main();
