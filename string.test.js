const stringLength = require('./string.js')
const reverseString = require('./reverse')

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