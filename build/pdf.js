const fs = require("fs");
const template = require('art-template');
const data = require('../data.json');
const css = fs.readFileSync('./static/style.css').toString();
let html = template(__dirname + '/../src/index.html', data);

html = html + '<style>' + css + '</style>';
let pdf = require('html-pdf');
let options = {
    format: 'A4',
    border: {
        "top": "1.5cm",
        "bottom": "1.5cm",
        "right": "0.64cm",
        "left": "0.64cm"
    },
};

console.log("Ready to write data...");
pdf.create(html, options).toFile('./dist/resume.pdf', function(err, res) {
    if (err) return console.log(err);
    console.log("Data has been written. >v<");
});
