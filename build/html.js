const fs = require("fs");
const template = require('art-template');
const data = require('../data.json');
const html = template(__dirname + '/../src/index.html', data);
console.log("Ready to write data...");
fs.writeFile('./dist/resume.html', html,  function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("Data has been written. >v<");
});

var pdf = require('html-pdf');
var options = {
    format: 'A4',
    border: {
        "top": "1.5cm",
        "bottom": "1.5cm",
        "right": "0.64cm",
        "left": "0.64cm"
    },
};

pdf.create(html, options).toFile('./dist/resume.pdf', function(err, res) {
    if (err) return console.log(err);
    //console.log(res); // { filename: '/app/businesscard.pdf' }
});
