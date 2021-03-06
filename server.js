const express = require("express");
const cors = require("cors");
const mongo = require("./src/database/connect");
const studentRouter = require("./src/student/student.routes");
const userRouter = require("./src/user/user.routes");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require("dotenv").config();
app.listen(PORT, () => {
  console.log(`Server start at ${PORT}`);
});

app.use("/student", studentRouter);
app.use("/", userRouter);

mongo.connect();
