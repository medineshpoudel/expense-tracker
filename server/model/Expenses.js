const mongoose = require("mongoose");
const expensesSchema = new mongoose.Schema(
  {
    category: {
      type: [String],
      enum: ["personal", "bill sharing", "loan payment", "family expenditure"],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    createdBy: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Expenses", expensesSchema);
