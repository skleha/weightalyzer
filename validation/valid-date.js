const validDate = input => {
  const inputType = Object.prototype.toString.call(input)
  return (inputType === "[object Date]") ? true : false;
};

module.exports = validDate;