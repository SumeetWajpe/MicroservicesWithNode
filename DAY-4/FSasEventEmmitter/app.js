const fs = require("fs");

// create streams

const readableStream = fs.createReadStream("Input.txt");
const writableStream = fs.createWriteStream("Output.txt");

// let dataFromFile = "";
// readableStream.on("data", chunk => {
//   console.log(
//     "\n\r>>>>>>>>>>>>>>>>>Chunk Received !>>>>>>>>>>>>>>>>>>>>>>>\n\r",
//   );
//   dataFromFile += chunk.toString();
// });

// readableStream.on("end", () => {
//   writableStream.write(dataFromFile);
//   writableStream.end();
// });
readableStream.pipe(writableStream);
