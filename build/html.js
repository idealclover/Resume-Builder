const fs = require("fs");
const template = require('art-template');
const data = require('../data.json');
const css = fs.readFileSync('./src/style.css').toString();
let html = template(__dirname + '/../src/index.html', data);
html = html + '<style>' + css + '</style>';

console.log("Ready to write data...");
fs.writeFile('./dist/resume.html', html,  function(err) {
    if (err) return console.log(err);
    console.log("Data has been written. >v<");
});
