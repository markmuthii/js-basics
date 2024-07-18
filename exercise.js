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
// function evenSquareRoots(n, x) {
//   // Map to get the squareroots of the numbers
//   let sqrts = n.map((number) => Math.sqrt(number));

//   console.log(sqrts);
//   let evenSqrts = [];

//   // Get the even square roots
//   // Loop
//   // for (let i = 0; i < sqrts.length; i++) {
//   //   let el = sqrts[i];

//   //   if (el % 2 !== 0) {
//   //     continue;
//   //   }

//   //   evenSqrts.push(el);
//   // }

//   sqrts.forEach((sqrt) => {
//     if (sqrt > x) {
//       evenSqrts.push(sqrt);
//     }
//   });

//   return evenSqrts;
// }
// let numbers2 = [0, 25, 36, 49];

// console.log(evenSquareRoots(numbers2));

// Create a function that takes an array of numbers and a number x as arguments, and returns an array of the square roots of those numbers that are greater than x. So for instance if you have an array [4, 9, 16, 25, 36], and x is 3, then the function should return [4, 5, 6].

// Create a function that takes an array of numbers as an argument, and returns an array of the square roots of those numbers that are even. So for instance if you have an array [4, 9, 16, 25], the function should return [2, 4].

// create the function with a parameter (array)
// in the function:
//   - get the squareroots of each of the elements in the array that is passed into the function
//   - check if a squareroot is even, and if it is, add it to the array that will be returned by the function
//   - return the array that contains the squareroots of the elements in the array that are even

/**
 * =============================================================================================
 * AUTOBIOGRAPHICAL NUMBERS
 * =============================================================================================
 */
// If a number is autobiographical, then the number's digits describe itself. The first digit is the amount of times the digit 0 appears, the second digit is the amount of times the digit 1 appears, the third digit is the amount of times the digit 2 appears, etc. This repeats for all digits of the number. The number 6210001000 is autobiographical, because it has six 0's, two 1's, one 2, zero 3's, zero 4's, zero 5's, one 6, zero 7's, zero 8's, and zero 9's.

// Create a function that takes an integer n and returns whether or not n is an autobiographical number.

// Examples
// isAutobiographical(6210001000) ➞ true

// isAutobiographical(12345) ➞ false

// isAutobiographical(1210) ➞ true
// // one 0, two 1's, one 2, zero 3's

// isAutobiographical(638) ➞ false

// isAutobiographical(0) ➞ false
// // claims no zeroes, however zero is the first digit
// Notes
// Numbers with more than 10 digits should always return false (9 is the highest digit in base 10, so you can't go higher than 9,999,999,999).
// n is always >= 0 and is always an integer.

// Understand what it means for a number to be autobiographical
//  - Each value in the number represents the count/tally of its index in the whole number
//  - Given 1210, it would be autobiographical if:
//    - the tally/count of 0 (index) is 1 (value in the whole number)
//    - the tally of 1 is 2
//    - the tally of 2 is 1
//    - the tally of 3 is 0

// Create the function with parameter n
// Function will return true or false based on whether n is autobigraphical
// If the length of n is greater than 10, return false
// If n is not a positive integer or 0, return false

function isAutobiographical(n) {
  const length = n.toString().length;

  // 0 - 9999999999
  if (length > 10 || n < 0) return false; // Guard clause

  // Get the following:
  //  - value of each numbers in the whole number
  //  - index of each number
  const nArr = n.toString().split("");

  console.log(nArr);

  // Loop through the array,
  //  - and in each iteration, we are going to:
  //    - get the number of times the current index appears in the array,
  //    - and compare it with the value of the element in the current index of the array

  // For loop that starts at 0
  for (let i = 0; i < nArr.length; i++) {
    // current index is i
    // Know how many times i appears in nArr
    let counter = 0;

    for (let j = 0; j < nArr.length; j++) {
      // If the value of element at position j in the current iteration corresponds to the value of i, then increment a counter
      if (nArr[j] == i) {
        counter++;
      }
    }

    console.log(
      `${i} appears ${counter} times in the array, and it is expected to appear ${nArr[i]}`
    );

    // Compare the counter with the value of the element in the position of i
    if (counter != nArr[i]) {
      return false;
    }
  }

  return true;

  // Foreach
}

console.log(isAutobiographical(12102));

// Code below this is to expound not how the above works, but it is not necessary for the above to work

// function checkNum(n, arr) {
//   let counter = 0;
//   arr.forEach((element) => {
//     console.log(`Checking if ${element} is equal to ${n}`);
//     if (element == n) {
//       counter++;
//     }
//   });

//   return counter;
// }

// console.log(checkNum(0, [1, 2, 1, 0]));
// console.log(checkNum(1, [1, 2, 1, 0]));
// console.log(checkNum(2, [1, 2, 1, 0]));
// console.log(checkNum(3, [1, 2, 1, 0]));

// for (let i = 0; i < 4; i++) {
//   console.log(checkNum(i, [1, 2, 1, 0]));
// }

// const arr = [3, 4];

// arr.forEach((element, index) => {
//   console.log(`The index of ${element} is ${index}`);
// });
