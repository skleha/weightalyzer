// Import Mongoose, import key, connect to MongoDB
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// Require express library, creates a new express server
const express = require("express");
const app = express();

// Which port app runs on (process.env.port for Heroku, 5000 for local development)
const port = process.env.PORT || 5000;

// app initialized; port initialized; send message to indicate app is listening
app.listen(port, () => console.log(`Server is running on port ${port}`))

// Response to a GET request to local host 5000
app.get("/", (req, res) => res.send("hello world"));

// Import defined APIs
const users = require("./routes/api/users");

// Tell express to use APIs
app.use("/api/users", users);

// So we can parse JSON sent to frontend
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
