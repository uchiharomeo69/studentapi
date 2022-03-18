const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const studentSchema = new Schema({
  code: { type: String, require: true },
  name: { type: String, require: true },
  school: { type: String, require: true },
  class: { type: String, require: true },
  score: { type: Number, require: true },
});

module.exports = mongoose.model("Student", studentSchema);
