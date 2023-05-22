// Binary search is a search algorithm that finds the position of a target value within a sorted array by repeatedly dividing the search interval in half.

// Time Complexity: O(log n)
// Space Complexity: O(1)

const binarySearch = (arr: number[], target: number): number => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== target && start <= end) {
    if (target < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }

    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === target ? middle : -1;
};

// Exrecise 1 - Name Search

const names = ['Alex', 'Brian', 'Julia', 'Kojin', 'Nabil', 'Nick', 'Winnie'];

const nameSearch = (namesList: string[], targetName: string) => {
  const start = 0;
  const end = namesList.length - 1;
  const index: number | null = null;

  return index;
};
