var http = require("http");
const { Http2ServerRequest } = require("http2");
var url = require("url");

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  let parsedUrl = url.parse(req.url, true);
  let pathname = parsedUrl.pathname;

  if (req.method === "GET" && pathname === "/") {
    res.setHeader("content-Type", "text/plain");
    res.end("Welcome to homepage");
  } else if (req.method === "GET" && pathname === "/about") {
    res.setHeader("content-Type", "text/html");
    res.end("<h2>this is all about NodeJS</h2>");
  } else if (req.method === "POST" && pathname === "/about") {
    res.setHeader("content-Type", "application/json");
    let jsonResponse = JSON.stringify("{message: this is a post request}");
    res.end(jsonResponse);
  } else {
    res.writeHead(404, { "content-Type": "text/plain" });
    res.end("page not found");
  }
}

server.listen(5001, () => {
  console.log("server listening on port 5001");
});
