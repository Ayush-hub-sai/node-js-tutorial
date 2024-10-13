const express = require("express");
const app = express();
// app.get('', (req, res) => {
//     res.send(`Hello ${req.query.name} welcome to my larning page`);
// });
// // http://localhost:5000/?name=kalyani  //qurery param

// app.get('/about', (req, res) => {
//     res.send("this is about us page");
// });

// app.get('/help', (req, res) => {
//     res.send("this is help page");
// });




/**
 * send input or html data
 *  */
app.get('', (req, res) => {
    res.send(`Hello ${req.query.name} welcome to my larning page`);
});
// http://localhost:5000/?name=kalyani  //qurery param

app.get('/about', (req, res) => {
    res.send(`<input type='text' placeholder='enter your name'>
        <button>click me</button>
        <a href='/help'>go to help page</a>
        `);
});

// send json data
app.get('/help', (req, res) => {
    res.send([{
        name: 'bishnu',
        age: 25
    },
    {
        name: 'bishnu',
        age: 25
    }]);
});
app.listen(5000);