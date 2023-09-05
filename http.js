import http from 'node:http';

// a function accepts request and response objects
// request is what the client is asking us
// the server takes a request and sends a response back
let server = http.createServer((req, res) => {
    // the port listens to the request from the specific url
    if (req.url === '/') {
        // send a respond to the client
        res.write("Hello world from Node.js");
        // send the respond
        res.end();
    } else {
        res.write("Using some other domain");
        res.end();
    }
});

// set the port to listen the requests to
server.listen(3000);
