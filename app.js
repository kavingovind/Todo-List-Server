const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Imports routes for the task
const task = require("./routes/task");

// Initialize express app
const app = express();

// Set up mongoose connection
let mongodb_url =
  "mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.pgeol.mongodb.net/<DATABASE_NAME>?retryWrites=true&w=majority";

const mongoDB = process.env.MONGODB_URI || mongodb_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/task", task);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is up and running on port number: " + port);
});
