function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

function fib2(number) {
  let n = [0, 1];
  if (number < 2) return n[number];
  for (let i = 2; i <= number; i++) {
    n[i] = n[i - 1] + n[i - 2];
  }
  return n[number];
}

function main() {
  console.log(fib(5));
  console.log(fib2(5));
}

main();
