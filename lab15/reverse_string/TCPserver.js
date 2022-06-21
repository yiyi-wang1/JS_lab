const net = require('net');
// const PORT = 5000;


const server = net.createServer(function (socket) {
    socket.on("data", function (data) {
        const request = data.toString();
        console.log(request);
        let response = "";
        for (let i = request.length - 1; i >= 0; i--) {
            response += request.charAt(i);
        }
        socket.write(response);
    })
})

server.listen(5000, "127.0.0.1", () => {
    console.log(`Server is listening on 127.0.0.1:5000`);
});

