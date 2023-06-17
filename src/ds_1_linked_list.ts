// Linked list - is a linear collection of data elements, called nodes, each pointing to the next node by means of a pointer.
// Memory is not stored in a contiguous block, but rather each node points to the next node.

class ListNode {
  data: number;
  next: ListNode | null;
  constructor(data: number, next: ListNode | null = null) {
    this.data = data;
    this.next = next;
  }
  prepend(data: number) {
    const newNode = new ListNode(this.data, this.next);
    this.data = data;
    this.next = newNode;
  }
  append(data: number) {
    const newNode = new ListNode(data);
    let node: ListNode | null = this.next;
    if (node === null) {
      this.next = newNode;
    } else {
      while (node.next !== null) {
        node = node.next;
      }
      node.next = newNode;
    }
  }
}

// Stack - linked list where elements are added and removed from the top.

// Queue - linked list where elements are added to the back and removed from the front.
