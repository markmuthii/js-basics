const oneHundredElements = Array(100);
const oneHundredElementsKeys = [...oneHundredElements.keys()];
const years = oneHundredElementsKeys.map((num) => num + 1900);

// const years2Leap = [...Array(100).keys()]
//   .map((e) => e + 1900)
//   .filter((e) => e % 4 === 0);

// console.log(years2Leap);

function leapYears(yearsPassedAsArguments) {
  // return yearsPassedAsArguments.filter((year) => year % 4 === 0); // one liner, harder to read but gives us the result we need

  // Using iterative ways
  let leapYears = [];

  // for (let i = 0; i < yearsPassedAsArguments.length; i++) {
  //   if (yearsPassedAsArguments[i] % 4 === 0) {
  //     leapYears.push(yearsPassedAsArguments[i]);
  //     leapYears = [...leapYears, yearsPassedAsArguments[i]];
  //     i += 3;
  //   }
  // }

  // yearsPassedAsArguments.forEach((year) => {
  //   if (year % 4 === 0) {
  //     leapYears.push(year);
  //     leapYears = [...leapYears, year];
  //   }
  // });

  yearsPassedAsArguments.map((year) => {
    if (year % 4 === 0) {
      // leapYears.push(year);
      leapYears = [...leapYears, year];
    }
  });

  return leapYears;
}

console.log(leapYears(years));
