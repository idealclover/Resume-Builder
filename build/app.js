const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log("New request arrived.");
    const template = require('art-template');
    const data = require('./data.json');
    const html = template(__dirname + '/index.html', data);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(html);
    res.end();
    // res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
