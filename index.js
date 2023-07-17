// const a = {
//   average: (a, b) => {
//     console.log((a + b) / 2);
//   },

//   sum: (a, b, c) => {
//     console.log(a + b + c);
//   },
// };


// // export module
// module.exports = a;

// const { response } = require("express")
// const http = require("node:http")

const http = require("node:http");

const server = http.createServer((request, response) => {
  const body = 'hii shailja gupta';
  response.writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/plain'
  });
  response.end(body);
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

