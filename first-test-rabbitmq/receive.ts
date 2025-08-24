import amqp, { type Channel, type ChannelModel } from 'amqplib';

const receive = async () => {
    console.log('receive function to consume msg is running!!');
    const connection: ChannelModel = await amqp.connect('amqp://localhost:5672');
    const channel: Channel = await connection.createChannel();
    const queue = 'test-custom-queue';
    await channel.assertQueue(queue, { durable: false });
    console.log(` [*] Esperando por mensagens na fila ${queue}. Pressione CTRL+C para sair.`); 

    channel.consume(queue, (msg) => {
        console.log(` [x] Recebido ${msg?.content.toString()}`);
    }, {noAck: true})
};

receive();