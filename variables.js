// SCOPE
// let and const: are block scoped
// var: function (and not block) scoped
// var: when used inside a block, its scope is assigned to the next available function or global scope

// GLOBAL SCOPE
// Any variable that is declared in the GLOBAL SCOPE is accessible everywhere in the file (inside conditional statements, loops and functions)
// let varInGlobalScope = 0; // Declared in the Global Scope

// // LOCAL SCOPE
// // - Function Scope
// function scopeFunction() {
//   let varInsideFunction = 77;
//   console.log("varInsideFunction", varInsideFunction);
//   console.log("VarInGlobalScope:", varInGlobalScope);
// }

// console.log(varInsideFunction); // cannot be accessed outside the scopeFunction function.

// scopeFunction();

// // varInsideFunction is not accessible in a different function. It is only accessible in the function where it was declared
// function secondFunction() {
//   console.log("varInsideFunction", varInsideFunction); // This will throw a referenceError when the function is called
// }
// secondFunction();

// // - Block Scope

// if (true) {
//   var varInsideBlockWithVar = "Hello there";
//   console.log("VarInGlobalScope inside the IF block:", varInGlobalScope);
//   let varInsideIf = "This should be printed on the console";
//   console.log("varInsideIf (33): ", varInsideIf);
// }

// console.log(varInsideBlockWithVar); // this will not throw an error because the variable was declared with var

// // console.log("VarInGlobalScope outside the IF block:", varInGlobalScope);
// console.log(varInsideIf); // This throws and error because the varInsideIf is accessed outside its scope (block)

// // Function and Block Scope
// function functionAndBlockScope() {
//   // using var, the variable gets scoped to the function and is accessible from anywhere inside the function
//   var fbsVarOne = "This is function scoped";

//   if (true) {
//     // Using var, despite being inside a block, the variable is also scoped to the function, and not the block, and is hence accessible outside this if block
//     var fbsVarTwo = "This is function scoped, but defined inside a block";

//     // Using let scopes this variable only to this if block, and that makes access to the variable only possible from within this if block
//     let fbsVarThree = "This is block scoped";

//     console.log("fbsVarOne called from inside block: ", fbsVarOne);
//     console.log("fbsVarThree called inside block: ", fbsVarThree);
//   }

//   console.log("fbsVarTwo from outside the if block: ", fbsVarTwo);
//   console.log("fbsVarThree: ", fbsVarThree); // this will throw an error because fbsVarThree has been declared inside the block with let keyword
// }

// console.log("fbsVarTwo: ", fbsVarTwo); // fbsVarTwo is not accessible outside the function where it has been defined

// functionAndBlockScope();
