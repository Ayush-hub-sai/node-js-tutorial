const express = require("express");
const app = express();
app.get('', (req, res) => {
    res.send(`Hello ${req.query.name} welcome to my larning page`);
});
// http://localhost:5000/?name=kalyani  //qurery param

app.get('/about', (req, res) => {
    res.send("this is about us page");
});

app.get('/help', (req, res) => {
    res.send("this is help page");
});

app.listen(5000);