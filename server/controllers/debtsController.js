const Debts = require("../model/Debts");

const getAllDebts = async (req, res) => {
  const user = req.user;
  try {
    const debts = await Debts.find({ createdBy: user._id });
    res.status(200).json(debts);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getDebt = async (req, res) => {
  const { id } = req.params;
  try {
    const debt = await Debts.findOne({ _id: id });
    res.status(200).json(debt);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const postDebt = async (req, res) => {
  const user = req.user;
  const { name, creditor, amount, dateIncurred } = req.body;
  if (!name || !creditor || !amount || !dateIncurred) {
    return res.status(400).json({
      error: "Fieds  name, creditor , amount , dateIncurred are required",
    });
  }

  try {
    const newDebt = await Debts.create({
      ...req.body,
      createdBy: user?._id,
    });
    res.status(200).json(newDebt);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const updateDebt = async (req, res) => {
  const { id } = req.params;
  const dataToBeUpdated = req.body;
  const { name, creditor, amount, dateIncurred } = req.body;
  if (!name || !creditor || !amount || !dateIncurred) {
    return res.status(400).json({
      error: "Fieds  name, creditor , amount , dateIncurred are required",
    });
  }

  try {
    const updatedDebts = await Debts.findOneAndUpdate(
      { _id: id },
      { $set: dataToBeUpdated },
      { new: true } // This option returns the updated document
    );
    res.status(200).json(updatedDebts);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const deleteDebt = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDebt = await Debts.deleteOne({ _id: id });
    res.status(200).json(deletedDebt);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getDebtsByStatus = async (req, res) => {
  const { status } = req.query;
  try {
    const result = await Debts.aggregate([
      {
        $match: { status: [status], createdBy: req.user._id.toString() },
      },
    ]);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getDebtsByPriority = async (req, res) => {
  const { priority } = req.body;
  try {
    const result = await Debts.aggregate([
      {
        $match: { priority: [priority], createdBy: req.user._id.toString() },
      },
    ]);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getTotalDebtsByUser = async (req, res) => {
  try {
    const result = await Debts.aggregate([
      {
        $match: { createdBy: req.user._id.toString() },
      },
      {
        $group: { _id: 0, totalDebts: { $sum: "$amount" } },
      },
    ]);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getAllDebts,
  getDebt,
  postDebt,
  updateDebt,
  deleteDebt,
  getDebtsByStatus,
  getTotalDebtsByUser,
  getDebtsByPriority,
};
