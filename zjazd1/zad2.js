const http = require("http");
const application = http.createServer((request, response) => {
  //zapisywanie info w nagłówkach, writeHead(nagłówki) przed writem(ciało odp)

  response.writeHead(201, { "Content-type": "application/xml" });
  response.write("Hello world");
  response.end();
});
application.listen(4700);

//nodemon restartuje serwer jak coś w nim zmienimy
