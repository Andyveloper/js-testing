const stringLength = require('./string')
const reverseString = require('./reverse')
const calculator = require('./calculator');
const capitalize = require('./capitalize');

stringLength('hello'); // 5

describe("stringLength gets the length of a string", () => {
  it ("should be 5", () => {
    expect(stringLength("hello")).toBe(5)
  })
})


describe("stringLength longer than 0 and shorter than 10", () => {
  it("should be between 0 and 10", () => {
    expect(stringLength('hello') > 0).toBeTruthy(), expect(stringLength('hello')).toBeLessThan(10)
  })
})

describe("reverseString should return reversed string", () => {
  it("Should reverse words", () => {
    expect(reverseString('hello')).toBe('olleh')
  })
})

describe("Fully functional calculator for arithmetic", () => {
  it("should add one number to another", () => {
    expect(calculator.add(1, 1)).toBe(2),
    expect(calculator.add(10, 10)).toBe(20),
    expect(calculator.add(535, 205)).toBe(740)
  })
})

describe("Fully functional calculator for arithmetic", () => {
  it("should subtract one number to another", () => {
    expect(calculator.subtract(1, 1)).toBe(0),
    expect(calculator.subtract(357, 122)).toBe(235),
    expect(calculator.subtract(535, 205)).toBe(330)
  })
})

describe("Fully functional calculator for arithmetic", () => {
  it("should divide one number to another", () => {
    expect(calculator.divide(10, 2)).toBe(5),
    expect(calculator.divide(10, 10)).toBe(1),
    expect(calculator.divide(535, 10)).toBe(53.5)
  })
})

describe("Fully functional calculator for arithmetic", () => {
  it("should multiply one number to another", () => {
    expect(calculator.multiply(1, 1)).toBe(1),
    expect(calculator.multiply(10, 10)).toBe(100),
    expect(calculator.multiply(535, 205)).toBe(109675)
  })
})

describe("Capitalize first chatacter of a string", () => {
  it("Should show first letter capitalized", () => {
    expect(capitalize('hello')).toBe('Hello')
    expect(capitalize('i don\'t want to')).toBe('I don\'t want to')
    expect(capitalize('фра́нция')).toBe('Фра́нция')
  })
})