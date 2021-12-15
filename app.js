const express = require("express");
const bodyParser = require("body-parser");

// initialize express app
const app = express();
let port = 5000;

app.listen(port, () => {
  console.log("Server is up and running on port number: " + port);
});
