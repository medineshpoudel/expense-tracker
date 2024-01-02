const { default: mongoose } = require("mongoose");
const Income = require("../model/Income");

/*
    @desc Get all income
    @route GET /income
    @access Private
*/
const getAllIncome = async (req, res) => {
  const userId = req.user._id;
  console.log(req.user._id);

  try {
    const realtedIncome = await Income.find({ createdBy: userId });
    res.status(200).json(realtedIncome);
  } catch (error) {
    res.status(400).json({ error });
  }
};

/*
    @desc Get all income
    @route GET /income/:id
    @access Private
*/
const getIncome = async (req, res) => {
  const userId = req.user._id;
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid id");
    }

    const realtedIncome = await Income.findOne({
      $and: [{ createdBy: userId }, { _id: id }],
    });

    if (!realtedIncome) {
      throw new Error("No income found");
    }

    res.status(200).json(realtedIncome);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/*
    @desc create income 
    @route POST /income
    @access Private
*/
const addIncome = async (req, res) => {
  const income = req.body;
  const userId = req.user._id;

  try {
    if (!income.amount) {
      throw new Error("Amount is required");
    }
    const newIncome = await Income.create({
      ...income,
      createdBy: userId,
    });
    res.status(200).json(newIncome);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/*
    @desc update income 
    @route POST /income/:id
    @access Private
*/
const updateIncome = async (req, res) => {
  const userId = req.user._id;
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid id");
    }

    const income = await Income.findById(id);

    if (!income) {
      throw new Error("No income found");
    }

    const updatedIncome = await Income.findOneAndUpdate(
      {
        $and: [{ createdBy: userId }, { _id: id }],
      },
      { ...req.body },
      { new: true }
    );

    if (!updatedIncome) {
      throw new Error("Could not delete");
    }

    res.status(200).json(updatedIncome);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/*
    @desc delete income 
    @route POST /income/:id
    @access Private
*/
const deleteIncome = async (req, res) => {
  const userId = req.user._id;
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid id");
    }

    const income = await Income.findById(id);

    if (!income) {
      throw new Error("No income found");
    }

    const deletedIncome = await Income.findOneAndDelete({
      $and: [{ createdBy: userId }, { _id: id }],
    });

    if (!deletedIncome) {
      throw new Error("Could not delete");
    }

    res.status(200).json(deletedIncome);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllIncome,
  getIncome,
  addIncome,
  updateIncome,
  deleteIncome,
};
