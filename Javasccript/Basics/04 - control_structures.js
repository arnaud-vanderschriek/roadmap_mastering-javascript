// ---------------------- 04 - CONTROL STRUCTURES ------------------------------------------

// --------------------------------------------------------------------------------
// --------------------------  if / else if / else   ------------------------------
// --------------------------------------------------------------------------------

// Used to execute only if a condition is true.

let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
} else if (age >= 13) {
  console.log("You are a teenager");
} else {
  console.log("You are a child");
}

// --------------------------------------------------------------------------------
// --------------------------------  Switch   -------------------------------------
// --------------------------------------------------------------------------------

// Cleaner than multiple if...else if... when checking the same variable.

let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("It's an apple");
    break;
  case "banana":
    console.log("It's a banana");
    break;
  default:
    console.log("???");
}

// --------------------------------------------------------------------------------
// --------------------------------  For Loop   -----------------------------------
// --------------------------------------------------------------------------------

// Classic loop: repeat a block a set number of times.

for (let i = 0; i < 5; ++i) {
  console.log("i = ", i);
}

// --------------------------------------------------------------------------------
// --------------------------------  while loop  ----------------------------------
// --------------------------------------------------------------------------------

// Repeats while the condtion is true

let count = 0;

while (count < 3) {
  console.log("count: ", count);
  ++count;
}

// --------------------------------------------------------------------------------
// ------------------------------ do while loop  ----------------------------------
// --------------------------------------------------------------------------------

// Similar to while, but garantees at least one execution

let number = 5;

do {
  console.log("Number is: ", number);
  --number;
} while (number > 0);

// --------------------------------------------------------------------------------
// -------------------------------- for...of  -------------------------------------
// --------------------------------------------------------------------------------

// Loop over values in an iterable (arrays, string, etc).
// perfect for arrays

let colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}

// --------------------------------------------------------------------------------
// -------------------------------- for...in  -------------------------------------
// --------------------------------------------------------------------------------

// Loops over keys (indexs or property names) in objects.
// Use for objects (not arrays, unless you want index).

let person = { name: "Alice", age: 25 };

for (let key in person) {
  console.log(key, ":", person[key]);
}

// --------------------------------------------------------------------------------
// -------------------------------- EXERCICES  ------------------------------------
// --------------------------------------------------------------------------------

// Exercices on controle structures

//=================
// Level 1 - basics
//=================

// Even or odd
// Write a function that takes a number and prints whether it's even or odd(use if/else).

function evenOrOdd(number) {
  return number % 2 === 0 ? `${number} is even` : `${number} is odd`;
}

//Day of the week
// Write a function that takes a number from 1 to 7 and prints the day of the week(switch).
// Example: 1 -> Monday, 7 -> Sunday

function dayOfTheWeek(number) {
  switch (number) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day number";
  }
}

// ===============
// LEVEL 2 - LOOPS
// ===============

// Multiplication table
// Print the multiplication table of 5(from 1 to 10) using a for loop

for (let i = 1; i <= 10; ++i) {
  console.log(5 * i);
}

// Countdown
// Write a program that counts down from 10 to 0 using a while loop. Print "Lift-off" at the end.

let cpt = 10;

while (cpt >= 0) {
  if (cpt === 0) {
    console.log("Lift-off");
  } else {
    console.log(cpt);
  }
  --cpt;
}

// ===================
// LEVEL 3 - ITERATING
//====================

// Sum of Array
// Given an array[2, 5, 7, 10], calculate the sum using a for...loop.

function sumForLoop(array) {
  let result = 0;

  for (let i = 0; i < array.length - 1; ++i) {
    result += array[i];
  }

  return result;
}

function sum(array) {
  return array.reduce((acc, next) => acc + next, 0);
}

// Object Properties
// Given an object

let car = { brand: "Toyota", year: 2020, color: "blue" };

// Use for...in to print

for (let item in car) {
  console.log(`${item}: ${car[item]}`);
}
// brand: Toyota
// year: 2020
// color: blue
