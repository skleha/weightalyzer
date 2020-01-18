
// Creates a new express server
const express = require("express");
const app = express();

// Which port app runs on (process.env.port for Heroku)
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("hello world"));
app.listen(port, () => console.log(`Server is running on port ${port}`))
