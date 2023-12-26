const express = require("express");
const router = express.Router();
const requireAuth = require("../middlewares/requireAuth");
const {
  getAllExpenses,
  getExpense,
  postExpenses,
  updateExpense,
  deleteExpense,
} = require("../controllers/expensesController");

router.use(requireAuth);
router.get("/", getAllExpenses);
router.post("/", postExpenses);
router.route("/:id").patch(updateExpense).delete(deleteExpense).get(getExpense);

module.exports = router;
