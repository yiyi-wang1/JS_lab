const http = require('http');
const url = require('url');

const server = http.createServer(function (req, res) {

    // console.log(req);
    // console.log(req.url);
    let result = "";
    if (req.url !== "/favicon.ico") {

        const params = url.parse(req.url, true).query;
        const score = parseInt(params.score);
        // ?temp=100
        // { }
        // const myUrl = new URL(req.url, "http://localhost:4000");
        // // console.log(myUrl);
        // const fahrenheit = parseInt(myUrl.searchParams.get('temp'));
        if (score < 0 || score > 100) {
            result = "Invalid grade";
        } else if (score >= 86) {
            result = "A";
        } else if (score >= 73) {
            result = "B";
        } else if (score >= 67) {
            result = "C+";
        } else if (score >= 60) {
            result = "C";
        } else if (score >= 50) {
            result = "C-";
        } else {
            result = "F";
        }
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<!DOCTYPE html>
    <html>
      <head>
        <title>My first web server</title>
      </head>
      <body>
        <h1>Grade is : ${result}</h1>
      </body>
    </html>
  `);
    res.end();
})

server.listen(4000);
console.log("Server is running on port: 4000...");