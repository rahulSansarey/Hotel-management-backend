const express = require("express");
const router = express.Router();
const hotelList = require("../models/menu");

// routes to add data in databases
router.post("/", async (req, res) => {
  try {
    const List = req.body;

    const newList = hotelList(List);
    const savedList = await newList.save();
    res.status(200).json(savedList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
// routes to get the data
router.get("/", async (req, res) => {
  try {
    const getMenu = await hotelList.find();
    console.log("Got the data");
    res.status(200).json({ getMenu });
  } catch (error) {
    res.status(404).json({ message: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;

    const newdata = await hotelList.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!newdata) {
      console.log("data not found");
    }
    console.log("Data updated");
    res.status(200).json(newdata);
  } catch (error) {
    res.status(404).json({ message: "Internal server error" });
  }
});

// creating a basic route to delete the single database collection

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const dltcollection = req.body;
    const deletebtn = await hotelList.findByIdAndDelete(id);
    console.log("data deleted");
    res.status(200).json({ message: "Data deleted" });
  } catch (error) {
    res.status(404).json({ message: "Internal server error" });
  }
});





module.exports = router;
