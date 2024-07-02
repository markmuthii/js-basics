// Create a function that takes an array of numbers as an argument, and returns an array of the square roots of each of the numbers in the array. Print each of the returned square roots on the console in the following format:

// 4: 2
// 9: 3
// 16: 4

// where the number on the left is an element in the array passed to the function, and the number on the right is its corresponding square root in the returned array.

// create a function, with array as param
function mapSquareRoot(numbersArray) {
  // Map

  return numbersArray.map((number) => {
    return Math.sqrt(number);
  });

  // Maurice
  // return numbersArray.map((number) => Math.sqrt(number));

  // Kiprop
  // return numbersArray.map(Math.sqrt);
}

function forEachSquareRoot(numbersArray) {
  // Use the forEach method in here
}

function forLoopSquareRoot(numbersArray) {
  // Use the for loop in here
}

function whileLoopSquareRoot(numbersArray) {
  // Use the while loop in here
}

const squareRoot1 = (numbersArray) => {
  return numbersArray.map((number) => Math.sqrt(number));
};

const squareRoot2 = (numbersArray) =>
  numbersArray.map((number) => Math.sqrt(number));

let numbers = [4, 9, 16];

let squareRoots = mapSquareRoot(numbers);

function printToConsole(numArr, squareRootsArr) {
  // Logic for printing in here
}

printToConsole(numbers, squareRoots);

// After thousands of lines of code
let numbers2 = [25, 36, 49];

let squareRoots2 = mapSquareRoot(numbers2);
