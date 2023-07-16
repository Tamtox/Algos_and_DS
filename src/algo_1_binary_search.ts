// Binary search is a search algorithm that finds the position of a target value within a sorted array by repeatedly dividing the search interval in half.

// Time Complexity: O(log n)
// Space Complexity: O(1)

const binarySearch = (arr: number[], target: number): number | null => {
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
  return arr[middle] === target ? middle : null;
};

// Exrecise 1 - Name Search

const names = ['Alex', 'Brian', 'Julia', 'Kojin', 'Nabil', 'Nick', 'Winnie'];

// Returns 0 if string a is alphabetically before string b, returns 1 if string b is alphabetically before string a, and returns -1 if the strings are equal.
// const compareStrings = (a: string, b: string) => {
//   const aLower = a.toLowerCase();
//   const bLower = b.toLowerCase();
//   for (let i = 0; i < aLower.length; i++) {
//     if (bLower[i] === undefined) return 1;
//     if (aLower[i] < bLower[i]) return 0;
//     if (aLower[i] > bLower[i]) return 1;
//   }
//   return -1;
// };

// const nameSearch = (namesList: string[], targetName: string) => {
//   if (namesList.length === 0) return null;
//   if (namesList.length === 1) return namesList[0] === targetName ? 0 : null;
//   const start = 0;
//   const end = namesList.length - 1;
//   const middle = Math.floor((start + end) / 2);
//   const middleName = namesList[middle];
//   const comparison = compareStrings(middleName, targetName);
//   const arr = comparison === 0 ? namesList.slice(0, middle) : namesList.slice(middle + 1);
//   return comparison === -1 ? middle : nameSearch(arr, targetName);
// };

// Exercise 2 - Find target number index
function search(nums: number[], target: number): number {
  let result = -1;
  let start = 0;
  let end = nums.length;
  while (start <= end) {
    const midIndex = Math.floor((start + end) / 2);
    if (nums[midIndex] === target) {
      result = midIndex;
      break;
    } else if (nums[midIndex] > target) {
      end = midIndex - 1;
    } else {
      start = midIndex + 1;
    }
  }
  return result;
}

const arr1 = [-1, 0, 3, 5, 9, 12];
const arr2 = [];
for (let i = 0; i < 1000; i++) {
  arr2.push(i);
}

console.log(search(arr2, -1));

// Exercise 3 - Find target number index or postion where it should be inserted

// function searchInsert(nums: number[], target: number): number {
//   let result = -1;
//   let start = 0;
//   let end = nums.length - 1;
//   while (start <= end) {
//     if(start === end) {
//       result =
//       break;
//     } else if(end - 1 === start) {

//     }
//     const middle = start + Math.floor(end / 2);
//     if(nums[middle] === target) {
//       result = middle;
//       break
//     } else if(nums[middle] > target) {
//       end = middle;
//     } else {

//     }
//   }
// }
