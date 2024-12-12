const morgan = require("morgan");
const express = require("express");
const chalk = require("chalk");
const path = require("path");
const debug = require("debug")("app");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

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

//Connect app to mongoDB
mongoose.connect(
  "mongodb+srv://tessellison10:IRJVLoIEO6SNTgI6@cluster0.p6lyk.mongodb.net/houses"
);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));

db.once("open", () => {
  debug(chalk.bgBlue.whiteBright.bold("MongoDB connected successfully"));
});

//Routes
app.use("/", globomanticsRouter());

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  debug(`listening on port ${chalk.blue(PORT)}`);
});
