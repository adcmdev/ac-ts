"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexData = (ws) => {
    let socketRoutes = (ws) ? "    require('./routes/socket_routes');\n" : "";
    let appImporter = (ws) ? "import app, {server} from './app';\n" : "import app from './app';\n";
    let server = (ws) ? "    server.listen(app.get('port'));\n" : "    app.listen(app.get('port'));\n";
    let data = "import dotenv from 'dotenv';\n" +
        "dotenv.config();\n\n" +
        appImporter +
        "import './database';\n\n" +
        "const main = ():void => {\n" +
        server +
        socketRoutes +
        "    console.log(`Server on port ${app.get('port')}`);\n" +
        "}\n\n" +
        "main();\n";
    return data;
};
//# sourceMappingURL=index.js.map