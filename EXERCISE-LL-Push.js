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

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    // create a new node
    const newNode = new Node(value);
    // check if linked list is empty
    if (!this.head) {
      // set head and tail to the new node
      this.head = newNode;
      this.tail = newNode;
      //    if linked list is not empty
    } else {
      // set the next property of current tail to the new node
      this.tail.next = newNode;
      //   update the tail to be the new node
      this.tail = newNode;
    }
    // increment the length
    this.length++;
    return this;
  }
}

function test() {
  let myLinkedList = new LinkedList(1);
  myLinkedList.makeEmpty();
  myLinkedList.push(1);
  myLinkedList.push(2);

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
    Head: 1
    Tail: 2
    Length: 2

    Linked List:
    1
    2

*/
