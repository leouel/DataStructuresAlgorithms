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

  //adds at the end of list
  add(value) {
    let node = new Node(value);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      //how does current have next?
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAtBeginning = (value) => {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  };

  insertAtEnd = (value) => {
    let node = new Node(value);
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.size++;
  };

  //inserts at index
  insertAt = (value, index) => {
    if (index < 0 || index > this.size) {
      console.alert(`Please enter valid index!`);
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
        // node: |9|next|-> |?|next|
        node.next = current;
        prev.next = node;
        // 1. node.next = current => |9|next|-> |2|next|
        //                                       ^current
        //                                       ^node.next
        // 2. prev.next ((old) current) = node => |1|next|-> |9|next|-> |2|next|-> ...
        //                                         ^prev      ^node      ^node.next
        //                                                    ^prev.next
      }
      this.size++;
    }
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
          list += `${current.value}->`;
        }
        current = current.next;
      }
      console.log(list);
    }
  };
}

function main() {
  let linkedList = new LinkedList();
  // linkedList.printLL();
  linkedList.add(3);
  linkedList.insertAtEnd(1);
  linkedList.insertAtEnd(2);
  linkedList.insertAtEnd(4);
  linkedList.insertAtEnd(8);
  linkedList.insertAtEnd(12);
  linkedList.insertAtEnd(7);
  linkedList.printLL();
  linkedList.insertAt(9, 2);
  linkedList.printLL();
  linkedList.insertAtBeginning(25);
  linkedList.printLL();
  linkedList.insertAtBeginning(45);
  linkedList.printLL();
}

main();
