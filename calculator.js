class Calculator {
  constructor (firstValue, secondValue) {
    this.firstValue = firstValue;
    this.secondValue = secondValue;
  }

  add(a, b) {
    return a + b
  }

  subtract(a, b) {
    return a - b
  }

  divide(a, b) {
    return a / b
  }

  multiply(a, b) {
    return a * b
  }
}

const calculator = new Calculator()

calculator.add(1, 1)

console.log(calculator.add(1, 9));
console.log(calculator.subtract(11, 1));
console.log(calculator.divide(100.5, 10));
console.log(calculator.multiply(10, 1));