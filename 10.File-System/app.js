const { opendir, stat, open, readFile, writeFile } = require("fs");

const { promisify } = require("util");

// const oDir = promisify(opendir);
// const getStat = promisify(stat);
// const read = promisify(readFile);

// oDir("../9.Event-Emitter")
//   .then(async (dir) => {
//     for await (let dirent of dir) {
//       console.log(dirent.name);
//     }
//   })
//   .catch((err) => console.log(err));

// getStat("../9.Event-Emitter/app.js")
//   .then((stt) => {
//     console.log(stt);
//   })
//   .catch((err) => console.log(err));

// open("../9.Event-Emitter/app.js", (err, fd) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   read(fd, "utf8")
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => console.log(err));
// });

writeFile("./text.txt", "test file", (err) => console.log(err));
