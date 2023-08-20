const express = require("express");
const {
  getAllNotes,
  getNote,
  addNote,
  deleteNote,
  updateNote,
} = require("../controllers/notesController");

const router = express.Router();
router.get("/note", getAllNotes);
router.get("/note/:id", getNote);
router.post("/note", addNote);
router.delete("/note/:id", deleteNote);
router.patch("/note/:id", updateNote);

module.exports = router;
