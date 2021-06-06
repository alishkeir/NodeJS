const { EventEmitter } = require("events");
const http = require("http");
const myEmitter = new EventEmitter();

//listener
myEmitter.on("greeting", (name) => {
  console.log(`Hello ${name} !!`);
});

//listener 2
myEmitter.on("greeting", () => {
  console.log(`Hello Again !!`);
});

// emitter
myEmitter.emit("greeting", "Ali");

const server = http.createServer();

server.listen(3000);

server.on("listening", () => {
  //To be processed last one
  setImmediate(() => {
    console.log("Server is listening now");
  });
});

server.on("listening", () => {
  console.log("Server is listening 'Again' !!");
});
