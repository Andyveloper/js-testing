const stringLength = (str) => {
  if(str.length > 0 && str.length <= 10) {
  return str.length;
  } else {
    throw new Error('Should be between 1 and 10 characters')
  }
}

stringLength('hello')

module.exports = stringLength;


