function GetData(callback) {
  // make async call to the server
  // return the data to index.html

  let xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/postsss");

  xmlHttpReq.onreadystatechange = function () {
    if (xmlHttpReq.readyState === 4 && xmlHttpReq.status === 200) {
      callback(null, xmlHttpReq.responseText);
    } else if (xmlHttpReq.readyState === 4 && xmlHttpReq.status !== 200) {
      callback("Something went wrong !", null);
    }
  };

  xmlHttpReq.send(); // places the async call !
}
