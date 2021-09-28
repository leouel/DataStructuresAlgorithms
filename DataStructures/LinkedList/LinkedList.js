class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtBeginning = (value) => {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  };

  insertAtEnd = (value) => {
    let node = new Node(value);
    //*Note: when traversal is required, keeping track of current node is REQUIRED!
    //       since Linked Lists don't have indeces, you always start from the head.
    let current = this.head;
    if (!current) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  };

  //inserts at index
  insertAt = (value, index) => {
    if (index < 0 || index > this.size) {
      console.log(`Please enter valid index!`);
    } else {
      // value = 9
      let node = new Node(value);
      let prev;
      let current = this.head;
      if (index === 0) {
        //node.next points to current head
        node.next = this.head;
        //switches head to new node
        this.head = node;
      } else {
        // value = 9
        // index = 2
        for (let i = 0; i < index; i++) {
          // |3|next|-> |1|next|-> |2|next|-> |4|next|-> |8|next|-> |12|next|-> |7|next|-> null
          //    0          1          2           3         4           5          6
          // i === 0
          // currently: current = this.head => |3|next|-> |1|next|
          //                                    ^current   ^current.next
          // 1. prev = current => |3|next|-> |1|next|
          //                       ^current   ^current.next
          //                       ^prev      ^prev.next
          // 2. current = current.next => |1|next|
          //                               ^current.next
          //                               ^current
          prev = current;
          current = current.next;
          // i === 1
          // currently: current = (old) current.next => |1|next|-> |2|next|
          //                                       (old) ^current.next
          //                                       (new) ^current   ^current.next
          // 1. prev = current => |1|next|
          // 2. current = current.next => |2|next|
        }
        prev.next = node;
        // node: |9|next|-> |?|next|
        node.next = current;
        // 1. prev.next ((old) current) = node => |1|next|-> |9|next|-> |2|next|-> ...
        //                                         ^prev      ^node      ^node.next
        //                                                    ^prev.next
        // 2. node.next = current => |9|next|-> |2|next|
        //                                       ^current
        //                                       ^node.next
      }
      this.size++;
    }
  };

  removeAtBeginning = () => {
    let current = this.head;
    if (!current) {
      console.log("Linked List is empty.");
    } else {
      this.head = current.next;
    }
    this.size--;
  };

  removeAtIndex = (index) => {
    let current = this.head;
    let prev;
    if (index < 0 || index > this.size) {
      console.log("Cannot remove element. Out of bounds.");
    } else {
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
    }
    this.size--;
  };

  removeAtEnd = () => {
    let current = this.head;
    let prev;
    if (!current) {
      console.log("Cannot remove element. Linked List is empty.");
    } else {
      // 1->2->3->4
      while (current.next) {
        prev = current;
        current = current.next;
      }
      prev.next = null;
    }
    this.size--;
  };

  searchValue = (value) => {
    let current = this.head;
    let count = 0;
    if (!current) {
      console.log(`Linked List is empty.`);
    } else {
      while (current.value !== value) {
        count++;
        current = current.next;
      }
      if (current.value === value) {
        console.log(`${value} is at index: ${count}`);
      } else {
        console.log(`Value ${value} does not exist.`);
      }
    }
  };

  //   next = null;
  //   prev = null;
  //   [null]       |1|next| -> |3|next| -> |5|next| -> |7|next| -> null
  //                 ^current    ^current.next
  // 0                           ^next       ^next.next
  // 0   ^current.next
  // 0               ^prev
  // 0                           ^current    ^current.next
  // 1                                       ^next       ^next.next
  // 1               ^current.next
  // 1                           ^prev
  // 1                                       ^current    ^current.next
  // 1                                                   ^next       ^next.next
  // 2                           ^current.next
  // 2                                       ^prev
  // 2                                                   ^current   ^current.next
  // 3                                                              ^next       ^next.next
  // 3                                       ^current.next
  // 3                                                   ^prev
  // 3                                                              ^current
  // |7|next| -> |5|next| -> |3|next| -> |1|next| -> null
  reverseLinkedList = () => {
    let current = this.head;
    let next, prev;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    if (!current) this.head = prev;
  };

  isEmpty = () => {
    if (!this.head) return true;
    return false;
  };

  printLL = () => {
    if (!this.head) {
      console.log("Linked List is empty.");
    } else {
      let current = this.head;
      let list = "";
      while (current) {
        if (!current.next) {
          list += `${current.value}`;
        } else {
          list += `${current.value} -> `;
        }
        current = current.next;
      }
      console.log(list);
    }
  };

  currentHead = () => {
    return this.head.value;
  };

  currentSize = () => {
    return this.size;
  };
}

function main() {
  let linkedList = new LinkedList();
  let num = 9;
  let index = 2;
  console.log(`=> Inserting ${num} at index: ${index}...`);
  linkedList.insertAt(num, index);
  linkedList.printLL();
  console.log(`=> Inserting 25 at the beginning of Linked List...`);
  linkedList.insertAtBeginning(25);
  linkedList.printLL();
  console.log(`=> Inserting 45 at the beginning of Linked List...`);
  linkedList.insertAtBeginning(45);
  linkedList.printLL();
  console.log(`=> Inserting 3, 1, 2, 4, 8, 12, 7 at the end of Linked List...`);
  linkedList.insertAtEnd(3);
  linkedList.insertAtEnd(1);
  linkedList.insertAtEnd(2);
  linkedList.insertAtEnd(4);
  linkedList.insertAtEnd(8);
  linkedList.insertAtEnd(12);
  linkedList.insertAtEnd(7);
  linkedList.insertAtEnd(1);
  linkedList.printLL();
  console.log(`=> Inserting ${num} at index: ${index}...`);
  linkedList.insertAt(num, index);
  linkedList.printLL();
  console.log(`Current head of Linked List is: ${linkedList.currentHead()}`);
  console.log(`=> Removing element at the beginning of the Linked List...`);
  linkedList.removeAtBeginning();
  linkedList.printLL();
  console.log(`Current head of Linked List is: ${linkedList.currentHead()}`);
  console.log(`=> Removing element at the beginning of the Linked List...`);
  linkedList.removeAtBeginning();
  linkedList.printLL();
  console.log(`Current head of Linked List is: ${linkedList.currentHead()}`);
  console.log(`=> Removing element at index: 2 of the Linked List...`);
  linkedList.removeAtIndex(2);
  linkedList.printLL();
  console.log(`=> Removing element at the end of the Linked List...`);
  linkedList.removeAtEnd();
  linkedList.printLL();
  console.log(`=> Removing element at the end of the Linked List...`);
  linkedList.removeAtEnd();
  linkedList.printLL();
  console.log(`Current size of Linked List is: ${linkedList.currentSize()}`);
  linkedList.searchValue(3);
  console.log(linkedList.head);
  linkedList.reverseLinkedList();
  linkedList.printLL();
  console.log(linkedList.head);
}

main();
