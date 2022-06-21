const net = require('net');
const readline = require('readline');
const client = new net.Socket();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

client.on("data", function (data) {
    console.log(data.toString());
    client.end();
})


client.connect(5000, "127.0.0.1", function () {
    rl.question("Please enter a list of numbers:\n", (answer) => {
        client.write(answer);
        rl.close();
    })
})