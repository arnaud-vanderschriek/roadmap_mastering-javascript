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
console.log(greet()); // Hello, Guest!

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
console.log(sumAll(5, 10)); // 15

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

// ================================================================
//                  Exercises - Beginner to pro
// ================================================================

// ===========================
//          Beginner
// ==========================

// Default Parameters
// ==================

// Write a function greet(name = "friend") that returns "Hello, <name>".

// Write a function multiply(a, b = 1) that multiplies two numbers.

// Rest Operator
// =============

// Write a function printAll(...args) that logs every argument passed.

// Write a function sum(...nums) that returns the sum of all numbers.

// Spread Operator
// ===============

// Create a copy of [1, 2, 3] using spread.

// Merge [1, 2] and [3, 4] into a single array using spread.

// ========================
//      Intermediate
// ========================

// Default Parameters
// ==================

// Write a function createUser(username, role = "user") that returns an object { username, role }.

// Write a function power(base, exponent = 2) that returns base^exponent.

// Rest Operator
// =============

// Write a function average(...nums) that returns the average of all numbers.

// Write a function concatStrings(...strings) that concatenates all strings with a space in between.

// Spread Operator
// ===============

// Write a function mergeObjects(obj1, obj2) that merges two objects.

// Write a function findMax(arr) that finds the maximum number in an array using spread and Math.max.

// ====================================
//              Advanced
// ====================================

// Rest Operator
// =============

// Write a function uniqueValues(...args) that removes duplicates from the arguments and 
// returns a unique array.

// Spread Operator
// ===============

// Write a function replaceMiddle(arr, ...values) that replaces the middle element(s) of an array with given values. 
// Example:

// replaceMiddle([1, 2, 3, 4, 5], 99, 100);
// // [1, 2, 99, 100, 4, 5]

// =========================================
//             Pro Challenges
// =========================================

// Function Composer: Write a function compose(f, g) 
// that takes two functions and returns a new function that applies them in sequence. 
// Use rest/spread to forward arguments.

// const add1 = (x) => x + 1;
// const double = (x) => x * 2;
// const addThenDouble = compose(double, add1);
// console.log(addThenDouble(5)); // 12

// Deep Merge: Write a function deepMerge(...objects) that merges 
// any number of objects into one (later keys overwrite previous ones).

// Custom Logger: Write a function logger(prefix = "LOG", ...messages) that prints:

// logger("INFO", "User connected", "ID=42");
// // [INFO] User connected ID=42

// Immutable Update: Given an object and a key-value pair, 
// return a new object with the update applied (without modifying the original). 
// Use spread.

// const user = { name: "Alice", age: 25 };
// const updated = update(user, "age", 26);
// console.log(updated); // { name: "Alice", age: 26 }
// Write a function mergeArrays(arr1, arr2) that returns a new array combining both 
// using the spread operator.
