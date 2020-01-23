// Utilty function to validate whether user entered text
// and whether user entered something other than spaces

const validText = str => {
  return typeof str === "string" && str.trim().length > 0;
};

module.exports = validText;