// allows to do CRUD on files
import fs from 'node:fs';

// create file
// the first param is a file's title
// the second param is a file's content
// the third param is an error callback
fs.writeFile("example.txt", "This is an example", (err) => {
    if (err) {
        console.log("Error!");
    } else {
        console.log("File successfully created!");
        // read the file
        // the first param - the file's name
        // the second param - the encoding type
        // the third param - an err callback function
        fs.readFile("example.txt", "utf8", (err, file) => {
            if (err) {
                console.log(err);
            } else {
                console.log(file); // <Buffer 54 68 69 73 20 69 73 20 61 6e 20 65 78 61 6d 70 6c 65> // stores a buffer data and a binary
            }
        });
    }
});

// rename the file
// the first param - the actual file's name
// the second param - the new file's name
// the third param - the callback function
fs.rename("example.txt", "example2.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("The file is successfully renamed!");
    }
});

// append data to the file
// the first param - the current file's name
// the second param - the data to append to the file
// the third param - a callback function
fs.appendFile("example2.txt", "Some data being appended", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully appended data");
    }
});

// rm the file
// the first param is a file's name to rm
// the second param is a callback function
fs.unlink("example2.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully deleted the file");
    }
})
