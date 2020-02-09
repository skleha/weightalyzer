const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateWeightInput(data) {
  data.userId = validText(data.userId) ? data.userId : '';
  data.weight = 



}