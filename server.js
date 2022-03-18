const express = require("express");
const mongo = require("./src/database/connect");
const studentRouter = require("./src/student/student.routes");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require("dotenv").config();
app.listen(PORT, () => {
  console.log(`Server start at ${PORT}`);
});

app.use("/student", studentRouter);

mongo.connect();
