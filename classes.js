// Student class that has three properties and two methods
class Student {
  constructor(fName, lName, age) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
  }

  goToClass() {
    console.log("Student " + this.firstName + " is going to class.");
  }

  printFullName() {
    console.log(`${this.firstName} ${this.lastName}`); // John Wick
  }
}

// Method: A function inside a class that is executed in the context of an object that instantiates the class

// create an object, studentOne
const studentOne = new Student("Valentine", "Kibe", 19);
console.log(studentOne.firstName);

// create an object, studentTwo
const studentTwo = new Student("Maurice", "Mwendwa", 20);
// console.log(studentTwo.age);

// create an object, studentThree
const studentThree = new Student("James", "Kiprop", 21);
// console.log(studentThree.age);

// Call the printFullaName method of the Student class on two different instances of the class
studentOne.printFullName();
studentTwo.printFullName();

// A rough overview of how the String class is implemented behind the scenes
// PS: Not an actual representation of the class
class CustomString {
  constructor(value) {
    this.value = value;
  }

  customToUpperCase() {
    // splits the string into individual characters
    // then it converts each individual character of the string into its uppercase alternative
    // then it joins the string back into one value
    // and then returns that value
  }

  customToLowerCase() {}

  customCharAt() {}

  customPadStart() {}

  customPadEnd() {}
}

let s1 = new CustomString("Some string here");

s1.value;

// A rough overview of how the Console class is implemented behind the scenes
// PS: Not an actual representation of the class
class CustomConsole {
  constructor() {}

  log(logValue) {
    // Some abstracted logic that prints the logValue onto the console
  }

  info() {}
}

const customConsole = new CustomConsole();

customConsole.log("Some value to be printed onto the console");
