const jwt = require("jsonwebtoken");
const { rawListeners } = require("../app");

const auth = (req, res, next) => {
  const token =
    req.cookies.token ||
    req.body.token ||
    req.header("Authorization").replace("Bearer ", "");
  if (!token) {
    return res.status(403).send("Token is not present");
  }
  try {
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    // req.user = decode;
    // console.log(req.user);
  } catch (error) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};
module.exports = auth;
