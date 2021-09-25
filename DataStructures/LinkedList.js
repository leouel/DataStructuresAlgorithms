class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.size = 0;
  }

  add(value){
    let node = new Node(value);
    let current;

    if(this.head === null){
      this.head = node;
    } else {
      current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  
}