const mongoose = require("mongoose");
const uri =
  "mongodb+srv://huypt:huyprono1@cluster0.rz2vs.mongodb.net/student_Data?retryWrites=true&w=majority";
module.exports.connect = async (app) => {
  mongoose.connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    function (err, res) {
      if (err) {
        console.log("Error connecting to the database.. " + err);
      } else {
        console.log("Connected to Database: " + uri);
      }
    }
  );
};
