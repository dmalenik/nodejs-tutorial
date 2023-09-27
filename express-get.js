import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("Hello Dimon!");
});

app.get("/example", (req, res) => {
    res.send("hitting example route!");
});

app.get("/example/:name/:age", (req, res) => {
    // get req params
    console.log(req.params);
    // tutorial=paramstutorial
    // sets query params
    console.log(req.query);
    // does not work with template literal
    res.send(req.params.name + ":" + req.params.age);
});

app.listen(3000);
