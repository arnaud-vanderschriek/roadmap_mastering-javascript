// ------------------------------ 02 - Variables & Scopes -------------------------------

//----------------------------------------------------------------------------------
// 1 - Declaration -----------------------------------------------------------------
//----------------------------------------------------------------------------------

// Déclare three variables:

// one with var
// one with let
// one with const

// Assign values to them, then try reassigning them. → Observe the difference.

var test = 42;
let test2 = "Je suis un string";
const test3 = [1, 2, 3, 4];

test = "Je suis un deuxième string"; // ok
test2 = 56; // ok
test3.push("new"); // ok
// test3 = "5" - 2; // => typeError

console.log(test);
console.log(test2);
console.log(test3);

// const freezes the reference (the variable always points to the same array)
// But it doesn't freeze the object/array itself (we can still modify its contents)

//----------------------------------------------------------------------------------
// 2 - Block Vs Global -------------------------------------------------------------
//----------------------------------------------------------------------------------

// Test the following code then try to explain...

{
  var a = 1;
  let b = 2;
  const c = 3;

  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(a); // Global/function scope, so accessible outside the block
// console.log(b); // let has block scope, so it's not accessible outside the block => ReferenceError: b is not defined
// console.log(c); // const has block scope, so it's also not accessible outside the block => ReferenceError: c is not defined

//----------------------------------------------------------------------------------
// 3 - Fonctions et portée ---------------------------------------------------------
//----------------------------------------------------------------------------------

// What does this code ?

function functionAndScopes() {
  var x = 10;
  let y = 20;
  const z = 30;

  console.log(x, y, z); // ok
}

functionAndScopes();
//console.log(x); // => ReferenceError: x is not defined
//console.log(y); // => ReferenceError: x is not defined
//console.log(z); // => ReferenceError: x is not defined

//----------------------------------------------------------------------------------
// 4 - Hoisting --------------------------------------------------------------------
//----------------------------------------------------------------------------------

// Guess results before execute

console.log(d); // On aura "UNDEFINED" malgré le fait que var sera hoisté car "Hoistées" veut dire que leurs déclarations sont deplacées en haut du scope,
// mais pas l'initialisation...

var d = 5;

console.log(e); // But that's not the case here with let — we'll get => ReferenceError: Cannot access 'e' before initialization
let e = 10;
