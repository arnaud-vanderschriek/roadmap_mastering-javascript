// ====================================================================================
//         02 - Parameters: Value by default, rest operator, spread operator
// ====================================================================================

// ==================
// Default Parameters
// ==================

// You can give a function parameter a default value if no argument is passed.

// Example:

function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet("Arnaud")); // Hello, Arnaud!
console.log(greet());         // Hello, Guest!


// Default values are handy to avoid undefined when arguments are missing.

// Exercise:

// Write a function multiply(a = 1, b = 1) that multiplies two numbers, using default values.

// =====================
// Rest Operator (...)
// =====================

//The rest operator allows you to capture an arbitrary number of arguments into an array.

//Example:

function sumAll(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

console.log(sumAll(1, 2, 3, 4)); // 10
console.log(sumAll(5, 10));      // 15


// Exercise:

// Write a function maxValue(...nums) that returns the largest number from any number of arguments.

// =====================
// Spread Operator (...)
// =====================

// The spread operator expands an array or object into individual elements.

// Array Example:

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log(combined); 
// [1, 2, 3, 4, 5, 6]


// Object Example:

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const merged = { ...obj1, ...obj2 };
console.log(merged);
 // { a: 1, b: 3, c: 4 }


// Exercise:

// Write a function mergeArrays(arr1, arr2) that returns a new array combining both using the spread operator.


