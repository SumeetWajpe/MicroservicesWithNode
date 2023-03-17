const EventEmitter = require("events").EventEmitter;

// publisher
function GetCount(maxCount) {
  let e = new EventEmitter();

  // logic
  process.nextTick(() => {
    e.emit("start");
    let counter = 0;
    let t = setInterval(() => {
      if (counter < maxCount) {
        e.emit("data", counter++);
      }
      if (counter == maxCount) {
        e.emit("done", counter);
        clearInterval(t);
      }
      if (counter == 8) {
        e.emit("error", counter);
        clearInterval(t);
      }
    }, 500);
  });
  return e;
}

// subscriber
let evt = GetCount(10);
evt.on("start", function () {
  console.log("Loop started");
});
evt.on("data", function (currCount) {
  console.log("Curr Count : " + currCount);
});
evt.on("done", function (currCount) {
  console.log("Done Looping with Curr Count : " + currCount);
});
evt.on("error", function (currCount) {
  console.log("Error encountered with Curr Count: " + currCount);
});
console.log("Program Ended !");
