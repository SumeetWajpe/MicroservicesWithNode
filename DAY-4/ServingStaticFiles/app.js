const http = require("http");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 3000;

// const readableStream = fs.createReadStream("Index.html");// handson

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("Index.html", (err, dataFromTheFile) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(dataFromTheFile);
    });
  } else if (req.url == "/script.js") {
    fs.readFile("script.js", (err, dataFromTheFile) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/javascript");
      res.end(dataFromTheFile);
    });
  } else if (req.url == "/styles.css") {
    fs.readFile("styles.css", (err, dataFromTheFile) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/css");
      res.end(dataFromTheFile);
    });
  } else if (req.url == "/products") {
    let products = [
      { id: 1, title: "MacBookPro", price: 250000 },
      { id: 2, title: "MacBookAir", price: 200000 },
    ];
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(products));
  } else {
    res.statusCode = 404;
    res.end("Resource not found !"); //Error Page.html
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
