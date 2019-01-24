const fs = require("fs");
const template = require('art-template');
const data = require('../data.json');
const html = template(__dirname + '/../index.html', data);
console.log("Ready to write data...");
fs.writeFile('../dist/resume.html', html,  function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("Data has been written. >v<");
});
