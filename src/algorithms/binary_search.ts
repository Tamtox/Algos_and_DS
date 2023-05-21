// Binary search is a search algorithm that finds the position of a target value within a sorted array by repeatedly dividing the search interval in half.

// Time Complexity: O(log n)
// Space Complexity: O(1)

const binarySearch = (arr: number[], target: number): number => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (arr[middle] !== target && left <= right) {
    if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }

    middle = Math.floor((left + right) / 2);
  }

  return arr[middle] === target ? middle : -1;
};
