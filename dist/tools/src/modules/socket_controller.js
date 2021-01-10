"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketControllerData = "import ws from 'ws';\n" +
    "import { Request } from 'express';\n" +
    "import { ISocketUser, socketUsers } from '../models/socket_model';\n\n" +
    "interface IMessage {\n" +
    "    type?: number\n" +
    "    data?: any\n" +
    "}\n\n" +
    "class SocketController {\n\n" +
    "    public onConnect = async(socket:ws, req:Request):Promise<void> => {\n\n" +
    "        console.log('User connected');\n" +
    "        socket.on('message', (data) => this.onMessage(socket, data, req));\n\n" +
    "    };\n\n" +
    "    private onMessage = async(socket:ws, data:ws.Data, req:Request):Promise<void> => {\n" +
    "        const message:IMessage = JSON.parse(data.toString());\n" +
    "        switch (message.type) {\n" +
    "            case 0: this.saveUser(socket, message); break;\n" +
    "            default:\n" +
    "                socket.send(JSON.stringify({\n" +
    "                    type: -1,\n" +
    "                    message: 'Type not found'\n" +
    "                }));\n" +
    "            break;\n" +
    "        }\n" +
    "    };\n\n" +
    "    private saveUser = async(socket:ws, message:IMessage):Promise<void> => {\n\n" +
    "        const user:ISocketUser = {\n" +
    "            client: socket,\n" +
    "            userId: message.data.userId,\n" +
    "            userName: message.data.userName\n" +
    "        };\n\n" +
    "        socketUsers.addUser(user);\n" +
    "    }\n" +
    "}\n\n" +
    "export const socketController = new SocketController;\n\n" +
    "/*\n" +
    "    type:\n" +
    "        -1: Error\n" +
    "        0: new Connection || Save || OK\n" +
    "*/\n";
//# sourceMappingURL=socket_controller.js.map