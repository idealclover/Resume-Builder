const fs = require("fs");
const template = require('art-template');
const data = require('../data.json');
const html = template(__dirname + '/../src/index.md', data);
console.log("Ready to write data...");
fs.writeFile('./dist/resume.md', html,  function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("Data has been written. >v<");
});
