const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const incomeTransactionSchema = new Schema({
  user: { type: ObjectId, ref: "user" },
  date: { type: Date, default: Date.now },
  category: { name: String, color: String },
  amount: Number,
  comment: String
});

module.exports = mongoose.model("income", incomeTransactionSchema);