// ---------------------- 03 - OPERATORS ------------------------------------------

// --------------------------------------------------------------------------------
// -------------------------- arithmetics operators ------------------------------
// --------------------------------------------------------------------------------

// +	3 + 2	5	Addition ou concaténation si un des opérandes est une string
// -	5 - 2	3	Soustraction
// *	4 * 2	8	Multiplication
// /	8 / 2	4	Division
// %	7 % 3	1	Reste de la division (modulo)
// **	2 ** 3	8	Puissance
// ++	let a = 1; a++	2	Incrémentation de 1 (attention pré/post)
// --	let a = 2; a--	1	Décrémentation de 1 (pré/post aussi)

// --------------------------------------------------------------------------------
// -------------------------- comparison operators --------------------------------
// --------------------------------------------------------------------------------

// ==	5 == '5'	true	Vérifie l’égalité en convertissant les types (attention piège)
// ===	5 === '5'	false	Vérifie l’égalité et le type (toujours préférer)
// !=	5 != '5'	false	Différent en convertissant le type
// !==	5 !== '5'	true	Différent ou type différent
// <	3 < 5	true	Moins que
// >	3 > 5	false	Plus que
// <=	3 <= 3	true	Moins ou égal
// >=	4 >= 5	false	Plus ou égal

// --------------------------------------------------------------------------------
// -------------------------- logic operators -------------------------------------
// --------------------------------------------------------------------------------

// &&	true && false	false	ET logique, vrai si toutes les conditions sont vraies
// `		`	`true
// !	!true	false	Négation, inverse la valeur

// --------------------------------------------------------------------------------
// -------------------------- ternary operators -----------------------------------
// --------------------------------------------------------------------------------

// It's a shortcut for a if...else

let age = 20;
let majeur = age >= 18 ? "Yes" : "No";
console.log(majeur); // "Yes"

// --------------------------------------------------------------------------------
// ------------------------------ Exercices ---------------------------------------
// --------------------------------------------------------------------------------

// Tiny shop management

// You have a variable price (number) and discount (percentage between 0 and 100).

// You want to calculate the final price after discount:

// finalPrice = price - (price * discount / 100)

// If the final price is greater than 100, the customer gets free shipping. Otherwise,
// they must pay €10 for shipping.

// If the customer is loyal (true or false), they get an additional €5 discount,
// but only if the final price is less than or equal to 100.

// At the end, you must display a message:

// "Final price: XX €, free shipping"
// or
// "Final price: XX €, +10€ shipping"

function reduction(price, discount, loyal) {
  let finalPrice = price - (price * discount) / 100;
  let shipping = "";

  if (loyal && finalPrice <= 100) {
    finalPrice -= 5;
  }

  finalPrice > 100
    ? (shipping = "free shipping")
    : (shipping = "+10 euros shipping");

  return `Final price: ${finalPrice}, ${shipping}`;
}

// alternative

function reduction2(price, discount, loyal) {
  let finalPrice = price - (price * discount) / 100;

  return `Final Price: ${
    loyal && finalPrice <= 100 ? finalPrice - 5 : finalPrice
  }, ${
    (loyal && finalPrice <= 100 ? finalPrice - 5 : finalPrice) > 100
      ? "free shipping"
      : "+10 euros shipping"
  }`;
}

// more ES6 (arrow function)

const reduction3 = (price, discount, loyal) => {
  const finalPrice =
    loyal && price - (price * discount) / 100 <= 100
      ? price - (price * discount) / 100 - 5
      : price - (price * discount) / 100;

  return `Final Price: ${finalPrice}, ${
    finalPrice > 100 ? "free shipping" : "+10 euros shipping"
  }`;
};

console.log(reduction(120, 20, true));
console.log(reduction2(120, 20, true));
console.log(reduction3(120, 20, true));

//----------------------------------------------------------------------------------
//    SHORT REMINDER DIFFERENCE BETWEEN CLASSIC FUNCTION AND ARROW FUNCTION
//----------------------------------------------------------------------------------

/*
================================================
Classic Function vs Arrow Function in JavaScript
================================================
*/

// 1. SYNTAX
function classic(a, b) {
  return a + b;
}

const arrow = (a, b) => a + b;

console.log(classic(2, 3)); // 5
console.log(arrow(2, 3)); // 5
// -> In this case, both work the same

// 2. "this" BEHAVIOR
const obj = {
  value: 10,

  classicFn: function () {
    console.log("classicFn this.value:", this.value);
  },

  arrowFn: () => {
    console.log("arrowFn this.value:", this.value);
  },
};

obj.classicFn(); // classicFn this.value: 10
obj.arrowFn(); // arrowFn this.value: undefined (arrow doesn’t bind "this")

// -> Classic functions bind "this" to the object calling them
// -> Arrow functions don’t have their own "this", they use the one from outside

// 3. ARGUMENTS OBJECT
function classicArgs(a, b) {
  console.log(arguments); // has arguments object
}

const arrowArgs = (a, b) => {
  console.log(arguments); // ReferenceError: arguments is not defined
};

classicArgs(1, 2);
// arrowArgs(1, 2); // Uncomment -> will throw error

// -> Classic functions have "arguments"
// -> Arrow functions don’t (use ...rest instead)

// 4. CONSTRUCTORS
function ClassicConstructor(name) {
  this.name = name;
}
const person = new ClassicConstructor("Alice");
console.log(person.name); // "Alice"

const ArrowConstructor = (name) => {
  this.name = name;
};
// const p = new ArrowConstructor("Bob"); // ❌ TypeError: ArrowConstructor is not a constructor

// -> Classic functions can be used with "new"
// -> Arrow functions cannot

// 5. BEST USE CASES
// - Classic functions: methods inside objects/classes, constructors, when you need "this"
// - Arrow functions: callbacks, small utilities, functional programming style
