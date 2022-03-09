// Napiszmy aplikacja która zwróci wszystkie parametry podane w url. Zwracany rezultat powinien być obiektem i mieć 'Content-type':'application/json'
// http://localhost:4700?a=5&b=2 //wywołanie
// {'a':'1','b':'2'} //rezultat
// http://localhost:4700?name=jan&lastname=kowalski //wywołanie
// {'name':'jan','lastname':'kowalski'} //rezultat
const http = require("http");
const url = require("url");
const querystring = require("querystring");

const application = http.createServer((request, response) => {
  // let urlObject = new URL(`http://${request.headers.host}${request.url}`);

  response.writeHead(200, { "Content-type": "application/json" });
  response.write(`${JSON.stringify(url.parse(request.url, true).query)}`);
  response.end();
});

application.listen(4700);
