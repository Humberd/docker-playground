const http = require("http");

const server = http.createServer((request, response) => {
  response.write("Hello from server!!!");
  response.end();
});

server.listen(4321);