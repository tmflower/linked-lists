/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {   
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
      this.length = 1;
    }

    else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = new Node(val);
      this.tail = currentNode.next;
      this.length += 1;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
      this.length = 1;
    }
    else {
      let currentNode = this.head;
      this.head = new Node(val);
      this.head.next = currentNode;
      while (this.tail.next) {
        this.tail = this.tail.next;
      }
      this.length = this.length + 1;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) {
      return "Error: list is empty";
    }
    let tailVal = this.tail.val;
    let previous = this.head;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
      this.length = 0;
    }
    else {
      for (let i = 0; i < this.length-1; i++) {
        if (previous.next && previous.next !== this.tail) {
          previous = previous.next;
        }
        this.tail = previous;
        this.length -= 1;
      }
    }
    return tailVal;
  }
  

  /** shift(): return & remove first item. */

  shift() {
    const originalHead = this.head;
    const valToReturn = originalHead.val;

      if (this.length > 1) {
        this.head = this.head.next;      
        this.length -= 1;
      }
      else if (this.length === 1) {
        this.tail = null;
        this.head = null;
        this.length -= 1;
      }
      else if (this.length === 0) {
        return ("Error: empty list.")
      }
      return valToReturn;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    let currentNodeIndex = 0;
    if (idx === 0) {
      return this.head.val;
    }
    else {
      while (currentNode.next) {        
        currentNode = currentNode.next;
        currentNodeIndex += 1;
        if (currentNodeIndex === idx) {
          return currentNode.val;
        }
      }
      return "Error: invalid index"
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = this.head;
    let currentNodeIndex = 0;
    if (idx === 0) {
      this.head.val = val;
    }
    else {
      while (currentNode.next) {        
        currentNode = currentNode.next;
        currentNodeIndex += 1;
        if (currentNodeIndex === idx) {
          currentNode.val = val;
        }
      }
      return "Error: invalid index"
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      return "Error: invalid index"
    }
    else if (idx === 0) {
      this.unshift(val);
    }
    else if (idx === this.length) {
      this.push(val);
    }
    else if (idx > 0) {
      let newNode = new Node(val);
      let previous = this.head;
      for (let i = 0; i < idx -1 ; i++) {
        previous = previous.next;
      }
      newNode.next = previous.next;
      previous.next = newNode;
      this.length += 1;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let currentNode = this.head;
    let currentNodeIndex = 0;
    if (idx < 0 || idx > this.length) {
      return "Error: invalid index"
    }
    else if (idx === 0) {
      this.shift();
    }
    else if (idx === this.length - 1) {
      this.pop();
    }
    else {
      while (currentNode.next) {
        currentNode.next = currentNode;
        currentNodeIndex += 1;
        if (currentNodeIndex === idx) {
          let valToReturn = currentNode.val;
          currentNode.next = currentNode.next.next;
          currentNode = null;
          this.length -= 1;
          return valToReturn;
        }
      }
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let sum = 0;
    let val = 0;
    let count = 0;
    if (this.length === 0) {
      return 0;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      val = currentNode.val;
      sum += val;
      count += 1;
      currentNode = currentNode.next;
    }
    sum += this.tail.val;
    count +=1;
    return sum/count;
  }
}

module.exports = LinkedList;
