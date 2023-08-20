require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOBD_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", () => console.error.bind(console, "connection error: "));
db.once("open", () => console.log("Conneced to the database succesfully"));

module.exports = db;
