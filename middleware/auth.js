const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const authHeader = req.header("Authorization");
  if (!authHeader) return res.status(401).json({ message: "Authorization denied, token missing" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Authorization denied, token invalid" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; // user.id
    next();
  } catch (err) {
    res.status(401).json({ message: "Authorization denied, token invalid" });
  }
}

module.exports = auth;
