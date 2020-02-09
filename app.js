
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const express = require("express");
const app = express(); // Initialize Express server
const bodyParser = require("body-parser");  // Middlewear for parsing the request body
const port = process.env.PORT || 5000; // Which port app runs on (process.env.port for Heroku, 5000 for local development)
const users = require("./routes/api/users");
const passport = require('passport');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// Employ bodyParser to parse the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Send message to indicate app is listening
app.listen(port, () => console.log(`Server is running on port ${port}`))

// Middleware that moves 
app.use(passport.initialize());
require('./config/passport')(passport);

// Tell express to use APIs with prefix "/api/users"
// Any endpoint defined in users will need this prefix
app.use("/api/users", users);

