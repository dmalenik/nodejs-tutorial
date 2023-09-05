// prompts the user and gets his input
import readline from 'node:readline';

// stdin stands for an input string
// stdout stands for an output string
let rl = readline.createInterface({input: process.stdin, output: process.stdout});
let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

// the first param - the inline question
// the second param - function with a user's input as a param
rl.question(`What is ${num1} + ${num2}?\n`, (ui) => {
    // if the answer is correct - close the prompting
    if (ui == answer) {
        rl.close();
    }
    // if the answer is not correct - send the feedback 
    else {
        rl.setPrompt("Incorrect response!\n");
        // reprompt the user
        rl.prompt();
        // set listener on user's response
        rl.on("line", (ui) => {
            // check its correctness again
            if (ui == answer) {
                rl.close();
            } else {
                rl.setPrompt(`Your answer of ${ui} is incorrect!\n`);
                // prompt the user again
                rl.prompt();
            }
        });
    }
});
// set listener on close event and handle it
rl.on("close", () => console.log("Correct!"));
