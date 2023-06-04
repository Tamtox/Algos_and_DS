// Linked list - is a linear collection of data elements, called nodes, each pointing to the next node by means of a pointer.
// Memory is not stored in a contiguous block, but rather each node points to the next node.

class ListNode {
  constructor(public data: number, public next: ListNode | null = null) {}
  append(data: number) {
    if (this.next === null) {
      this.next = new ListNode(data);
    }
  }
  listValues() {
    const values = [];
    let node: ListNode | null = this;
    while (node !== null) {
      values.push(node.data);
      node = node.next;
    }
    return values;
  }
}

// Stack - linked list where elements are added and removed from the top.

// Queue - linked list where elements are added to the back and removed from the front.
