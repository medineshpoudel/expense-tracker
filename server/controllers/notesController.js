const Note = require("../model/notes.model");
const mongoose = require("mongoose");

const getAllNotes = async (req, res) => {
  const notes = await Note.find({}).sort({ createdAt: -1 });
  res.status(200).json(notes);
};

const getNote = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No note with note id found." });
  }

  const note = await Note.findById(id);
  if (!note) {
    res.status(404).json("No note with note id found.");
  }
  res.status(200).json(note);
};

const addNote = async (req, res) => {
  const { title, description } = req.body;

  const emptyFields = [];

  if (!title) {
    emptyFields.push("Title");
  }
  if (!description) {
    emptyFields.push("Description");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please Enter the Empty Fields", emptyFields });
  }

  try {
    const note = await Note.create(req.body);
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateNote = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "No such note found" });
  }

  const note = await Note.findByIdAndUpdate({ _id: id }, req.body);

  if (!note) {
    res.status(400).json({ error: "No such note found" });
  }

  res.status(200).json(note);
};

const deleteNote = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such note id found" });
  }

  const note = await Note.findOneAndDelete({ _id: id });

  if (!note) {
    res.status(400).json({ error: "No such note found" });
  }

  res.status(200).json(note);
};

module.exports = {
  getAllNotes,
  getNote,
  addNote,
  updateNote,
  deleteNote,
};
