class Node {
  constructor(value) {
    this.value = value; // Initialize the node's value
    this.next = null; // Set the next node reference to null
  }

  // Method to add a new value to the tail of the linked list
  addToTail(value) {
    let current = this; // Start from the current node

    // Traverse the list until we find the last node
    while (current.next !== null) {
      current = current.next;
    }

    // Add the new node at the end of the list
    current.next = new Node(value);
  }

  // Method to retrieve a value at a specific index
  getAtIndex(index) {
    let current = this; // Start from the current node
    let currentIndex = 0; // To keep track of the current index

    // Traverse the list until we reach the desired index or the end of the list
    while (current !== null && currentIndex < index) {
      current = current.next;
      currentIndex++;
    }

    // If the current node is not null, we found the node at the index
    if (current !== null) {
      return current.value; // Return the value of the node
    } else {
      return false; // Return false if the index is out of bounds
    }
  }
}

// Example usage
const head = new Node(1);
head.addToTail(2);
head.addToTail(3);
head.addToTail(4);

console.log(head.getAtIndex(2)); // Output: 3
console.log(head.getAtIndex(5)); // Output: false
