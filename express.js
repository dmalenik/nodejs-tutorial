import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("Hello Dimon!");
});

app.get('/example', (req, res) => {
    res.send("hitting example route!");
});

app.listen(3000);
