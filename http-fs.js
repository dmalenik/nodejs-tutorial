import http from 'node:http';
import fs from 'node:fs';

http.createServer((req, res) => {
    // create a read stream for the file index.html in the static folder
    // let readStream = fs.createReadStream("./static/index.html");
    // create a header for the client
    // header is responsible for the kind of data to be send to the client
    // 200 - an HTTP status code
    // res.writeHead(200, {"Content-Type": "text/html"});
    // send a response back to the user
    // res object is also a writable stream
    let readStream = fs.createReadStream("./static/example.json");
    res.writeHead(200, {"Content-Type": "application/json"});
    readStream.pipe(res);
}).listen(3000);
