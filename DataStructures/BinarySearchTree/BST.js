class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let current = this;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current = new BST(value);
          break;
        } else {
          current = current.left;
        }
      } else {
        if (current.right === null) {
          current = new BST(value);
          break;
        } else {
          current = current.right;
        }
      }
    }
    return this;
  }

  contains(value) {
    let current = this;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

function main() {
  let bst = new BST(10);
  let bst2 = new BST(15);
  let bst3 = new BST(5);
  let bst4 = new BST(2);
  let bst5 = new BST(6);
  let bst6 = new BST(13);
  let bst7 = new BST(22);

  bst.insert(bst2);
  console.log(bst);
}

main();
