const jwt = require("jsonwebtoken");
const SECRET_KET = "SECRETKEYFORJWT";
module.exports = async function isAuthenticated(req, res, next) {
  // verify()
  if (req.headers["authorization"]) {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET_KET, (err, decodedToken) => {
      if (err) res.status(500).json({ err: err.message });
      else {
        console.log(decodedToken);
        req.user = decodedToken.name;
        next();
      }
    });
  } else {
    return res.status(500).json({ message: "Token Not found !" });
  }
};
