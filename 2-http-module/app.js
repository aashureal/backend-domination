const http = require("http");

const server = http.createServer(function (req, res) {
  // Basic Routing
  if (req.url === "/") {
    res.end("Home Page.");
  } else if (req.url === "/about") {
    res.end("About Page.");
  }else if (req.url === "/profile") {
    res.end("Profile Page.");
  }else{
    res.end("Page Not Found!!!...")
  }
});

server.listen(3000);
