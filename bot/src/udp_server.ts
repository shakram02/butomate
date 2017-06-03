import { Socket, createSocket } from 'dgram';

class DatagramServer {
    sock: Socket;
    private portNum: number;

    constructor(portNumber: number) {
        this.sock = createSocket('udp4', this.onMessage);
        this.portNum = portNumber;
    }

    onMessage(msg: Buffer, rinfo: Object): void {
        console.log(msg.toString('ascii'));
    }

    startListening(): void {
        this.sock.bind(this.portNum, undefined, () => {
            const address = this.sock.address();
            console.log(`server listening ${address.address}:${address.port}`);
        });
    }
}

let sock = new DatagramServer(6502);
sock.startListening();
