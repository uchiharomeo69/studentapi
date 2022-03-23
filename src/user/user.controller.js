const _ = require("lodash");
const userService = require("./user.services");
const jwt = require("../helper/jwt.helper");

class UserController {
  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await userService.find({ username, password });
      if (_.isEmpty(user)) {
        return res.status(401).json({ message: "User not found" });
      }
      res.status(200).json({ token: await jwt.signData({ _id: user?._id }) });
    } catch (error) {
      res.status(404).json({ messages: error.message });
    }
  }
  async register(req, res) {
    try {
      const { username, password } = req.body;
      const user = await userService.find({ username });
      if (!_.isEmpty(user)) {
        return res.status(401).json({ message: "User Exist" });
      }
      res.status(200).json(await userService.insert({ username, password }));
    } catch (error) {
      res.status(404).json({ messages: error.message });
    }
  }
}
module.exports = new UserController();
