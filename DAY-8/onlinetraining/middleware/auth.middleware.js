var jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

function isAuthenticated(req, res, next) {
  const {
    headers: { cookie },
  } = req;

  if (cookie) {
    const values = cookie.split(";").reduce((res, item) => {
      const data = item.trim().split("=");
      return { ...res, [data[0]]: data[1] };
    }, {});
    const token = values["jwt-token"];
    jwt.verify(token, secret, (err, user) => {
      if (err) {
        return res.render("error", {
          error: { status: 401 },
          message: err.message,
        });
      } else {
        next(); // successful authentication
      }
    });
  } else {
    let error = { status: 401 };
    //return res.render("error", { error, message: "Token not found !" });
    return res.redirect("http://localhost:3000/");
  }
}

module.exports = isAuthenticated;
