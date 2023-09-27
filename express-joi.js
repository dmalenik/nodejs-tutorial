import express from "express";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";
import bodyParser from "body-parser";
import Joi from "joi";

const __filename = fileURLToPath(import.meta.url); // returns a path to the current file
const __dirname = dirname(__filename); // returns a path to the directory of the current file
const arrayString = ["banana", "bacon", "cheese"];
const arrayObject = [
  { example: "example1" },
  { example: "example2" },
  { example: "example3" },
];
const userInput = {
  personalInfo: {
    streetAddress: "123456789",
    city: "Lusail",
    state: "Qatar",
  },
  preferences: arrayString,
};
const personalInfoSchema = Joi.object().keys({
  streetAddress: Joi.string().trim().required(),
  city: Joi.string().trim().required(),
  state: Joi.string().trim().length(2).required(),
});
const preferencesSchema = Joi.array().items(Joi.string());
const schema = Joi.object().keys({
  personalInfo: personalInfoSchema,
  preferences: preferencesSchema,
});

Joi.validate(userInput, schema, () => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
})

const app = express();

// middleware
// set aliases of static folder to be public
app.use(express.static(`${__dirname}/static`));
// use body parser
app.use(bodyParser.urlencoded({ extended: false }));
// work with JSON data
app.use(bodyParser.json());

// // get into files
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

app.get("/example", (req, res) => {
  res.send("hitting example route!");
});

// code a POST response
app.post("/", (req, res) => {
  console.log(req.body);
  // validate the email and password are valid data
  // create a schema // a set of rules data must follow
  const schema = Joi.object().key({
    email: Joi.string().trim().email().required(),
    password: Joi.string().min(5).max(10).required(),
  });
  Joi.validate(req.body, schema, (err, result) => {
    if (err) {
      console.log(err);
      res.send("an error occurred");
    }

    console.log(result);
    res.send("successfully posted data");
  });
});

app.listen(3000);
