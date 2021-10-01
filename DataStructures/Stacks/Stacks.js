class Stack {
  constructor() {
    this.arr = [];
    this.top = -1;
  }

  push = (value) => {
    this.arr.push(value);
    this.top++;
  };

  pop = () => {
    let popValue = this.arr.pop();
    this.top--;
    return popValue;
  };

  peek = () => {
    return this.arr[this.top];
  };

  search = (value) => {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] === value) {
        return this.arr[i];
      }
    }
    console.log(`Value does not exists in the Stack.`);
  };

  printStack = () => {
    for (let i = this.arr.length - 1; i >= 0; i--) {
      console.log(this.arr[i]);
    }
  };
}

function main() {
  let myStack = new Stack();
  myStack.push(3);
  myStack.push(2);
  myStack.push(4);
  myStack.printStack();
  let popped = myStack.pop();
  console.log(`Pop() = ${popped}`);
  myStack.push(9);
  let peeked = myStack.peek();
  console.log(`Peek() = ${peeked}`);
  let searchVal = 3;
  console.log(myStack.search(searchVal));
}

main();
