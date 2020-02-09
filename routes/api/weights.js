const express = require("express");
const router = express.Router();
const Weight = require('../../models/Weight');

// Test route
router.get('/test', (req, res) => res.json({msg: "this is the weights test route"}));

// Add weight
router.get('/record', (req, res) => {
  
  const { errors, isValid } = validateWeightInput(req.body);

  if (!isValid) {
    return res.status(200).json({ msg: "didn't pass validation"});
  } else {
    return res.status(200).json({ msg: "passed validation" });
  }

})

module.exports = router;