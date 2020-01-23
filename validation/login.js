const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLoginInput(data)  {
  let errors = {};

  // Reset email/password to '' if user entry doesn't pass the validText test
  data.email = validText(data.email) ? data.email : '';
  data.password = validText(data.password) ? data.password: '';

  // See validator docs, verifies if text string is email
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  // Return errors object
  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };

}