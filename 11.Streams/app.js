// const { createReadStream, createWriteStream } = require("fs");

// const readStream = createReadStream("./test.txt");

// const writeStream = createWriteStream("./test2.txt");

// readStream.pipe(writeStream);

const { createServer, Server } = require("http");

const server = createServer();
server.listen(3000);

server.on("connection", (socket) => {
  console.log(socket);
});
