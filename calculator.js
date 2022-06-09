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

const calculator = new Calculator(a, b)

calculator.add(1, 1)

console.log(Calculator);