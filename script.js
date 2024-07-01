// let numArr = [23, 56, 77, 2, 90, 89];
// // let numArr2 = [45, 78];

// // let numArr3 = new Array(4);

// console.log("Without the LOOP:");
// console.log(numArr[0]);
// console.log(numArr[1]);
// console.log(numArr[2]);
// console.log(numArr[3]);
// console.log(numArr[4]);
// console.log(numArr[5]);

// // // FOR LOOP
// console.log("");
// console.log("Using the FOR LOOP:");
// for (let i = 0; i < numArr.length; i++) {
//   console.log(numArr[i]);
// }

// //                0   1   2  3   4   5    6
// // let numArr = [23, 56, 77, 2, 90, 89];
// // Done by Val
// // WHILE LOOP
// console.log("");
// console.log("Using the WHILE LOOP:");
// let someVar = 0;
// // console.log("someVar right before the loop:", someVar);
// while (someVar < numArr.length) {
//   // 0 1 2 3 4 5 6
//   // console.log("someVar inside the loop, before the increment:", someVar);
//   console.log(numArr[someVar]);
//   someVar++;
//   // console.log("someVar inside the loop, after the increment:", someVar);
// }

// // console.log("someVar right after the loop:", someVar);

// console.log(numArr[someVar]); // someVar here is 6, and there is no element that is in position 6, and so undefined is printed

// // Done by Kiprop
// // DO WHILE
// console.log("");
// console.log("Using the DO WHILE LOOP:");
// let i = 0;
// do {
//   console.log(numArr[i]);
//   i++;
// } while (i < numArr.length);

// // // Done by Kiprop
// // // FOR...OF
// console.log("");
// console.log("Using the FOR OF LOOP:");
// for (let i of numArr) {
//   console.log(i);
// }

// // // Done by Val
// // // // FOR EACH
// console.log("");
// console.log("Using the FOR EACH method:");
// numArr.forEach(function (elementValue, elementIndex) {
//   // console.log(numArr[elementIndex]);
//   console.info(elementValue);
// });

// // // // MAP
// console.log("");
// console.log("Using the MAP method:");
// numArr.map(function (elementValue) {
//   console.log(elementValue);
// });

// The code below this line is to give a slight idea of how the map method works behind the scenes, and to show how callback functions are executed

// This nums2 array is instantiated using the Array class, which is what happens when you go direct to assigning an array as a value to a variable eg let arr = [2, 3, 4];
let nums2 = new Array(2, 3, 4);

// we use the inbuilt Array map method to iterate over each element of the nums2 array.
function mapCallbackFunction(el) {
  return el + 3;
}

// We pass the mapCallbackFunction as an argument to the map method, and in each iteration of the nums2 array, the mapCallbackFunction is called (and passed the current array element (2, 3, or 4 depending on current iteration) as the argument to the parameter el)
// The map method then returns an array of the results of calling the mapCallbackFunction on each element of nums2 array, and assigns it (the returned array) to nums3
let nums3 = nums2.map(mapCallbackFunction);
console.log("Nums3: ", nums3); // [5, 6, 7]

// This class is to demonstrate the definition of the Array class (although it IS NOT implemented exactly how the Array class is)
// It's for demo purposes only, and for understanding callback functions and the map method
class CustomArray {
  // It takes an array (arrParam) as an argument during instantiation, and sets that array as the value of arrayValue property
  constructor(arrParam) {
    this.arrayValue = arrParam;
  }

  // This custom implementation of the map method has functionParam as the parameter, and takes a function as an argument (functionParam), loops through the elements in the arrayValue array, and in each iteration, calls the function that is passed as the argument, while passing the value of the current array element in the current iteration as the argument to the callback function
  // The callback function returns a value, which is stored in the newElement variable
  // The newElement is then pushed to the returnedArray array
  // Once the for loop is done iterating through the array elements, then the customMap method returns the array that has elements of the values that were returned by the call to the functionParam callback function
  customMap(functionParam) {
    let returnedArray = [];

    for (let i = 0; i < this.arrayValue.length; i++) {
      let newElement = functionParam(this.arrayValue[i]);
      returnedArray.push(parseInt(newElement));
    }

    return returnedArray;
  }

  // This method simply returns the value of the arrayValue property
  value() {
    return this.arrayValue;
  }
}

// Implementing the class

// Instantiate the class by creating the numArray object and passing the nums2 array as the argument to the constructor of the CustomArray class
let numArray = new CustomArray(nums2);
console.log("numArray: ", numArray.value()); // same as nums2 array

// Call the customMap method of the CustomArray class, and pass mapCallbackFunction as the argument, and store whatever the customMap method returns in the numArray3
let numArray3 = numArray.customMap(mapCallbackFunction);

console.log("numArray3: ", numArray3); // Should log the same as nums3
