const express = require("express");
const router = express.Router();

// Import validations
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Test route
router.get("/test", (req, res) => res.json({msg: "this is the users route"}))


// Registration route
router.post("/register", (req, res) => {

  // Deconstruct response coming back from validations
  // Note 'errors' is an object with error types
  const { errors, isValid } = validateRegisterInput(req.body);

  // If errors found by validator, return errors object
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // If no errors found by validator,
  // use Mongoose to find if the email is already in use
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        // Use the error object from validations to send the error
        errors.email = "Email already exists";
        return res.status(400).json(errors);
      } else {
        
        // Passed validations, email not in use --> create new user
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });



        // bcrypt here to hash the password




      }
    });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      // Couldn't find the email entered
      // Use the validations to send the error
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        res.json({ msg: "Success" });
      } else {
        // And here:
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    });
  });
});


module.exports = router;
