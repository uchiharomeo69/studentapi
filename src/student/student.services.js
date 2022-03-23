const _ = require("lodash");
const studentSchema = require("./student.schema");

class StudentService {
  async find(searchObject) {
    return await studentSchema.find(searchObject);
  }
  async remove(code) {
    return await studentSchema.findOneAndDelete({ code });
  }
  async update(student) {
    return await studentSchema.findOneAndReplace(
      { code: student?.code },
      student
    );
  }
  async insert(student) {
    const findStudent = await this.find({
      ["code"]: { $regex: student?.code },
    });
    if (!_.isEmpty(findStudent)) {
      return null;
    }
    const insertStudent = new studentSchema(student);
    return insertStudent.save();
  }
}
module.exports = new StudentService();
