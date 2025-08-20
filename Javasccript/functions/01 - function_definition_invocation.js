// ==========================================================
//        01 - Function, definition, invocations
// ==========================================================

// THEORY

// In javascript, you can define a function in different ways:

// Function Declaration

function greet(name) {
  return `Hello ${name}`;
}

console.log(greet("Alice"));

// !!!! Can be called before or after his definition (because of HOISTING).

// Function Expression

const greet2 = function (name) {
  return `Hello, ${name}`;
};

console.log(greet2("Bob"));

// Stored in a variable, not hoisted(must be defined before calling)

// Arrow Function (ES6+)

const greet3 = (name) => {
  return `Hello, ${name}`;
};

console.log(greet3("Charlie"));

// Shorter syntax, behaves differently with "this" (we'll see later)

// ================================================================================
//                              EXERCICES - BEGINNER -> PRO-LEVEL
// ================================================================================

// ================
// Level 1 – Basics
// ================

// Write a function sayHello that takes no parameter and returns "Hello World!".

const sayHello = () => "Hello World!";
console.log(sayHello());

// Write a function square that takes a number and returns its square.

const square = (n) => n ** 2;
console.log(square(5));

// Write a function add that takes two numbers and returns their sum.

const add = (n1, n2) => n1 + n2;
console.log(add(1, 2));

// Write a function isEven that takes a number and returns true if it’s even, otherwise false.

const isEven = (n) => n % 2 == 0;
const isEvenVerbose = (n) => (isEven(n) ? `${n} is even` : `${n} is odd`);

console.log(isEvenVerbose(5));

// Write a function greet that takes a name and returns "Hello, <name>".

const greet4 = (name) => `Hello, ${name}`;
console.log(greet4("Arnaud"));

// =============================
// Level 2 – Parameters & Return
// =============================

// Write a function multiply that multiplies three numbers.

const multiply = (n1, n2, n3) => n1 * n2 * n3;
console.log(multiply(2, 2, 2));

// Write a function maxOfTwo that returns the greater of two numbers.
const maxOfTwo = (n1, n2) => Math.max(n1, n2);
console.log(maxOfTwo(4, 9));

// Write a function maxOfThree that returns the greatest of three numbers.

const maxOfThree = (n1, n2, n3) => Math.max(n1, n2, n3);
console.log(maxOfThree(4, 8, 10));

// Write a function repeatString that takes a string and a number n, and returns the string repeated n times.

const repeatString = (str, n) => str.repeat(n); // ArnaudArnaudArnaudArnaudArnaud
const repeatStringV2 = (str, n) => Array(n).fill(str).join("\n");

console.log(repeatString("Arnaud", 5));
console.log(repeatStringV2("Arnaud", 5));

// Write a function reverseString that returns the reversed version of a string.

const reverseString = (str) => [...str].reverse().join("");

const reverseStringV2 = (str) => {
  return [...str].map((elem, i) => str[str.length - 1 - i]).join("");
};

console.log(reverseString("Arnaud"));
console.log(reverseStringV2("Arnaud"));

// ===============================
// Level 3 – Functions with Arrays
// ===============================

// Write a function sumArray that returns the sum of all numbers in an array.

const sumArray = (arr) => arr.reduce((acc, next) => acc + next, 0);
console.log(sumArray([1, 2, 3, 4, 5]));

// Write a function maxInArray that returns the maximum number in an array.

const maxInArray = (arr) => arr.reduce((acc, next) => Math.max(acc, next));
console.log(maxInArray([1, 2, 3, 4, 5]));

// Write a function minInArray that returns the minimum number in an array.

const minInArray = (arr) => arr.reduce((acc, next) => Math.min(acc, next));
console.log(minInArray([1, 2, 3, 4, 5]));

// Write a function averageArray that returns the average of numbers in an array.

const averageArray = (arr) =>
  arr.reduce((acc, next) => acc + next, 0) / arr.length;

console.log(averageArray([1, 2, 3, 4, 5, 6]));

// Write a function countEvenNumbers that counts how many numbers in an array are even.

const countEvenNumbers = (arr) => {
  let count = 0;

  arr.forEach((elem) => {
    if (elem % 2 == 0) ++count;
  });

  return count;
};

const countEvenNumbersV2 = (arr) =>
  arr.reduce((acc, next) => (next % 2 === 0 ? ++acc : acc), 0);

console.log(countEvenNumbers([1, 2, 3, 4, 5]));
console.log(countEvenNumbersV2([1, 2, 3, 4, 5]));

// =========================================================
// Level 4 – Higher Order Functions (functions as arguments)
// =========================================================

// Write a function applyFunction that takes a function and a value,
// and returns the result of applying the function to the value.

const square2 = (n) => n ** 2;
const applyFunction = (func, value) => func(value);

console.log(applyFunction(square2, 5));

// Write a function mapArray that takes an array and a function, and returns a new array where the function is applied to every element.

const mapArray = (arr, func) => arr.map(func);

console.log(mapArray([1, 2, 3, 4, 5], (n) => n * 2));
console.log(mapArray([1, 2, 3, 4, 5], (n) => n ** 2));

// Write a function filterArray that takes an array and a function, and returns only the elements that pass the test.

const filterArray = (arr, func) => arr.filter(func);

console.log(filterArray([1, 2, 3, 4, 5], (elem) => elem % 2 === 0));
console.log(filterArray([1, 2, 3, 4, 5], (elem) => elem % 2 !== 0));

// Write a function forEachArray that mimics the behavior of forEach.

const forEachArray = (arr, func) => arr.forEach(func);

const nums = [1, 2, 3, 4, 5];

forEachArray(nums, (elem, i, arr) => (arr[i] = elem * 2));
console.log(nums);

// Write a function findInArray that mimics the behavior of find.

const findInArray = (arr, func) => arr.find(func);

console.log(findInArray([1, 2, 3, 4], (n) => n > 2));

// =============================
// Level 5 -Advanced & Recursion
// =============================

// Write a recursive function factorial(n) that returns n!.

function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5));

// Write a recursive function fibonacci(n) that returns the nth Fibonacci number.

// Write a function isPalindrome that checks if a string is a palindrome.
//
// Write a recursive function sumDigits(n) that sums all digits of a number.
//
// Write a function deepFlatten that takes a nested array and returns it flattened into a single array.
