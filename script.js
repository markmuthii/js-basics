let numArr = [23, 56, 77, 2, 90, 89];
// let numArr2 = [45, 78];

// let numArr3 = new Array(4);

console.log("Without the LOOP:");
console.log(numArr[0]);
console.log(numArr[1]);
console.log(numArr[2]);
console.log(numArr[3]);
console.log(numArr[4]);
console.log(numArr[5]);

// // FOR LOOP
console.log("");
console.log("Using the FOR LOOP:");
for (let i = 0; i < numArr.length; i++) {
  console.log(numArr[i]);
}

//                0   1   2  3   4   5    6
// let numArr = [23, 56, 77, 2, 90, 89];
// Done by Val
// WHILE LOOP
console.log("");
console.log("Using the WHILE LOOP:");
let someVar = 0;
// console.log("someVar right before the loop:", someVar);
while (someVar < numArr.length) {
  // 0 1 2 3 4 5 6
  // console.log("someVar inside the loop, before the increment:", someVar);
  console.log(numArr[someVar]);
  someVar++;
  // console.log("someVar inside the loop, after the increment:", someVar);
}

// console.log("someVar right after the loop:", someVar);

console.log(numArr[someVar]); // someVar here is 6, and there is no element that is in position 6, and so undefined is printed

// Done by Kiprop
// DO WHILE
console.log("");
console.log("Using the DO WHILE LOOP:");
let i = 0;
do {
  console.log(numArr[i]);
  i++;
} while (i < numArr.length);

// // Done by Kiprop
// // FOR...OF
console.log("");
console.log("Using the FOR OF LOOP:");
for (let i of numArr) {
  console.log(i);
}

// // Done by Val
// // // FOR EACH
console.log("");
console.log("Using the FOR EACH method:");
numArr.forEach(function (elementValue, elementIndex) {
  // console.log(numArr[elementIndex]);
  console.info(elementValue);
});

// // // MAP
// // console.log("");
// // console.log("Using the MAP method:");
