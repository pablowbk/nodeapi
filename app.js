const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
require("dotenv/config");

//Import routes
const postsRoute = require("./routes/posts");

//middleware
app.use(bodyParser.json());
app.use("/posts", postsRoute);

//routes
app.get("/", (req, res) => {
  res.send("We're at home.");
});

//connect to db
//mongodb + srv: //pablow:<password>@cluster0-umnaa.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => {
    console.log("db connected ok");
  }
);

//Start listening to the server
app.listen(3000);
