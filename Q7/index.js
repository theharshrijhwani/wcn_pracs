const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const date = new Date();
  const logdata = `${date.toString()}: ${req.url} - new request receved \n`;
  fs.appendFile("client.txt", logdata, (err) => {
    console.log(err);
  });
  res.end(() => {
    console.log("hello");
  });
});

server.listen(8000, () => {
  console.log("listening on port 8000");
});
