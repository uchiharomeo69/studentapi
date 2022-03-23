const express = require("express");
const studentControler = require("./student.controller");

const router = express.Router();
router.get("/", studentControler.findStudent);
router.put("/", studentControler.insertStudent);
router.post("/", studentControler.updateStudent);
router.post("/delete", studentControler.deleteStudent);
module.exports = router;
