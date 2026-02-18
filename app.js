const http = require("http");

const server = http.createServer((req, res) => {

    res.write("NodeJS Application - DEV Branch");

    res.end();

});

server.listen(3000, "0.0.0.0", () => {

    console.log("Running on port 3000");

});
