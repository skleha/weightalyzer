const express = require("express");
const router = express.Router();
const validateWeightInput = require("../../validation/weights");
const Weight = require('../../models/Weight');

// Test route
router.get('/test', (req, res) => res.json({msg: "this is the weights test route"}));

// Add weight
router.post('/record', (req, res) => {
  
  const { errors, isValid } = validateWeightInput(req.body);
  
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const thisUserId = req.body.userId;
  const dateData = req.body.date.split("-");
  const year = parseInt(dateData[0]);
  const month = parseInt(dateData[1]);
  const day = parseInt(dateData[2]);
  const thisDate = new Date(year, month, day);
  const thisWeight = parseFloat(req.body.weight);
  
  const newWeight = new Weight({
    userId: thisUserId,
    date: thisDate,
    weight: thisWeight,
  });

  newWeight
    .save()
    .then(weight => res.status(200).json({ msg: "success" }))
    .catch(err => res.status(422).json(err));

})

module.exports = router;