const morgan = require("morgan");
const express = require("express");
const chalk = require("chalk");
const path = require("path");
const debug = require("debug")("app");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "/public/")));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  debug(`listening on port ${chalk.blue(PORT)}`);
});
