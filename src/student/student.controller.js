const studentService = require("./student.services");
class StudentController {
  async findStudent(req, res) {
    const { findBy, searchInfor } = req.query;
    const searchObject = {
      [findBy]: {
        $regex: searchInfor,
      },
    };
    const student = await studentService.find(searchObject);
    res.status(200).json(student);
  }
  async updateStudent(req, res) {
    try {
      const student = req.body;
      res.status(200).json(await studentService.update(student));
    } catch (error) {
      res.status(404).json({ messages: error.message });
    }
  }
  async deleteStudent(req, res) {
    try {
      const { code } = req.body;
      res.status(200).json(await studentService.delete(code));
    } catch (error) {
      res.status(404).json({ messages: error.message });
    }
  }
  async insertStudent(req, res) {
    try {
      const student = req.body;
      const insertStudent = await studentService.insert(student);
      if (insertStudent) res.status(200).json(insertStudent);
      else res.status(404).json({ messages: "student exist" });
    } catch (error) {
      res.status(404).json({ messages: error.message });
    }
  }
}

module.exports = new StudentController();
