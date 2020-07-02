const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const getRandomColor = require("../utils/getRandomColor");

//Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
  expense_categories: [
    {
      name: { type: String, trim: true },
      color: {
        type: String,
        default: getRandomColor
      }
    }
  ],
  income_categories: [
    {
      name: { type: String, trim: true },
      color: {
        type: String,
        default: getRandomColor
      }
    }
  ]
});

module.exports = User = mongoose.model("user", UserSchema);
