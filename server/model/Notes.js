const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
  },
});

module.exports = mongoose.model("Notes", notesSchema);
