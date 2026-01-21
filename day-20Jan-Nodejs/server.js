import http from "http";
import fs from "fs/promises";
import path from "path";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  } else if (req.url === "/read-file") {
    const filePath = path.join(process.cwd(), "message.txt");

    fs.readFile(filePath, "utf8")
      .then((data) => {
        console.log("File content:", data);
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(data);
      })
      .catch((err) => {
        console.error(err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error reading file");
      });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
