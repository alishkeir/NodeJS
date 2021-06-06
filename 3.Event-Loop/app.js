const { pbkdf2 } = require("crypto");
const { createServer } = require("http");
const start = Date.now();

const hash = (x) => {
  pbkdf2("myPassword", "verySecretString", 10000, 1000, "sha256", () => {
    console.log("Hash", Date.now() - start, x);
  });
};

const lis = () => {
  createServer().listen(3000, () => {
    console.log("Listening on port 3000");
  });
};

hash(1);
hash(2);
hash(3);
hash(4);
hash(5);

lis();

console.log("Hello");
