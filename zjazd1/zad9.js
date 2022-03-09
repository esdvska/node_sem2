// Stwórzmy aplikację której zadaniem będzie operacja na tablicy zawierającej użytkowników

// stwórzmy ścieżkę /add do dodawania użytkownika, niech przyjmuje ona parametry name, username, email np ?name=Jan&username=janko&email=jan@nowak.abc, dodanie użytkownika powinno zadziałać tyko wtedy gdy zostało wysłane żądanie typu POST, jako rezultat należy zwrócić identyfikator dodanego użytkownika (sposób przydzielania identyfikatorów dowolny)
// dodajmy ścieżkę /show do wyświetlania wszystkich użytkowników (gdy żądanie będzie typu GET)
// rozbudujmy ścieżkę /show tak by wyświetlała jedynie wybranego użytkownika, jeżeli zostanie podany odpowiedni id (/show?id=1) oraz żądanie będzie typu GET, gdy nie ma użytkownika o danym id zwracamy odpowiedni kod statusu
// rozszerzmy aplikację o kasowanie użytkownika poprzez ścieżkę /delete?id=1, gdy nie ma użytkownika o danym id zwracamy odpowiedni kod statusu
const http = require("http");

const application = http.createServer((request, response) => {
  let urlObject = new URL(`http://${request.headers.host}${request.url}`);
  let users = [];
  if (request.url.includes("/add") && request.method === "POST") {
    const user = {
      id: Math.random(),
      name: urlObject.searchParams.get("name") || null,
      username: urlObject.searchParams.get("username") || null,
      email: urlObject.searchParams.get("email") || null,
    };
    users.push(user);
    response.writeHead(200, { "Content-type": "text/plain" });
    response.write(`You created new user! userID: ${user.id}`);
  }
  if (request.url === "/show" && request.method === "GET") {
    response.writeHead(200, { "Content-type": "text/plain" });
    response.write(`List of users: ${users}`);
  }
  response.end();
});
application.listen(4700);
