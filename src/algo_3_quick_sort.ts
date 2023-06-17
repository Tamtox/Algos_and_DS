// Divide and conquer algorithms are recursive algorithms. They break the problem down into smaller problems and solve them.
// Merge sort and quick sort are examples of divide and conquer algorithms.

// Quick sort is a divide and conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.

const quickSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
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
