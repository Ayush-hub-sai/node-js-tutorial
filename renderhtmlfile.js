const express = require("express");
const path = require('path');

const app = express();
const folderPath = path.join(__dirname, "htmlFile");

app.use(express.static(folderPath));
app.listen(5000);


