
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const express = require("express");
const app = express(); // Initialize Express server
const bodyParser = require("body-parser");  // Middlewear for parsing the request body
const port = process.env.PORT || 5000; // Which port app runs on (process.env.port for Heroku, 5000 for local development)
const users = require("./routes/api/users");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// Employ bodyParser to parse the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Send message to indicate app is listening
app.listen(port, () => console.log(`Server is running on port ${port}`))

// Response to a GET request to local host 5000
app.get("/", (req, res) => res.send("hello world"));

// Tell express to use APIs with prefix "/api/users"
// Any endpoint defined in users will need prefix
app.use("/api/users", users);


