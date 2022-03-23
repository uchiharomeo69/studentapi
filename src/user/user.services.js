const _ = require("lodash");
const userSchema = require("./user.schema");
class UserService {
  async find(searchObject) {
    return await userSchema.find(searchObject);
  }
  async insert({ username, password }) {
    if (!_.isEmpty(await userSchema.find({ username }))) {
      return null;
    }
    return await new userSchema({ username, password }).save();
  }
}

module.exports = new UserService();
