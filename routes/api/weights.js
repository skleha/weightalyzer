const express = require("express");
const router = express.Router();
const validateWeightInput = require("../../validation/weightValidation");
const Weight = require('../../models/Weight');

// Test route
router.get('/test', (req, res) => res.json({msg: "this is the weights test route"}));

// Add weight
router.post('/record', (req, res) => {

  console.log(req.body);

  const { errors, isValid } = validateWeightInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

})

module.exports = router;