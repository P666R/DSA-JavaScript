class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    // create a new node
    const newNode = new Node(value);
    // check if linked list is empty
    if (!this.head) {
      // if empty set head and tail to point to the new node
      this.head = newNode;
      this.tail = newNode;
      //   if linked list is not empty
    } else {
      // point the last node to the new node
      this.tail.next = newNode;
      //   set the tail to point to the new node
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log("Tail: null");
    } else {
      console.log("Tail: " + this.tail.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }
}

function test() {
  let myLinkedList = new LinkedList(7);
  myLinkedList.push(4);

  myLinkedList.getHead();
  myLinkedList.getTail();
  myLinkedList.getLength();
  console.log("\nLinked List:");
  myLinkedList.printList();
}

test();

/*
    EXPECTED OUTPUT:
    ----------------
    Head: 4
    Tail: 4
    Length: 1
    
    Linked List:
    4

*/
