const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const amqp = require('amqplib');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const RABBITMQ_URL = 'amqp://localhost';
const QUEUE_NAME = 'chat_queue';

app.use(express.static('public'));

io.on('connection', (socket)=>{
    console.log('A user connected');

    socket.on('chat message', async (msg) =>{
        const connection = await amqp.connect(RABBITMQ_URL);
        const channel = await connection.createChannel();
        await channel.assertQueue(QUEUE_NAME, {durable: true});
        channel.sendToQueue(QUEUE_NAME, Buffer.from(msg), {persistent: true});

        console.log('Meesage sent to RabbitMQ:', msg);
        await channel.close();
        await connection.close();
    });
});

async function receiveMessages() {
    const connection = await amqp.connect(RABBITMQ_URL);
    const channel = await connection.createChannel();
    await channel.assertQueue(QUEUE_NAME, {durable: true});

    channel.consume(QUEUE_NAME, (msg) => {
        const message = msg.content.toString();
        console.log('Message received from RabbitMQ:', message);
        io.emit('chat message', message);
        channel.ack(msg);
    });
}

receiveMessages().catch(console.error);

const PORT = 3000;
server.listen(PORT, () =>{
    console.log('Server running on port ${PORT}')
});