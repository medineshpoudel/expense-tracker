const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/users");
const notesRouter = require("./routes/notes");
const debtsRouter = require("./routes/debts");
const expensesRouter = require("./routes/expenses");
const app = express();
const connectDB = require("./configs/db/db.config");

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

dotenv.config();
connectDB();
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(req.path);
  next();
});

app.use("/user", userRouter);
app.use("/notes", notesRouter);
app.use("/expenses", expensesRouter);
app.use("/debts", debtsRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening to the port ${PORT}`);
});
