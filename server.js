const http = require("http");
http.createServer((req, resp) => {
    // resp.write("This is node js server tutorial");
    resp.write("<h1>This is node js server tutorial</h1>");
    resp.end();
}).listen(4500);