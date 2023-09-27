import express from "express";

const route = express.Router();

route.use((req, res, next) => {
  console.log("middleware being used");
  next();
});
route.get("/", (req, res) => {
  res.send("/ being hit");
});
route.get("/example", (req, res) => {
  res.send("/ being hit");
});

export { route };
