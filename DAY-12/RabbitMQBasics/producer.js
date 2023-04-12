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
    //  let message = "Hello from Producer !";
    let message = JSON.stringify({
      products: [{ id: 1, title: "MacBookPro" }],
    });
    channel.assertQueue(queue);
    console.log("Sent : ", message);
    channel.sendToQueue(queue, Buffer.from(message));
  });
});
