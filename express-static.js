import express from "express";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url); // returns a path to the current file
const __dirname = dirname(__filename); // returns a path to the directory of the current file

const app = express();

// middleware
// set aliases of static folder to be public
app.use(express.static(`${__dirname}/static`));

// // get into files
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

app.get("/example", (req, res) => {
  res.send("hitting example route!");
});

app.listen(3000);
