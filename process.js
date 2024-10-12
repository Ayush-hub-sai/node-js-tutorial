const fs = require('fs')
const input = process.argv;
// fs.writeFileSync(input[2], input[3]);
// // node process.js process.txt "process text testing with argv"


if (input[2] == 'add') {
    fs.writeFileSync(input[3], input[4]);
    // node process.js add data.txt "this is tested process for adding"
} else if (input[2] == 'remove') {
    fs.unlinkSync(input[3])
    // node process.js remove data.txt
} else {
    console.log("Invalid Input");

}