// Zmodyfikujmy naszą aplikację tak by dla żądań pod adresem http://localhost:4700/users zwracała komunikat Hello from Users path a dla żądań pod adresem http://localhost:4700/comments zwracała komunikat Hello from Comments path

const http = require("http");

const application = http.createServer((request, response) => {
  //zapisywanie info w nagłówkach, writeHead(nagłówki) przed writem(ciało odp) - uwazać na wielkość liter
  if (request.url === `/users`) {
    response.writeHead(201, { "Content-type": "application/xml" });
    response.write("Hello world from users");
  } else if (request.url === `/comments`) {
    response.writeHead(201, { "Content-type": "application/xml" });
    response.write("Hello world from comments");
  }
  response.end();
});
application.listen(4700);
