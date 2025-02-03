const NotificationStrategy = require("./notificationStrategy");
const transporter = require("../config/emailConfig");

class EmailStrategy extends NotificationStrategy {
  async send(to, subject, text) {
    await transporter.sendMail({ from: process.env.EMAIL_USER, to, subject, text });
    console.log(`Email sent to ${to}`);
  }
}

module.exports = new EmailStrategy();
const NotificationStrategy = require("./notificationStrategy");
const transporter = require("../config/emailConfig");

class EmailStrategy extends NotificationStrategy {
  async send(to, subject, text) {
    await transporter.sendMail({ from: process.env.EMAIL_USER, to, subject, text });
    console.log(`Email sent to ${to}`);
  }
}

module.exports = new EmailStrategy();
