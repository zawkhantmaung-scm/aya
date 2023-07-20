/**
 * Convert each integer element of the array 'arr' to its string
 * Sort the array of strings based on concatenation order
 * 
 */ 
const arrangeNumber = (arr, type = 'largest') => arr.map(i => `${i}`).sort((a, b) => type === 'largest' ? (b + a).localeCompare(a + b) : (a + b).localeCompare(b + a)).join('');

// TestCase: 1
console.log(arrangeNumber([2, 20, 24, 6, 8], 'largest')); // Output: "8624220"

// TestCase: 2
console.log(arrangeNumber([2, 20, 24, 6, 8], 'smallest')); // Output: "2022468"