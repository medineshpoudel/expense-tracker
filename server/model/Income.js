const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    source: {
      type: String,
      enum: ["Salary", "Freelance", "Gift", "Business"],
      default: "Salary",
    },
    recievedDate: {
      type: Date,
      default: Date.now,
    },
    incomeCategory: {
      type: String,
      enum: ["Salary", "Bonus", "Devident"],
      default: "Salary",
    },
    paymentMethod: {
      type: String,
      enum: ["Cash", "Bank Transfer", "Check"],
      default: "Bank Transfer",
    },
    description: {
      type: String,
    },
    taxInfo: {
      description: {
        type: String,
      },
      tax: {
        type: Number,
      },
    },
    scheduled: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Income = mongoose.model("Income", incomeSchema);

module.exports = Income;
