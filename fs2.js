import fs from 'node:fs';

// // create a directory
// // the first param - the value of the folder
// // the second param - a callback function
// fs.mkdir("tutorial", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("The folder is successfully created!");
//         // rm the directory
//         // the first param - the folder's name
//         // the second param - the callback function
//         // fs.rmdir("tutorial", (err) => {
//         //     if (err) {
//         //         console.log(err);
//         //     } else {
//         //         console.log("The folder is successfully deleted!");
//         //     }
//         // });
//         // create a file inside the folder
//         // the first param is a path
//         // the second param is a content of the file
//         // the third param is a callback function
//         fs.writeFile("./tutorial/example.txt", "123", (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log("Successfully created file");
//             }
//         });
//     }
// });

// // rm the file first
// fs.unlink("./tutorial/example.txt", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("The file is successfully deleted!");
//         // rm directory if it is empty
//         fs.rmdir("tutorial", (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log("The folder is successfully deleted!");
//             }
//         });
//     }
// });

// rm the folder if there is more than one file in it
// take back a list of file is the folder
// the first param is a name of the directory
// the second param is a callback function
fs.readdir("example", (err, files) => {
    if (err) {
        console.log(err);
    } else {
        console.log(files);
        for (let file of files) {
            fs.unlink(`./example/${file}`, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("The file is successfully deleted");
                }
            });
        }
    }
});
