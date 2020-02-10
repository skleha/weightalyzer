const validNum = num => {
  let converted = parseFloat(num);
  return typeof converted === "number";
};

module.exports = validNum;