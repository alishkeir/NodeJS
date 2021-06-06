const { pbkdf2 } = require("crypto");
const start = Date.now();

pbkdf2("password", "mySecretCode", 10000, 1000, "sha256", () => {
  console.log("done", Date.now() - start);
});

console.log("I would Be Called First", Date.now() - start);
