const path = require("path");

module.exports = {
  base: {
    url: "/api",
    location: path.join(__dirname, "api")
  },
  ui: "/portal/",
  port: 8080,
  session: {
    secret: "bob"
  }
}
