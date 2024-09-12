//use a class to create node objects
//class has a constructor function for onject settings/specs
//this keyword - provides a way for the object to reference itself

class Node {
  constructor(value) {
    this.value = value;
    this.next = null; //next is set to null and is the tail of the list
  }
}

const myNode = new Node(4);
console.log(myNode);

//Methods we can use
//Methods we will use in the interface: (1) add to tail (2) get from index in our list (3) delete a value from the list

//Linked lists

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  //ADD TO TAIL METHOD
  addToTail(value) {
    let current = this;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new Node(value);
  }
}

const head = new Node(1);
head.addToTail(2);
head.addToTail(3);
head.addToTail(4);

console.log(head);

//retrieve a value using an index
//unlike arrays we cant use direct indexing to retrieve a node
//decrement our index everytime we advance:

//retrieve a value using an index
