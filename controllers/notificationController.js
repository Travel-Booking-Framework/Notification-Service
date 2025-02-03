const emailStrategy = require("../strategies/emailStrategy");
const smsStrategy = require("../strategies/smsStrategy");

const notificationStrategies = {
  email: emailStrategy,
  sms: smsStrategy,
};

async function sendNotification(type, to, subject, text) {
  const strategy = notificationStrategies[type];
  if (!strategy) {
    throw new Error(`Notification type "${type}" is not supported.`);
  }
  await strategy.send(to, subject, text);
}

module.exports = { sendNotification };
