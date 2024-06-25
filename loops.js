let numArr = [23, 569];

// In the while loop, the code inside the curly brackets will only ever run if the condition is true
// In this case where the condition is always false, the code inside the curly braces is never executed
let someVar = 0;
while (false) {
  console.log("Inside the while loop");
  console.log(numArr[someVar]);
  someVar++;
}
console.log("someVar: ", someVar);

// The code block inside the do statement will always execute at least once no matter the evaluation of the condition
console.log("");
let i = 0;
do {
  console.log("Inside the do while loop");
  console.log(numArr[i]);
  i++;
} while (i < numArr.length);
console.log("i: ", i);

// FOR OF LOOP
// The variable that is defined inside the brackets represents each of the values inside the array that is being iterated over
console.log("");
console.log("Using the FOR OF method:");
let counter = 0;
for (let value of numArr) {
  console.log("Counter:", counter);
  counter++; // counter is incremented in each iteration of the for...of. It is however not important for what we are trying to accomplish here, just a demonstration of something that runs in each iteration. You can however set it up to act as the index when intially initialized to 0
  console.log(value);
}
