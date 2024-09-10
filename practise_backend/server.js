const http = require("http");

http
  .createServer((req, res) => {
    res.write("Hello");
    res.end();
    console.log("Server is running on port 3000");
  })
  .listen(3000);
