const http = require('http');
const fs = require("fs");
const url=require('url');

const hostname = '127.0.0.1';
const port = 3000;

var MIME_TYPE = {
    "css": "text/css",
    "gif": "image/gif",
    "html": "text/html",
    "ico": "image/x-icon",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "js": "text/javascript",
    "json": "application/json",
    "pdf": "application/pdf",
    "png": "image/png",
    "svg": "image/svg+xml",
    "swf": "application/x-shockwave-flash",
    "tiff": "image/tiff",
    "txt": "text/plain",
    "wav": "audio/x-wav",
    "wma": "audio/x-ms-wma",
    "wmv": "video/x-ms-wmv",
    "xml": "text/xml"
};

const server = http.createServer((req, res) => {

    console.log("New request arrived.");

    if(req.url==="/"){
        const template = require('art-template');
        const data = require('../data.json');
        const html = template(__dirname + '/../src/index.html', data);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(html);
        res.end();
    } else{
        const filePath = "./" + url.parse(req.url).pathname;
        fs.exists(filePath,function(err){
            if(!err){
                res.writeHead(404,{'Content-Type':'text/plain'})
                res.write('Error 404: Not Found.');
                res.end();
            }else{
                const ext = path.extname(filePath);
                ext = ext?ext.slice(1) : 'unknown';
                const contentType = MIME_TYPE[ext] || "text/plain";
                fs.readFile(filePath,function(err,data){
                    if(err){
                        res.writeHead(500,{'Content-Type':'text/plain'})
                        res.write('Error 500: Internal Server Error.');
                        res.end();
                    }else{
                        res.writeHead(200,{'content-type':contentType});
                        res.write(data.toString());
                        res.end();
                    }
                });//fs.readfile
            }
        })//path.exists
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
