var fs = require("fs");
// fs.readFile("./content.md", "utf8", (err, data) => {
//   console.log(err, data);
// });

var buff1 = Buffer.alloc(10);
console.log(buff1);

buff1.write("welcome to Buffer");
console.log(buff1.toString());
