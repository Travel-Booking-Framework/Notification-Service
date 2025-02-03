const { Kafka } = require("kafkajs");
const { sendNotification } = require("../controllers/notificationController");

const kafka = new Kafka({
  clientId: "notification-service",
  brokers: [process.env.KAFKA_BROKER],
});

const consumer = kafka.consumer({ groupId: "notification-group" });

async function startConsumer() {
  await consumer.connect();
  await consumer.subscribe({ topic: process.env.KAFKA_TOPIC, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const notification = JSON.parse(message.value.toString());
      console.log("Received notification:", notification);

      await sendNotification(notification.type, notification.to, notification.subject, notification.text);
    },
  });
}

module.exports = startConsumer;
