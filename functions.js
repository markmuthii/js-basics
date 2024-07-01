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
function addTwoNumbers(a, b) {
  return a + b;
}

let varA = 2;
let varB = 4;

let summation = addTwoNumbers(varA, varB);

console.log(summation); // 6

const addTwoNumbersArrow = (a, b) => {
  return parseInt(a + b);
};

const addTwoNumbersArrow2 = (a, b) => a + b;
