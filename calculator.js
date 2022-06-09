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

module.exports = calculator