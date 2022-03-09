// Stwórzmy aplikację która pobiera 2 parametry a i b z adresu url i wykona mnożenie w naszej aplikacji. Rezultat działania powinniśmy wysłać do użytkownika końcowego(klienta).

// http://localhost:4700?a=5&b=2 //wywołanie
// 10 //rezultat

const http = require("http");

const application = http.createServer((request, response) => {
  let urlObject = new URL(`http://${request.headers.host}${request.url}`);

  const a = urlObject.searchParams.get("a") || null;
  const b = urlObject.searchParams.get("b") || null;

  response.writeHead(200, { "Content-type": "text/plain" });
  response.write(`Wynik ${Number(a) * Number(b)}`);

  response.end();
});
application.listen(4700);
