const express = require("express");
const requireAuth = require("../middlewares/requireAuth");
const router = express.Router();
const {
  getAllDebts,
  getDebt,
  postDebt,
  updateDebt,
  deleteDebt,
  getDebtsByStatus,
  getTotalDebtsByUser,
  getDebtsByPriority,
} = require("../controllers/debtsController");

router.use(requireAuth);
router.route("/").get(getAllDebts).post(postDebt);
router.route("/:id").get(getDebt).patch(updateDebt).delete(deleteDebt);
router.get("/total", getTotalDebtsByUser);
router.post("/priority", getDebtsByPriority);
router.get("/status", getDebtsByStatus);

module.exports = router;
