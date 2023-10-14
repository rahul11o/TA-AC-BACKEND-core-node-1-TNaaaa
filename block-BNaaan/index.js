var http = require("http");

let server = http.createServer(handleRquest);

server.listen(3000, () => {
  console.log("server listening to the port 3000");
});

function handleRquest(req, res) {
  console.log(req.headers);
  console.log(req.method);
  console.log(req.url);
  res.end("welcome to node js");
}
