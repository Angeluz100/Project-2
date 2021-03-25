const express = require("express");
const morgan = require("morgan");
const methodOverride = require ('method-override')
const port = process.env.PORT || 4000;

require('dotenv').config();
require("./config/database");

const indexRouter = require("./routes/index");
const homesRouter = require("./routes/homes");
const reviewsRouter = require("./routes/reviews");
const informationsRouter = require('./routes/informations');

const app = express();

app.set("view engine", "ejs");


app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(methodOverride('_method'));

app.use("/", indexRouter);
app.use("/homes", homesRouter);
app.use("/", reviewsRouter);
app.use('/', informationsRouter);

app.listen(port, function () {
  console.log(`Express is listening on port:${port}`);
});
