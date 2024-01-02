const mongoose = require("mongoose");

const debtsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    creditor: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    dateIncurred: {
      type: Date,
      required: true,
    },
    interestRate: {
      type: Number,
      min: 0,
      max: 100,
    },
    interestToBePaid: {
      type: Number,
      default: function () {
        const amount = (this.interestToBePaid =
          (this.amount * this.interestRate) / 100);
        return amount;
      },
    },
    status: {
      type: [String],
      enum: ["Pending", "Paid", "Overdue"],
      default: ["Pending"],
    },
    priority: {
      type: [String],
      enum: ["High", "Medium", "Low"],
    },
    createdBy: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Debts", debtsSchema);
