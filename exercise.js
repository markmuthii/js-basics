// Create a function that takes an array of numbers as an argument, and returns an array of the square roots of each of the numbers in the array. Print each of the returned square roots on the console in the following format:

// 4: 2
// 9: 3
// 16: 4

// where the number on the left is an element in the array passed to the function, and the number on the right is its corresponding square root in the returned array.

// create a function, with array as param
// function mapSquareRoot(numbersArray) {
//   // Map

//   return numbersArray.map((number) => {
//     return Math.sqrt(number);
//   });

//   // Maurice
//   // return numbersArray.map((number) => Math.sqrt(number));

//   // Kiprop
//   // return numbersArray.map(Math.sqrt);
// }

// function forEachSquareRoot(numbersArray) {
//   // Use the forEach method in here
// }

// function forLoopSquareRoot(numbersArray) {
//   // Use the for loop in here
// }

// function whileLoopSquareRoot(numbersArray) {
//   // Use the while loop in here
// }

// const squareRoot1 = (numbersArray) => {
//   return numbersArray.map((number) => Math.sqrt(number));
// };

// const squareRoot2 = (numbersArray) =>
//   numbersArray.map((number) => Math.sqrt(number));

// let numbers = [4, 9, 16];

// let squareRoots = mapSquareRoot(numbers);

// function printToConsole(numArr, squareRootsArr) {
//   // Logic for printing in here
// }

// printToConsole(numbers, squareRoots);

// // After thousands of lines of code

// let squareRoots2 = mapSquareRoot(numbers2);

// Create a function that takes an array of numbers as an argument, and returns an array of the square roots of those numbers that are even. So for instance if you have an array [4, 9, 16, 25], the function should return [2, 4].
function evenSquareRoots(n, x) {
  // Map to get the squareroots of the numbers
  let sqrts = n.map((number) => Math.sqrt(number));

  console.log(sqrts);
  let evenSqrts = [];

  // Get the even square roots
  // Loop
  // for (let i = 0; i < sqrts.length; i++) {
  //   let el = sqrts[i];

  //   if (el % 2 !== 0) {
  //     continue;
  //   }

  //   evenSqrts.push(el);
  // }

  sqrts.forEach((sqrt) => {
    if (sqrt > x) {
      evenSqrts.push(sqrt);
    }
  });

  return evenSqrts;
}
let numbers2 = [0, 25, 36, 49];

console.log(evenSquareRoots(numbers2));

// Create a function that takes an array of numbers and a number x as arguments, and returns an array of the square roots of those numbers that are greater than x. So for instance if you have an array [4, 9, 16, 25, 36], and x is 3, then the function should return [4, 5, 6].
