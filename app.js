
// Creates a new express server
const express = require("express");
const app = express();

// Import Mongoose, import key to access database
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;


// Connect to database through Mongoose
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// Which port app runs on (process.env.port for Heroku, 5000 for local development)
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("hello world"));
app.listen(port, () => console.log(`Server is running on port ${port}`))
