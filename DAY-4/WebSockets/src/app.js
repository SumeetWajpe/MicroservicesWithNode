const http = require("http");
const fs = require("fs");
const socket = require("socket.io");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const readableStream = fs.createReadStream("ClientPeer.html");
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  readableStream.pipe(res);
});

var io = socket(server);
io.sockets.on("connection", skt => {
  setInterval(() => {
    let dataToBeSent = new Date();
    skt.emit("msg_from_server_peer", dataToBeSent);
  }, 2000);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
