const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const WeightSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  weight: {
    type: Number,
    required: true
  }
});

module.exports = Weight = mongoose.model('weights', WeightSchema);