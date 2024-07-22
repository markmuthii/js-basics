// The normal way of writing a function:
// function myFunction() {
//   // Some logic here
//   return "Something";
// }

// // ES6 arrow functions:
// const mySecondFunction = () => {
//   //
// };

// let returnedValue = myFunction();

// console.log(returnedValue);

// let nums3 = nums.map((el) => {
//   // nothing here before the return
//   return el + 3;
// });
// console.log("Nums3: ", nums3);

// let nums4 = nums.map((el) => el + 4);
// console.log("Nums4: ", nums4);

// // Function that adds two numbers:
// function addTwoNumbers(a, b) {
//   return a + b;
// }

// // let varA = 2;
// // let varB = 4;

// console.log(addTwoNumbers(2, 4));

// console.log(addTwoNumbers(1, 2));
// console.log(addTwoNumbers(45, 23));

// console.log(summation); // 6

// const addTwoNumbersArrow = (a, b) => {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Error: you need to pass numbers";
//   }

//   return a + b;
// };

// console.log(addTwoNumbersArrow(varA, varB)); // 6

// const addTwoNumbersArrow2 = (a, b) => a + b;

// Write a function that returns all the leap years
// function leapYears(first, last) {
//   let arr = [];
//   // Do while
//   // for loop
//   for (let year = first; year <= last; year++) {
//     if (year % 4 === 0) {
//       arr.push(year);
//       year += 3;
//     }
//   }

//   return arr;
// }

// let firstYear = 1900;
// let lastYear = 1999;
// // ... in the 20th century
// let l20 = leapYears(firstYear, lastYear);
// console.log("20th Century: ", l20);

// firstYear = 2000;
// lastYear = 2099;
// let l21 = leapYears(firstYear, lastYear);
// console.log("21st Century: ", l21);

// Given the age of a person (80) who was born on February 29th, find out how many times the person has celebrated their birthday on the date that they were born.

// CALLBACK FUNCTIONS
// function functionOne(paramOne) {
//   paramOne();
// }

// function functionTwo() {
//   console.log("Hello");
// }

// functionOne(functionTwo);

// const arr = [0, 1, 2];

// function mapCallback(value, index, arr) {
//   console.log(index);
//   return value + 1;
// }

// const arr2 = arr.map(mapCallback);

// console.log(arr2);

// const param = "Jason Statham";
// function one(two) {
//   two("John Wick");
// }

// function t(param, param2) {
//   console.log(`${param}`);
// }

// one(t);

// let variable = "Hello";
// function one() {
//   let variable = "Hi";

//   if (1 == 1) {
//     console.log(variable);
//   }
// }

// one();
