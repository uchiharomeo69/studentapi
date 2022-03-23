const jwt = require("jsonwebtoken");

module.exports.signData = (data) => {
  return new Promise((resolve, reject) => {
    jwt.sign(data, process.env.SECRET_KEY, (err, token) => {
      if (err) {
        reject(err);
      }
      resolve(token);
    });
  });
};

module.exports.veryfyData = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY);
};
