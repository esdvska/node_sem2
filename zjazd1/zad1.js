const http = require("http");
const application = http.createServer((request, response) => {
  response.end("Hello world");
});
application.listen(4700);
