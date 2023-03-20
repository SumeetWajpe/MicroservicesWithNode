const fs = require("fs");

// create streams

const readableStream = fs.createReadStream("Input.txt");
const writableStream = fs.createWriteStream("Output.txt");

readableStream.on("data", chunk => {
  console.log(
    "\n\r>>>>>>>>>>>>>>>>>Chunk Received !>>>>>>>>>>>>>>>>>>>>>>>\n\r",
  );
});
