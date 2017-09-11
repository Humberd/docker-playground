const http = require("http");

const server = http.createServer((request, response) => {
  response.write(`${process.env.hostname} - this is a hostname`);
  response.end();
});

server.listen(4321);
