const mongoose = require("mongoose");
const express = require("express");
const passport = require("./auth.js");

// Creating an instance of express as app
const app = express();
require("dotenv").config();

// Adding body parser
var bodyParser = require("body-parser");
app.use(bodyParser.json());

// Import Db from db.js
const db = require("./db");

const PORT = process.env.PORT || 3000;

// Midlleaware to catch a logs

const logRequest = (req, res, next) => {
  console.log(
    `Curreent logs is ${Date().toString()} and request made on ${
      req.originalUrl
    }`
  );
  next();
};

app.use(passport.initialize());

const authenticate = passport.authenticate("local", { session: false });

app.get(
  "/hello",
  authenticate,

  function (req, res) {
    res.send("Hello we are employees");
  }
);

// Imporrting Routes
const menuRoutes = require("./routes/menuRoutes.js");
const employeeValue = require("./routes/employeeRoutes.js");

// menuroutes
app.use("/menu", logRequest, menuRoutes);
app.use("/getmenu", authenticate, logRequest, menuRoutes);
app.use("/updatemenu", menuRoutes);
app.use("/deletemenu", menuRoutes);

// Paremetrized accessing the routes
app.use("/menu/:categoryType", menuRoutes);

// employee routes

app.use("/employee", employeeValue);

// Middleware function

app.listen(PORT, () => {
  console.log("server is running on port", { PORT });
});
