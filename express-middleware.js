import express from "express";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";
import bodyParser from "body-parser";

const __filename = fileURLToPath(import.meta.url); // returns a path to the current file
const __dirname = dirname(__filename); // returns a path to the directory of the current file

const app = express();

// middleware
// middleware is executed on /example only
app.use(bodyParser.json()); // parses a user request and attaches it to the request.body
app.use("/example", (req, res, next) => {
  // next is invoked while creating a customed middleware
  console.log(req.url, req.method);
  // modify the request object
  req.banana = "banana";
  next();
});

app.get("/", (req, res) => {
  console.log(req.banana);
  res.send("Middleware!");
});

app.listen(3000);
