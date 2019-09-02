// Load Required Modules
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const router = require("./src/routes/route");
require("dotenv/config");
// const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

const middleware = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(middleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));
// app.use(router);

// Server Listening
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
