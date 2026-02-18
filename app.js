const http = require("http");

http.createServer((req,res)=>{
res.write("NodeJS Application - DEV Branch");
res.end();
}).listen(3000);

console.log("Running on port 3000");
