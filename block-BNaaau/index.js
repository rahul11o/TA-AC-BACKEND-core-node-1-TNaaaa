var http = require("http");
var url = require("url");
var fs = require("fs");

//------*-----------*---------*-----------*-----------------*

// var server = http.createServer(handleRequest);

// function handleRequest(req, res) {
//   console.log(req, res);
//   res.end();
// }

// server.listen(5001, () => {
//   console.log("server listening on port 5001");
// });

//------*-----------*---------*-----------*-----------------*

// var server2 = http.createServer(handleRequest2);

// function handleRequest2(req, res) {
//   res.setHeader("content-Type", "text/plain");
//   res.end("My first server in NodeJS");
// }

// server2.listen(5100, () => {
//   console.log("server listening on port 5100");
// });

//------*-----------*---------*-----------*-----------------*

// var server3 = http.createServer(handleRequest3);

// function handleRequest3(req, res) {
//   var header = req.headers;
//   console.log(header["user-agent"]);
//   res.end();
// }

// server3.listen(5555, () => {
//   console.log("server is listening on port 5555");
// });

//------*-----------*---------*-----------*-----------------*

// let server4 = http.createServer(handleRequest4);

// function handleRequest4(req, res) {
//   console.log(req.method, req.url);
//   res.setHeader("Content-Type", "text/plain");
//   res.write(req.method);
//   res.write(req.url);
//   res.end();
// }

// server4.listen(5566, () => {
//   console.log("Server listening on port 5566");
// });

//------*-----------*---------*-----------*-----------------*

// var server5 = http.createServer(handleRequest5);

// function handleRequest5(req, res) {
//   res.setHeader("content-Type", "text/plain");
//   res.end(JSON.stringify(req.headers));
// }
// server5.listen(7001, () => {
//   console.log("server listening on port 7001");
// });

//------*-----------*---------*-----------*-----------------*

// var server6 = http.createServer(handleRequest6);

// function handleRequest6(req, res) {
//   res.statusCode = 202;
//   res.end();
// }

// server6.listen(3333, () => {
//   console.log("server is listening on port 3333");
// });

//------*-----------*---------*-----------*-----------------*

// var server7 = http.createServer(handleRequest7);

// function handleRequest7(req, res) {
//   res.setHeader("content-Type", "text/html");
//   res.end("<h3>Welcome to altcampus</h3>");
// }
// OR

// function handleRequest7(req, res) {
//   res.writeHead(200, { "content-Type": "text/html" });
//   res.end("<h3>Welcome to altcampus</h3>");
// }

// server7.listen(8000, () => {
//   console.log("Server listening on port 8000");
// });

//------*-----------*---------*-----------*-----------------*

// var server8 = http.createServer(handleRequest8);
// function handleRequest8(req, res) {
//   res.setHeader("content-Type", "application/json");
//   res.end(JSON.stringify({ success: true, message: "Welcome to Nodejs" }));
// }

// server8.listen(8888, () => {
//   console.log("server is litening on port 8888");
// });

//------*-----------*---------*-----------*-----------------*

// var server9 = http.createServer(handleRequest9);

// function handleRequest9(req, res) {
//   console.log(req.method);
//   var parsedUrl = url.parse(req.url, true);
//   var pathName = parsedUrl.pathname;
//   if (req.method === "POST" && pathName === "/") {
//     res.setHeader("content-Type", "text/html");
//     res.end(`<h2>posted for first time</h2>`);
//   } else {
//     res.statusCode = 404;
//     res.setHeader("content-Type", "text/plain");
//     res.end("page not found");
//   }
// }

// server9.listen(5050, () => {
//   console.log("server is listening on port 5050");
// });

//------*-----------*---------*-----------*-----------------*

// var server10 = http.createServer(handleRequest10);

// function handleRequest10(req, res) {
//   var parsedUrl = url.parse(req.url, true);
//   let pathName = parsedUrl.pathname;
//   if (req.method === "GET" && pathName === "/") {
//     res.setHeader("content-Type", "text/plain");
//     res.end("rahul");
//   } else if (req.method === "GET" && pathName === "/about") {
//     res.setHeader("content-Type", "text/html");
//     res.end("<h2>rahul</h2>");
//   } else {
//     res.statusCode = 404;
//     res.setHeader("content-Type", "text/plain");
//     res.end("page not found");
//   }
// }

// server10.listen(2345, () => {
//   console.log("server listening on port 2345");
// });

//------*-----------*---------*-----------*-----------------*

// var server11 = http.createServer(handleRequest11);

// function handleRequest11(req, res) {
//   var parsedUrl = url.parse(req.url, true);
//   var pathName = parsedUrl.pathname;
//   if (req.method === "GET" && pathName === "/users") {
//     res.setHeader("content-Type", "text/html");
//     fs.createReadStream("./index.html").pipe(res);
//   } else if (req.method === "POST" && pathName === "/users") {
//     res.setHeader("content-Type", "text/palin");
//     res.end("Posted for the second time");
//   } else {
//     res.statusCode = 404;
//     res.setHeader("content-Type", "text/plain");
//     res.end("page not found");
//   }
// }

// server11.listen(4444, () => {
//   console.log("server listening on port 4444");
// });

//------*-----------*---------*-----------*-----------------*

var server12 = http.createServer(handleRequest12);

function handleRequest12(req, res) {
  var parsedUrl = url.parse(req.url, true);
  var pathName = parsedUrl.pathname;
  //   console.log(pathName);
  //   console.log(req.url);
  //  req.url is the complete url whereas parsedUrl.pathname or pathName is just the same but without query string
  var email = parsedUrl.query.email;
  res.setHeader("content-Type", "application/jason");
  res.write(JSON.stringify(parsedUrl.query));
  res.end();
}

server12.listen(2222, () => {
  console.log("server listening on port 2222");
});
