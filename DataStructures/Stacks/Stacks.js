function main() {
  let stack = [1, 2, 3];
  let x = 4;
  let y = 5;

  stack.push(x);
  console.log(stack);
  stack.push(y);
  console.log(stack);
  console.log(stack.pop());
  console.log(stack);
  console.log(stack.pop());
  console.log(stack);

  //best approach to append an immutable string throughout your program
  //O(n) to turn string to array
  //O(1) to append to that array
  //O(n) to convert back to string
  let strArr = [];
  let str = "Hello";
  for (letter in str) {
    strArr.push(str[letter]);
  }
  console.log(strArr);
}

main();
