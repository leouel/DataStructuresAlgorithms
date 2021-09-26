class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertAtBeginning = (value) => {
    let node = new Node(value);
    let current = this.head;
    if (!current) {
      node.next = current;
      this.head = node;
      this.tail = node;
    } else {
      node.next = current;
      current.prev = node;
      this.head = node;
    }
    this.size++;
  };

  insertAtEnd = (value) => {
    let node = new Node(value);
    let current = this.head;
    if (!current) {
      this.head = node;
      this.tail = node;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      node.prev = current;
      this.tail = node;
    }
    this.size++;
  };

  insertAtIndex = (value, index) => {
    if (index < 0 && index > this.size) {
      console.log(`Please enter valid index.`);
    } else {
      let node = new Node(value);
      let current = this.head;
      let prev;
      if (index === 0) {
        node.next = this.head;
        current.prev = node;
        this.head = node;
      } else if (index === this.size) {
        node.prev = this.tail;
        this.tail = node;
      } else {
        for (let i = 0; i < index; i++) {
          prev = current;
          current = current.next;
        }
        prev.next = node;
        node.next = current;
        node.prev = prev;
      }
    }
    this.size++;
  };
  //removeAtBeginning = (value) => {}
  //removeAtEnd = (value) => {}
  //removeAtIndex = (value, index) => {}
  printDLL = () => {
    let current = this.head;
    if (!current) {
      console.log(`Doubly Linked List is empty.`);
    } else {
      let list = "";
      while (current) {
        if (!current.next) {
          list += `${current.value}`;
        } else {
          list += `${current.value} <-> `;
        }
        current = current.next;
      }
      console.log(list);
    }
  };
}

function main() {
  let doublyLinkedList = new DoublyLinkedList();
  doublyLinkedList.insertAtBeginning(7);
  doublyLinkedList.printDLL();
  doublyLinkedList.insertAtBeginning(3);
  doublyLinkedList.printDLL();
  doublyLinkedList.insertAtEnd(5);
  doublyLinkedList.insertAtEnd(9);
  doublyLinkedList.insertAtEnd(2);
  doublyLinkedList.insertAtEnd(6);
  doublyLinkedList.printDLL();
  console.log("Head:", doublyLinkedList.head.value);
  console.log("Tail:", doublyLinkedList.tail.value);
}

main();
