import express from "express";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { route } from "./routes/people.js";

const __filename = fileURLToPath(import.meta.url); // returns a path to the current file
const __dirname = dirname(__filename); // returns a path to the directory of the current file

const app = express();

// middleware
// set aliases of static folder to be public
app.use(express.static(`${__dirname}/static`));

// set ejs
// create views folder
app.set("view engine", "ejs");

app.use("/people", route);

// get into files
// the server will look inside ejs file, render it, and return HTML file to the client
app.get("/:userQuery", (req, res) => {
  // render data
  res.render("index", {
    data: {
      userQuery: req.params.userQuery,
      searchResults: ["book1", "book2", "book3"],
      loggedIn: true,
      username: "Dmitriy",
    },
  });
});

app.get("/example", (req, res) => {
  res.send("hitting example route!");
});

app.listen(3000);
