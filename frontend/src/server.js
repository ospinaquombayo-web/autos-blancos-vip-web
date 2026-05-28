const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "josedan538@gmail.com",
    pass: "vhrmzcunhczcexlz",
  },
});
