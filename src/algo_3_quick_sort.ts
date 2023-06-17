// Divide and conquer algorithms are recursive algorithms. They break the problem down into smaller problems and solve them.
// Merge sort and quick sort are examples of divide and conquer algorithms.

// How to find recursive case?
// 1. The function is called with a smaller input.
// 2. The function is called multiple times with different inputs.

// Quick sort is a divide and conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.
// Merge sort has worse space complexity than quick sort, but quick sort canc have O(n2) worst time complexity.

const quickSort = (arr: number[]): number[] => {
  if (arr.length < 2) return arr;
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  // Partition - move all elements smaller than pivot to the left and all elements greater than pivot to the right.
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

const sorted = quickSort([5, 3, 7, 1, 9, 2, 4, 6, 8]); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sorted);

const sumArray = (arr: number[]): number => {
  if (arr.length <= 1) return arr[0];
  const value = arr[arr.length - 1];
  return value + sumArray(arr.slice(0, arr.length - 1));
};

console.log(sumArray([1, 2, 3, 14, 67, 12414, 5, -9, 22]));
