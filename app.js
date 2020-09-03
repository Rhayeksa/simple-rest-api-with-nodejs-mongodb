const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const usersRoute = require("./routes/usersRoute");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/users", usersRoute);

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const mongourl = "mongodb://localhost:27017/rhayeksadb";
mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on(
  "error",
  console.error.bind(console, "Connection error tolong dicek terlebih dahulu")
);

module.exports = app;
