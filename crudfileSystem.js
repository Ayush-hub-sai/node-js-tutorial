const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud")
const filePath = `${dirPath}/crudtest.txt`

//create
// fs.writeFileSync(filePath, "this is simple crud test environment");
//  node process.js add data.txt "this is tested process for adding"


//read
// fs.readFile(filePath, 'utf8', (err, item) => {
//     console.log(item);
// })

// update
// fs.appendFile(filePath, "and file name is apple.txt", (err) => {
//     if (!err) console.log("file content is updated");
// })

// rename file
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//     if (!err) console.log("file name is updated");
// })

// rename file
// fs.unlinkSync(`${dirPath}/fruit.txt`, (err) => {
//     if (!err) console.log("file is deleted");
// })
// node process.js reme proces.txt
