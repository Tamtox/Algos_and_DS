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

// Definition for singly-linked list.
class ListNodeEx {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// function mergeTwoLists(list1: ListNodeEx | null, list2: ListNodeEx | null): ListNodeEx | null {
//   if (!list1 && !list2) {
//     return null;
//   } else if (!list1) {
//     return list2;
//   } else if (!list2) {
//     return list1;
//   }
//   let resultHead: ListNodeEx | null = null;
//   let resultCurrent: ListNodeEx | null = resultHead;
//   while (list1.next !== null || list2.next !== null) {
//     const val1 = list1.val;
//     const val2 = list2.val;
//     const next1 = list1.next;
//     const next2 = list2.next;
//     if (val1 && val2) {
//       if (val1 >= val2) {
//         if (resultCurrent === null) {
//           resultCurrent = new ListNode(val2, null);
//           resultHead = resultCurrent;
//           resultCurrent.next = new ListNode(val1, null);
//           resultCurrent = resultCurrent.next;
//         } else {
//           resultCurrent.next = new ListNode(val2, null);
//           resultCurrent = resultCurrent.next;
//           list2 = list2.next;
//           resultCurrent.next = new ListNode(val1, null);
//           resultCurrent = resultCurrent.next;
//           list1 = list1.next;
//         }
//       } else {
//         if (resultCurrent === null) {
//           resultCurrent = new ListNode(val1, null);
//           resultHead = resultCurrent;
//           resultCurrent.next = new ListNode(val2, null);
//           resultCurrent = resultCurrent.next;
//         } else {
//           resultCurrent.next = new ListNode(val1, null);
//           resultCurrent = resultCurrent.next;
//           list1 = list1.next;
//           resultCurrent.next = new ListNode(val2, null);
//           resultCurrent = resultCurrent.next;
//           list2 = list2.next;
//         }
//       }
//     } else {
//       if (!val1 && !val2) {
//         break;
//       } else {
//         //
//       }
//     }
//   }
//   return resultHead;
// }
