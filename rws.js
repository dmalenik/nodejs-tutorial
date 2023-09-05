import fs from 'node:fs';
// is used to compress files
import zlib from 'node:zlib';
// return a transform stream
let gunzip = zlib.createGunzip();
// create readable stream
// read stream object inherits from the event emitter class
let readStream = fs.createReadStream("./example/example2.txt.gz");
// the first param is a name of the file to write data to
let writeStream = fs.createWriteStream("./example/uncompressed.txt");
// everytime we read a piece of data the function gets invoked
// the first param - a path to the file
// the second param is an decoded format
// the third param is a callback function
// readStream.on("data", (chunk) => {
//     // allows to manipulate the data immediately
//     // send the data to a new file
//     console.log(chunk); // <Buffer 54 68 69 73 20 69 73 20 61 6e 20 65 78 61 6d 70 6c 65 0d 0a 41 20 62 75 6e 63 68 20 6f 66 20 74 65 78 74 20 74 6f 20 72 65 61 64 20 66 6f 72 20 72 65 ... 13 more bytes>
//     // paste the data from example.txt to example2.txt
//     writeStream.write(chunk);
// });

// pipes and pipe chaining
// is simplier than readStream.on
// what we have got from the read stream we paste it into the write stream
// a shorthand version
// readStream is a source stream
// writeStream is a destination stream
// readStream.pipe(writeStream);
// takes a chunks of data, manipulates it, and compress it
readStream.pipe(gunzip).pipe(writeStream);
