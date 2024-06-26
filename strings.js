// Val to explain to us what it means to refer to string methods

// Creating a string normally (using backticks in this case... You can use double or single quotation marks as well)
let s = `A certain string`;

// Creating a string by instantiating the String class
// this creates a slightly different behavior for when you want to use the actual value of the string as shown below
let s2 = new String("this is string 2");

// To access the string value of the object above:
console.log(s2.valueOf());
