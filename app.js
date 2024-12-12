const morgan = require("morgan");
const express = require("express");
const chalk = require("chalk");
const path = require("path");
const debug = require("debug")("app");
const bodyParser = require("body-parser");

// My libraries
const globomanticsRouter = require("./src/routes/globomanticsRoutes");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "/public/")));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", globomanticsRouter());

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  debug(`listening on port ${chalk.blue(PORT)}`);
});
