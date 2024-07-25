// let obj = {
//   prop1: "Hi",
//   obj2: {
//     prop2: "hey",
//     getProp2: function () {
//       return this.prop2;
//     },
//     prop3: [
//       {
//         prop4: "Hello",
//       },
//       {
//         prop5: "Hello 5",
//       },
//       {
//         prop6: "Hello 6",
//       },
//     ],
//     getPropertyByName: function (name) {
//       return this[name];
//     },
//   },
//   getProp1: function () {
//     return this.prop1;
//   },
// };

// let student1 = {
//   first: "John",
//   last: "Wick",
// };

// console.log(student1.first);

// student1.first = "Jason";

// console.log(student1.first);

// let prop3 = obj.obj2.getPropertyByName("prop3")[1];

// prop3.prop5 = "Hello 7";

// console.log(obj.obj2.getPropertyByName("prop3")[1].prop5);

// let firstHeading = document.getElementsByTagName("h1")[0];

// firstHeading.addEventListener("mouseenter", () => {
//   console.log("You have hovered over the Heading");
// });

// console.log(document.getElementsByClassName("el"));

// firstHeading.innerText = "Hello 3";

// console.log(firstHeading);

// let student = document.getElementsByTagName("li")[1];

// console.log(student.innerText);

// let students = document.getElementsByTagName("li");

// for (let i = 0; i < students.length; i++) {
//   const student = students[i];
//   console.log(student.innerText);
// }

// let student = document.getElementById("kiprop");

// student.getElementsByTagName("span")[0].innerText = "Valentine";

// // console.log(student);

// console.log(student.innerHTML);
// console.log(student.innerText);

// BUTTON CLICK CODE
// Get a reference to the button
let buttons = document.getElementsByTagName("button");
// console.log(buttons);

let button = buttons[0];
// console.log(button);
// When the button is clicked, increase the value of the counter by 1

button.addEventListener("click", buttonClicked);

function buttonClicked(el, event) {
  // Get a reference to the counter on the page
  let counterElement = document.getElementById("counter");
  // console.log(counterElement);

  // Get the value of the counter
  let counterValue = counterElement.innerText;
  console.log(counterValue);
  // console.log(typeof counterValue);
  counterValue = parseInt(counterValue) + 1;
  console.log(counterValue);
  // Update the counter on the page
  counterElement.innerText = counterValue;
}

// console.log(counterValue);
