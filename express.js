// npm i express

const express = require("express");
const app = express();
app.get('', (req, res) => {
    res.send("Hello Bishnu Behera welcome to my larning page");
})

app.get('/about', (req, res) => {
    res.send("this is about us page");
});

app.get('/help', (req, res) => {
    res.send("this is help page");
});

app.listen(5000);