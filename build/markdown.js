const fs = require("fs");
const template = require('art-template');
const data = require('../src/data.json');
const html = template(__dirname + '/../src/index.md', data);
console.log("Ready to write data...");
fs.writeFile('./dist/resume.md', html,  function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("Data has been written. >v<");
});

var pdf = require('html-pdf');
var options = {
    format: 'A4'
};

pdf.create(html, options).toFile('../dist/resume.pdf', function(err, res) {
    if (err) return console.log(err);
    //console.log(res); // { filename: '/app/businesscard.pdf' }
});
