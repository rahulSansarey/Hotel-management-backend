const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
    enum: ["employyee", "manager", "owner"],
  },
  DOJ: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const employeeVal = mongoose.model("employeeVal", employeeSchema);
module.exports = employeeVal;
