const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "No token provided",
    });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (decoded) {
    req.userId = decoded.id;
    next();
  } else {
    return res.status(401).json({
      message: "Incorrect credentials",
    });
  }
};

module.exports = {
  auth,
};
