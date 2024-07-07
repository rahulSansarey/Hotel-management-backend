const express = require("express");
const router = express.Router();
const employeeVal = require("../models/employee");

router.post("/", async (req, res) => {
  try {
    const employee = req.body;

    const employeeList = await employeeVal(employee);
    const savedEmployee = employeeList.save();
    res.status(200).json(employeeList);
    console.log("Data saved");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports =router;
