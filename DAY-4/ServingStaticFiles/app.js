const http = require("http");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 3000;

// const readableStream = fs.createReadStream("Index.html");// handson

const server = http.createServer((req, res) => {
  fs.readFile("Index.html", (err, dataFromTheFile) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(dataFromTheFile);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
