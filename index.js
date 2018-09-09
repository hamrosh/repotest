const http = require("http");
const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("Hello <b>Abhi</b>");
  response.end();
});

server.listen(8000, () => {
  console.log("Server running on 8000...");
});
