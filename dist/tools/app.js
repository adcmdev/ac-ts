"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appData = void 0;
exports.appData = (ws) => {
    const http = (ws) ? "import http from 'http';\n" : "";
    const path = (ws) ? "import path from 'path';\n\n" : "\n";
    const server = (ws) ? "export let server:http.Server = http.createServer(app);\n\n" : "";
    const publicPath = (ws) ? "const publicPath:string = path.resolve(__dirname, '../public');\n\n" : "";
    const middelware = (ws) ? "app.use('/', express.static(publicPath));\n\n" : "";
    let data = "import express, {Application} from 'express';\n" +
        "import userRoutes from './routes/user_routes';\n" +
        http +
        path +
        "const app:Application = express();\n\n" +
        server +
        publicPath +
        middelware +
        "app.set('port', 3000);\n\n" +
        "// Middelwares\n" +
        "app.use(express.json());\n\n" +
        "app.use(express.urlencoded({extended: false}));\n\n" +
        "// Routes\n" +
        "app.use('/users', userRoutes);\n\n" +
        "export default app;";
    return data;
};
//# sourceMappingURL=app.js.map