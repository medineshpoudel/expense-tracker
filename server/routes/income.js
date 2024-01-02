const express = require("express");
const requireAuth = require("../middlewares/requireAuth");
const {
  addIncome,
  getAllIncome,
  getIncome,
  deleteIncome,
  updateIncome,
} = require("../controllers/incomeController");
const router = express.Router();

router.use(requireAuth);
router.route("/").get(getAllIncome).post(addIncome);
router.route("/:id").get(getIncome).patch(updateIncome).delete(deleteIncome);

module.exports = router;
