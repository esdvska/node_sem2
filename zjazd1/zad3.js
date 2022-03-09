const http = require("http");
const application = http.createServer((request, response) => {
  //zapisywanie info w nagłówkach, writeHead(nagłówki) przed writem(ciało odp)
  if (request.method === "GET") {
    response.writeHead(201, { "Content-type": "application/xml" });
    response.write("Hello world FROM GET");
  } else if (request.method === "POST") {
    response.writeHead(201, { "Content-type": "application/xml" });
    response.write("Hello world FROM POST");
  } else if (request.method === "HEAD") {
    response.writeHead(200, { "Content-type": "application/xml" });
    response.write("Hello world FROM HEAD");
  }
  response.end();
});
application.listen(4700);

//nodemon restartuje serwer jak coś w nim zmienimy
