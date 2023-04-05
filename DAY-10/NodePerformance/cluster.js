const cluster = require("cluster");
const http = require("http");

const os = require("os");

let numOfCores = os.cpus().length;
console.log(numOfCores);

const hostname = "127.0.0.1";
const port = 3000;

if (cluster.isPrimary) {
  console.log(`Primary process  ${process.pid} running !`);
  cluster.fork();
  cluster.fork();
  // should fork() for max logical cores of a machine
  //   for (let i = 0; i < numOfCores; i++) {
  //     cluster.fork();
  //   }
} else {
  console.log(`Worker process ${process.pid} running !`);

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
}
