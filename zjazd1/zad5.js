// Dodajmy do aplikacji zwracanie parametru name podanego w url, np żądanie pod adres http://localhost:4700?name=pawel powinno zwrócić komunikat Hello pawel. Gdy nie podano wartości parametru aplikacja powinna zwrócić komunikat Hello World.

const http = require("http");

const application = http.createServer((request, response) => {
  let urlObject = new URL(`http://${request.headers.host}${request.url}`);

  const name = urlObject.searchParams.get("name") || "world";

  response.writeHead(200, { "Content-type": "text/plain" });
  response.write(`Hello ${name}`);

  response.end();
});
application.listen(4700);
