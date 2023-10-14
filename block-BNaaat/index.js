var http = require("http");
var fs = require("fs");
var url = require("url");

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  let parsedUrl = url.parse(req.url, true);
  let pathName = parsedUrl.pathname;
  if (req.method === "GET" && pathName === "/file") {
    fs.readFile("./node.html", (err, content) => {
      res.setHeader("content-Type", "text/html");
      res.end(content);
    });
  } else if (req.method === "GET" && pathName === "/stream") {
    fs.createReadStream("./node.html").pipe(res);
  } else {
    res.statusCode = 404;
    res.setHeader("content-Type", "text/plain");
    res.end("page not found");
  }
}

server.listen(5555, () => {
  console.log("server listening on the port 5555");
});
