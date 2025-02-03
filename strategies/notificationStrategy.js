class NotificationStrategy {
    send(to, subject, text) {
      throw new Error("Method 'send' must be implemented");
    }
  }
  
  module.exports = NotificationStrategy;
  