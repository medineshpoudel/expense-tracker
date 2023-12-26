const express = require("express");
const requireAuth = require("../middlewares/requireAuth");
const { allowedRoles } = require("../middlewares/roleAuth");
const router = express.Router();

router.use(requireAuth);
router.use(allowedRoles(["user"]));
router.route("/").get((req, res) => res.json(req.user));

module.exports = router;
