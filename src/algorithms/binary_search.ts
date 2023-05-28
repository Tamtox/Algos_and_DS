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

// Big O Notation - time complexity of algorithm

// O(1) - constant time
// O(log n) - logarithmic time
// O(n) - linear time
// O(n log n) - linearithmic time
// O(n^2) - quadratic time
// O(2^n) - exponential time
// O(n!) - factorial time

// Exrecise 1 - Name Search

const names = ['Alex', 'Brian', 'Julia', 'Kojin', 'Nabil', 'Nick', 'Winnie'];

// Returns 0 if string a is alphabetically before string b, returns 1 if string b is alphabetically before string a, and returns -1 if the strings are equal.
const compareStrings = (a: string, b: string) => {
  const aLower = a.toLowerCase();
  const bLower = b.toLowerCase();
  for (let i = 0; i < aLower.length; i++) {
    if (bLower[i] === undefined) return 1;
    if (aLower[i] < bLower[i]) return 0;
    if (aLower[i] > bLower[i]) return 1;
  }
  return -1;
};

const nameSearch = (namesList: string[], targetName: string) => {
  if (namesList.length === 0) return null;
  if (namesList.length === 1) return namesList[0] === targetName ? 0 : null;
  const start = 0;
  const end = namesList.length - 1;
  const middle = Math.floor((start + end) / 2);
  const middleName = namesList[middle];
  const comparison = compareStrings(middleName, targetName);
  const arr = comparison === 0 ? namesList.slice(0, middle) : namesList.slice(middle + 1);
  return comparison === -1 ? middle : nameSearch(arr, targetName);
};
