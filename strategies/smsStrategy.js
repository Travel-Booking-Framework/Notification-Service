const NotificationStrategy = require("./notificationStrategy");
const twilioClient = require("../config/smsConfig");

class SMSStrategy extends NotificationStrategy {
  async send(to, subject, text) {
    await twilioClient.messages.create({
      body: text,
      from: process.env.TWILIO_PHONE_NUMBER,
      to,
    });
    console.log(`SMS sent to ${to}`);
  }
}

module.exports = new SMSStrategy();
