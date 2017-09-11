const http = require("http");

const server = http.createServer((request, response) => {
  response.write(`${process.env.hostname} - this is a hostname`);
  response.write(JSON.stringify(process.env));
  response.end();
});

server.listen(4321);
