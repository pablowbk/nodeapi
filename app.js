const express = require("express");

const app = express();

//middleware



//routes
app.get("/", (req, res) => {
  res.send("We're at home.");
});

app.get("/posts", (req, res) => {
  res.send("We're at posts!");
});
//Start listening to the server
app.listen(3000);
