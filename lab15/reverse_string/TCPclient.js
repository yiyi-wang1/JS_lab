const net = require('net');
const readline = require('readline');
const client = new net.Socket();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

client.on("data", function (data) {
    console.log(data.toString());
})


client.connect(5000, "127.0.0.1", function () {
    rl.question("What is your name?\n", (answer) => {
        client.write(answer);
        rl.close();
    })
})
