const _ = require("lodash");
const user = require("../user/user.services");
const jwt = require("../helper/jwt.helper");

module.exports = async (req, res, next) => {
  try {
    const token = req.header("x-access-token");

    if (!token) {
      return res.status(403).json({ message: authorizationError });
    }
    const _id = jwt.veryfyData(token)?._id;
    const user = await user.find({ _id });

    if (_.isEmpty(user)) {
      return res.status(403).json({ message: authorizationError });
    } else {
      res.locals.user = user;
    }
    next();
  } catch (error) {
    return res.status(403).json({ message: authorizationError });
  }
};
