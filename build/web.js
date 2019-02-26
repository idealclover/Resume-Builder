const express = require('express');
const path=require('path');
const app = express();
const port = 3000;

app.use('/', express.static(path.join(__dirname, '../public')));

// app.get('/html', function (req, res) {
//     const template = require('art-template');
//     const data = require('../data.json');
//     const html = template(__dirname + '/../src/index.html', data);
//     res.writeHead(200, {
//         'Content-Type': 'text/markdown',
//         'Content-disposition': 'attachment;filename=resume.html',
//         'Content-Length': html.length
//     });
//     res.end(new Buffer.from(html, 'utf-8'));
// });

let bodyParser = require('body-parser');

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));
app.post('/html', function (req, res) {
    const data = req.body;
    const fs = require("fs");
    const template = require('art-template');
    const css = fs.readFileSync('./static/style.css').toString();
    let html = template(__dirname + '/../src/index.html', data);
    html = html + '<style>' + css + '</style>';
    res.send(html);
    // res.writeHead(200, {
    //     'Content-Type': 'text/markdown',
    //     'Content-disposition': 'attachment;filename=resume.html',
    //     'Content-Length': html.length
    // });
    // res.end(new Buffer.from(html, 'utf8'));
});

app.post('/markdown', function (req, res) {
    const data = req.body;
    const template = require('art-template');
    const markdown = template(__dirname + '/../src/index.md', data);
    res.send(markdown);
});

app.post('/pdf', function (req, res) {
    const data = req.body;
    const fs = require("fs");
    const template = require('art-template');
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
    pdf.create(html, options).toBuffer(function(err, buffer) {
        res.send(buffer);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
