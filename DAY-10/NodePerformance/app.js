const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url == "/non-blocking") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Non Blocking Response !");
  } else if (req.url == "/blocking") {
    for (let index = 0; index < 6000000000; index++) {}
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Blocking Response !");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
