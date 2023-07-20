/**
 * Sort the array in either ascending or descending order based on the 'fromEnd' parameter
 * 
 */ 
const findNthLargestElement = (arr, n, fromEnd = true) => arr.sort((a, b) => fromEnd ? b - a : a - b)[n - 1];
  
// TestCase: 1
console.log(findNthLargestElement([3, 2, 1, 5, 6, 4], 2)); // Output: [ 6, 5, 4, 3, 2, 1 ] => 5

// TestCase: 2
console.log(findNthLargestElement([3, 2, 1, 5, 6, 4], 1, false)); // Output: [ 1, 2, 3, 4, 5, 6 ] => 1

// TestCase: 3
console.log(findNthLargestElement([8, 1, 6, 3, 5, 7], 3)); // Output: [ 8, 7, 6, 5, 3, 1 ] => 6

// TestCase: 4
console.log(findNthLargestElement([8, 1, 6, 3, 5, 7], 4, false)); // Output: [ 1, 3, 5, 6, 7, 8 ] => 6
