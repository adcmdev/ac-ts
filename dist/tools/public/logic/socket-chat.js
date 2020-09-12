"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logicWsData = void 0;
exports.logicWsData = "const ws = new WebSocket('ws://localhost:3000/connection');\n\n" +
    "ws.onopen = (e) => {\n" +
    "    console.log('connected');\n" +
    "    // setTimeout(function(){\n" +
    "    //     ws.send(JSON.stringify({\n" +
    "    //         type: 0, \n" +
    "    //         data: {\n\n" +
    "    //         }\n" +
    "    //     }));\n" +
    "    // }, 1000);\n" +
    "};\n\n" +
    "ws.onmessage = e => {\n" +
    "    console.log('message');\n" +
    "    console.log(JSON.parse(e.data));\n" +
    "};\n";
//# sourceMappingURL=socket-chat.js.map