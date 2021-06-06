const http = require("http");

const db = true;

if (!db) {
  process.exit(1);
}

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/user":
      res.end("User!");
      break;
    case "/admin":
      res.end("Admin!");
      break;

    default:
      res.end(
        `
    <html>
    <head>
    <title>First Node App</title>
    </head>
    <body>
    <h1>Home</h1>
    
    </body>
    
    
    </html>
    `
      );
  }
});

const port = 5050;

server.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});
