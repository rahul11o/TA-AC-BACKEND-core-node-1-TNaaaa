var http = require("http");
var url = require("url");
var fs = require("fs");
var path = require("path");

//------*-----------*---------*-----------*-----------------*

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  var parsedUrl = url.parse(req.url, true);
  var pathName = parsedUrl.pathname;
  if (req.method === "GET" && pathName === "/") {
    res.setHeader("content-Type", "text/html");
    fs.createReadStream("../../index.html").pipe(res);
  } else if (req.method === "GET" && pathName === "/about") {
    res.setHeader("content-Type", "text/html");
    fs.createReadStream("../../about.html").pipe(res);
  } else if (req.url.split(".").pop() === "css") {
    res.setHeader("Content-Type", "text/css");
    fs.readFile("../../assets/stylesheets" + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  } else if (req.method === "GET" && req.url.split(".").pop() === "jpg") {
    res.setHeader("content-Type", "image/jpeg");
    fs.readFile("../../assets/images" + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  } else if (req.method === "GET" && req.url.split(".").pop() === "js") {
    res.setHeader("Content-Type", "image/javascript");
    fs.readFile("../../assets/js" + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  }
}

server.listen(1234, () => {
  console.log("server listening on port 1234");
});
