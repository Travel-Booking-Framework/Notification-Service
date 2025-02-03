require("dotenv").config();
const express = require("express");
const startConsumer = require("./services/kafkaConsumer");

const app = express();
const PORT = process.env.PORT || 3000;

startConsumer().catch(console.error);

app.listen(PORT, () => {
  console.log(`Notification service running on port ${PORT}`);
});
