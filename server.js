const mongoose = require("mongoose");
const express = require("express");
// Creating an instance of express as app
const app = express();
require("dotenv").config();

// Adding body parser
var bodyParser = require("body-parser");
app.use(bodyParser.json());

// Import Db from db.js
const db = require("./db");

const PORT = process.env.PORT || 3000;


// Imporrting Routes
const menuRoutes = require("./routes/menuRoutes.js");

app.use("/menu", menuRoutes);
app.use("/getmenu", menuRoutes);
app.use("/updatemenu", menuRoutes);
app.use("/deletemenu", menuRoutes);

// Paremetrized accessing the routes

app.use("/menu/:categoryType", menuRoutes);



app.listen(PORT, () => {
  console.log("server is running on port", { PORT });
});
