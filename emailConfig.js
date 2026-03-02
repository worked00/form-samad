// emailConfig.js
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "bushrabibi0102655@gmail.com",
    pass: "mnyf ixzz uqpw psfo"
  }
});
