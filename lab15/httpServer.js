const http = require('http');
const url = require('url');

const server = http.createServer(function (req, res) {

    // console.log(req);
    const params = url.parse(req.url, true).query;
    console.log(params);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<!DOCTYPE html>
    <html>
      <head>
        <title>My first web server</title>
      </head>
      <body>
        <h1>Hello World!</h1>
      </body>
    </html>
  `);
    res.end();
})


server.listen(4000);
console.log("Server is running on port: 4000...");