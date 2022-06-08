import stringLength from "./string.js";

stringLength('hello'); // 5

describe("stringLength gets the length of a string", () => {
  it ("should be 5", () => {
    expect(stringLength("hello").toBe(5))
  })
})

// if (stringLength('hello') === 5) {
//   console.log('Length');
// }

// if (stringLength('hello') >= 1 && stringLength('hello') < 10) {
//   console.log('More or equal to 1, less than 10');
// } else {
//   throw new Error('failedxdd');
// }

// if (stringLength('hello my lovely friends') >= 1 && stringLength('hello my lovely friends') < 10) {
//   console.log('More or equal to 1, less than 10');
// } else {
//   throw new Error('failedxdd');
// }