"use strict";

// Requiremnt 1
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Requiremnt 2
var fruit = {
  apple: 20,
  pear: 20,
  peach: 10,
};
let pieces = 0;
for (let key in fruit) {
  pieces += fruit[key];
}
console.log(`Pieces of fruit: ${pieces}`);
