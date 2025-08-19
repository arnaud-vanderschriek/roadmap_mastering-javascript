// -----------------------  Level 1 - Basics ---------------------------------------

// 1 - Typeof ----------------------------------------------------------------------

// Write a script that show the following variables type

let a = "42";
let b = 42;
let c = true;
let d;
let e = null;

console.log({
  a: typeof a,
  b: typeof b,
  c: typeof c,
  d: typeof d,
  e: typeof e,
});

// 2 - Implicite conversion --------------------------------------------------------

// Que donne console.log("5" + 2) et console.log("5" - 2) ? Explique pourquoi

let firstOperation = "5" + 2;
let secondOperation = "5" - 2;

console.log(
  "firstOperation: ",
  firstOperation,
  "secondOperation: ",
  secondOperation,
  "Type de firstOperation: ",
  typeof firstOperation,
  "Type de secondOperaton: ",
  typeof secondOperation
);

// A cause de la concaténation donné par le symbole "+", Js va évaluer le premier terme et se dire: Tiens c'est un
// string donc je dois concaténer le string avec le nombre 2 ce qui donne "52" avec un type String.

// Pour le deuxième même logique sauf qu'on a le symbole - donc Js va se dire ok j'ai une opération donc je dois
// transformer "5" en nombre et soustraire 2 ce qui nous donne 3 avec un type number.

// 3 Boolean conversion ------------------------------------------------------------

// Test with boolean the following values: 0, 1, "", " ", null, undefined, NaN, "false"
// Guess the result then check with code.

console.log({
  0: Boolean(0),
  1: Boolean(1),
  2: Boolean(""),
  3: Boolean(" "),
  4: Boolean(null),
  5: Boolean(undefined),
  6: Boolean(NaN),
  7: Boolean("false"),
});

// ----------------------- Level 2 - Manipulation ----------------------------------

// 1 - Comparaisons strictes VS lâches ---------------------------------------------

// Teste les expressions suivantes et explique la différence

console.log(0 == false);
console.log(0 === false);
console.log("42" == false);
console.log("42" === false);

// Donc içi nous avons un cas ou avec l'opérateur === on vérifie l'égalité mais aussi le type...

// 2 - BigInt

// Créer un nombre très grand avec BigInt, puis additionne-le avec un autre BigInt.
// Que se passe-t-il si tu essaies d'additionner un BigInt avec un number?

let num1 = BigInt(12345324398721398712);
let num2 = BigInt(12979874398123899871);
let num3 = 456821;

console.log(num1 + num2);
//console.log(num1 + num3);
//console.log(num1 + num2 + num3);
console.log(num1 + num2 + BigInt(num3));

const test = function () {
  return;
};

let result = test();
console.log(result == null);
console.log(result === null);

// --------------------------------- LEVEL 3 ---------------------------------------

// 1 - Tableaux

// Créer un tableau fruits avec trois fruits.
// Ajoute un élément à la fin.
// Supprime le premier élément
// Vérifie si "pomme" est encore dedans.

const fruits = ["pommes", "poire", "banane", "orange"];

fruits.push("raisin");
fruits.shift();

console.log(fruits);
console.log(fruits.includes("pommes"));

// 2 - Objets

// Créer un objet personne avec nom, age, ville.

const personne = {
  nom: "Arnaud",
  age: 41,
  ville: "Bruxelles",
};

// Modifie la ville

personne.ville = "Gand";

// Ajoute un clé estEtudiant: true

personne.estEtudiant = true;

// Supprime la clé age

delete personne.age;

console.log(personne);

// 3 - Types imbriqués

// Crée un objet livre qui contient:

// un titre(string),
// un nombre de pages(number),
// un tableau d'auteurs,
// une propriété disponible(boolean)

const livre = {
  titre: "Le seigneur des anneaux",
  nombreDePages: 367,
  auteurs: ["Jacques Monod", "Ulrich Stevens", "Giancarlo Montani"],
  disponilbe: true,
};

// Accède et affiche uniquement le deuxième auteur.

const deuxièmeAuteur = livre.auteurs[1];
console.log(deuxièmeAuteur);

// ---------------- LEVEL 4 --------------------------------------------------------

// Détecteur de type

// Ecris une fonction detectType(val) qui retourne une chaîne précisant le type exact de la valeur, en corrigeant le cas particulier de null (qui donne normalement objet)

function detectType(val) {
  if (val === null) {
    return null;
  }

  if (Array.isArray(val)) {
    return "array";
  }

  return typeof val;
}

console.log(detectType(null));
console.log(detectType({}));
console.log(detectType([]));
console.log(detectType(42));
console.log(detectType("test"));



