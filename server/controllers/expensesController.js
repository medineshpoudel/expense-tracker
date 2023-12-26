const Expenses = require("../model/Expenses");

const postExpenses = async (req, res) => {
  const expense = req.body;
  const user = req.user;
  try {
    const newExpense = await Expenses.create({
      ...expense,
      createdBy: user?._id,
    });
    res.status(200).json(newExpense);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getAllExpenses = async (req, res) => {
  const user = req.user;
  try {
    const expenses = await Expenses.find({ createdBy: user._id });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const expense = await Expenses.findOne({ _id: id });
    res.status(200).json(expense);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const updateExpense = async (req, res) => {
  const { id } = req.params;
  const dataToBeUpdated = req.body;

  try {
    const updatedExpense = await Expenses.findOneAndUpdate(
      { _id: id },
      { $set: dataToBeUpdated },
      { new: true } // This option returns the updated document
    );
    res.status(200).json(updatedExpense);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const deleteExpense = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedExpense = await Expenses.deleteOne({ _id: id });
    res.status(200).json(deletedExpense);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getExpensesByCategory = async (req, res) => {
  const { category } = req.body;
  try {
    const result = await Expenses.aggregate([
      {
        $match: { category: [category], createdBy: req.user._id.toString() },
      },
      {
        $group: { _id: "$category", totalAmount: { $sum: "$amount" } },
      },
    ]);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getExpensesSumBasedOnCategories = async (req, res) => {
  try {
    const result = await Expenses.aggregate([
      {
        $match: { createdBy: req.user._id.toString() },
      },
      {
        $group: { _id: "$category", totalAmount: { $sum: "$amount" } },
      },
    ]);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getTotalExpensesByUser = async (req, res) => {
  try {
    const sum = await Expenses.aggregate([
      {
        $match: { createdBy: req.user._id.toString() },
      },
      {
        $group: { _id: 0, totalAmount: { $sum: "$amount" } },
      },
    ]);
    res.status(200).json(sum);
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = {
  postExpenses,
  getAllExpenses,
  getExpense,
  updateExpense,
  deleteExpense,
  getExpensesByCategory,
  getTotalExpensesByUser,
  getExpensesSumBasedOnCategories,
};
