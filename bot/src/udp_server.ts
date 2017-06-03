import { Socket, createSocket } from 'dgram';
import { networkInterfaces, NetworkInterfaceInfo } from 'os';
class DatagramServer {
    private sock: Socket;
    public portNum: number;
    public ip: string;

    constructor(portNumber: number, msg?: (x: Buffer, y: Object) => void | undefined) {
        let msgHandler = null;
        if (msg == undefined) {
            msgHandler = this.onMessage
        } else {
            msgHandler = msg;
        }
        this.sock = createSocket('udp4', msgHandler);
        this.portNum = portNumber;
        this.ip = this.getIpAddr();
    }

    onMessage(msg: Buffer, rinfo: Object): void {
        console.log(msg.toString('ascii'));
    }

    startListening(): void {
        this.sock.bind(this.portNum, this.ip, () => {
            const address = this.sock.address();
            console.log(`server listening ${address.address}:${address.port}`);
        });
    }

    private getIpAddr(): string {
        var addresses = [];
        var ifs = networkInterfaces();
        var result = Object.keys(ifs)
            .map(x => ifs[x].filter(x => x.family === 'IPv4' && !x.internal)[0])
            .filter(x => x)[0].address;
        return result;
    }
}

let sock = new DatagramServer(6502, (x, y) => {
    console.log("The message is:" + x.toString());
});
sock.startListening();
