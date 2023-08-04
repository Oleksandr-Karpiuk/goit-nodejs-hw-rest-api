const nodemailer = require("nodemailer");
require("dotenv").config();

const { EMAIL_USER, EMAIL_PASS, EMAIL_HOST, EMAIL_SMTP_PORT } = process.env;

const transport = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_SMTP_PORT,
  secure: true,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

const sendEmail = async (data) => {
  const emailOptions = { ...data, from: EMAIL_USER };
  await transport.sendMail(emailOptions);
  return true;
};

module.exports = sendEmail;
