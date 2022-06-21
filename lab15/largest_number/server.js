const net = require('net');
// const PORT = 5000;


const server = net.createServer(function (socket) {
    socket.on("data", function (data) {
        const request = data.toString();
        console.log(request);
        const arr = request.split(",");
        let max = arr[0];
        arr.forEach(item => {
            if (item > max) {
                max = item;
            }
        })
        socket.write(max);
    })
})

server.listen(5000, "127.0.0.1", () => {
    console.log(`Server is listening on 127.0.0.1:5000`);
});