// Defining Classes
//   -Class and constructors to calculate my current age as of 2018
// -out using ES6 Template/String literals

class age {
  constructor(yearBorn, currentYear) {
    this.yearBorn = yearBorn;
    this.currentYear = currentYear;
  }

  get total() {
    return this.calcYear();
  }

  calcYear() {
    return this.currentYear - this.yearBorn;
  }
}

const totalAge = new age(1983, 2018);

console.log(`I am ${totalAge.total} years old`); //"I am 35 years old"
