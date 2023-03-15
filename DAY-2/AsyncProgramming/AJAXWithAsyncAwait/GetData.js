function GetData() {
  // make async call to the server
  // return the data to index.html

  return new Promise((resolve, reject) => {
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/posts");

    xmlHttpReq.onreadystatechange = function () {
      if (xmlHttpReq.readyState === 4 && xmlHttpReq.status === 200) {
        resolve(xmlHttpReq.responseText);
      } else if (xmlHttpReq.readyState === 4 && xmlHttpReq.status !== 200) {
        reject("Something went wrong !");
      }
    };

    xmlHttpReq.send(); // places the async call !
  });
}
