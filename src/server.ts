const http = require("http");

const server = http.createServer((request, response) => {
  response.setHeader("content-type", "text/html");
  response.write(`${process.env.hostname} - this is a hostname`);
  response.write(`<pre>${JSON.stringify(process.env)}</pre>`);
  response.end();
});

server.listen(4321);
