const express = require("express");
const router = express.Router();
const validateWeightInput = require("../../validation/weights");
const Weight = require('../../models/Weight');


// Get all weights for user
router.get('/:userId', async (req,res) => {

  try {
    const weights = await Weight.find({ userId: req.params.userId })
    res.status(200).json(weights)
  }

  catch(err) {
    console.log(err);
  }
    
})


// Create a weight
router.post('/', async (req, res) => {
  
  const weightData = Object.assign({}, req.body);
  weightData.date = new Date();
  weightData.weight = parseFloat(weightData.weight);
  
  const { errors, isValid } = validateWeightInput(weightData);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newWeight = new Weight({
    userId: weightData.userId,
    date: weightData.date,
    weight: weightDate.weight,
  });

  try {
    const response = await newWeight.save()
    console.log(response);
    res.status(200).json(response);
  }
  catch(err) {
    console.log(err);
  }
  
})

module.exports = router;