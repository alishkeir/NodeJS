const path = require("path");

// const mod = require("./modules/index");

// console.log(__dirname);
// console.log(__filename);

// console.log(process.cwd());

const base = path.basename(__filename);
const ext = path.extname(__filename);
const parse = path.parse(__filename);

console.log(base);
console.log(ext);
console.log(parse);
console.log(__filename);
