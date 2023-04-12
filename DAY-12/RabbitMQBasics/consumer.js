const amqplib = require("amqplib/callback_api");

amqplib.connect("amqp://localhost", (err, conn) => {
  if (err) {
    throw err;
  }
  conn.createChannel((err, channel) => {
    if (err) {
      throw err;
    }
    let queue = "rabbitmq-queue";
    channel.assertQueue(queue);
    channel.consume(queue, msg => {
      console.log("Received : ", msg.content.toString());
      channel.ack(msg);
    });
  });
});
