var http = require("http");

let server = http.createServer(handleRequest);
server.listen(4000, () => {
  console.log("listening for the request at port 4000");
});
function handleRequest(req, res) {
  res.end("welcome to node");
}
