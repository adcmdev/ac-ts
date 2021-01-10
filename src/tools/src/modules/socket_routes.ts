export const socketRoutesData: string = 

"import ws from 'ws'\n" +
"import { server } from '../../app';\n" +
"import { Request } from 'express';\n" +
"import url from 'url';\n" +
"import { socketController } from './socket_controller';\n\n" +

"const wsServer = new ws.Server({ noServer: true });\n\n" +

"wsServer.on('connection', socketController.onConnect);\n\n" +

"server.on('upgrade', (request:Request, socket, head) => {\n\n" +

"    const pathname:string = url.parse(request.url).pathname + '';\n\n" +

"    if(pathname === '/connection') {\n\n" +
        
"        wsServer.handleUpgrade(request, socket, head, socket => {\n" +
"            wsServer.emit('connection', socket, request);\n" +
"        });\n" +
"    }\n" +
"});\n";
