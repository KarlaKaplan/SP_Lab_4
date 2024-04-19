const fs = require("fs");
fs.writeFileSync(
    "file.txt",
    fs.readFileSync("file.txt", 'utf8').split('').reverse().join(''),
    'utf8'
);