const http = require('http');
const url = require('url');

const server = http.createServer(function (req, res) {

    // console.log(req);
    // console.log(req.url);
    let result = "";
    if (req.url !== "/favicon.ico") {

        const params = url.parse(req.url, true).query;
        const fahrenheit = parseInt(params.temp);
        // ?temp=100
        // { }
        // const myUrl = new URL(req.url, "http://localhost:4000");
        // // console.log(myUrl);
        // const fahrenheit = parseInt(myUrl.searchParams.get('temp'));
        console.log(fahrenheit);
        const celsius = (fahrenheit - 32) * 0.5556;
        result = celsius;

    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<!DOCTYPE html>
    <html>
      <head>
        <title>My first web server</title>
      </head>
      <body>
        <h1>Temp is : ${result}</h1>
      </body>
    </html>
  `);
    res.end();
})

server.listen(4000);
console.log("Server is running on port: 4000...");