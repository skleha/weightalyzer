const Validator = require('validator');
const validText = require('./valid-text');
const validDate = require('./valid-date');
const validNum = require('./valid-num');

module.exports = function validateWeightInput(data) {
  
  data.userId = validText(data.userId) ? data.userId : '';
  data.weight = validNum(data.weight) ? data.weight : '';
  
  let errors = {};
  
  if (Validator.isEmpty(data.userId)) {
    errors.userId = "User field is required";
  }

  if (!validDate(data.date)) {
    errors.date = "Date field is required";
  }

  if (!validNum(data.weight)) {
    errors.weight = "Weight field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  }

}