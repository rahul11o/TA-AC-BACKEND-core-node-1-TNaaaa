var http = require("http");

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.statusCode = 201;
  res.setHeader("Content-Type", "text/html");
  res.end("hey rahul");
}

server.listen(4444, () => {
  console.log("server listening on port number 4444");
});
