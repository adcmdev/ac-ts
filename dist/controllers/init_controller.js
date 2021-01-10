"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const tsconfig_1 = require("../tools/tsconfig");
const package_1 = require("../tools/package");
const index_1 = require("../tools/index");
const user_controller_1 = require("../tools/src/user_controller");
const user_routes_1 = require("../tools/src/user_routes");
const user_model_1 = require("../tools/src/user_model");
const app_1 = require("../tools/app");
const database_1 = require("../tools/database");
const child_process_1 = require("child_process");
const index_html_1 = require("../tools/public/index-html");
const socket_chat_1 = require("../tools/public/logic/socket-chat");
const socket_routes_1 = require("../tools/src/modules/socket_routes");
const socket_model_1 = require("../tools/src/modules/socket_model");
const socket_controller_1 = require("../tools/src/modules/socket_controller");
// const path: string = `data/`;
const path = ``;
class InitController {
    constructor() {
        this.init = (name, ws) => __awaiter(this, void 0, void 0, function* () {
            console.log(`Initializing ${name}`);
            this.createFile(`./${path}.env`, 'TOKEN_KEY=\'Your_token_key_here\'\nMONGO_URI=\'mongodb://localhost/test\'\n');
            this.createFile(`./${path}tsconfig.json`, JSON.stringify(tsconfig_1.tsconfig, null, 4));
            this.createFile(`./${path}.gitignore`, 'node_modules/');
            this.createFile(`./${path}package.json`, JSON.stringify(package_1.packageConfig(name, ws), null, 4));
            fs_1.default.mkdir(`./${path}src/`, { recursive: true }, (err) => {
                if (err)
                    throw err;
                this.createFile(`./${path}src/index.ts`, index_1.indexData(ws));
                this.createFile(`./${path}src/app.ts`, app_1.appData(ws));
            });
            fs_1.default.mkdir(`./${path}src/database/`, { recursive: true }, (err) => {
                if (err)
                    throw err;
                this.createFile(`./${path}src/database.ts`, database_1.databaseData);
            });
            fs_1.default.mkdir(`./${path}src/middlewares/`, { recursive: true }, (err) => {
                if (err)
                    throw err;
                this.createFile(`./${path}src/auth.ts`, database_1.databaseData);
            });
            fs_1.default.mkdir(`./${path}src/modules/user/`, { recursive: true }, (err) => {
                if (err)
                    throw err;
                this.createFile(`./${path}src/modules/user/user_controller.ts`, user_controller_1.userControllerData);
                this.createFile(`./${path}src/modules/user/user_routes.ts`, user_routes_1.userRoutesData);
                this.createFile(`./${path}src/modules/user/user_model.ts`, user_model_1.userModelData);
            });
            if (ws) {
                fs_1.default.mkdir(`./${path}src/modules/socket/`, { recursive: true }, (err) => {
                    if (err)
                        throw err;
                    this.createFile(`./${path}src/modules/socket/socket_controller.ts`, socket_controller_1.socketControllerData);
                    this.createFile(`./${path}src/modules/socket/socket_routes.ts`, socket_routes_1.socketRoutesData);
                    this.createFile(`./${path}src/modules/socket/socket_model.ts`, socket_model_1.socketModelData);
                });
                fs_1.default.mkdir(`./${path}public/`, { recursive: true }, (err) => {
                    if (err)
                        throw err;
                    this.createFile(`./${path}public/index.html`, index_html_1.htmlViewData);
                });
                fs_1.default.mkdir(`./${path}public/logic/`, { recursive: true }, (err) => {
                    if (err)
                        throw err;
                    this.createFile(`./${path}public/logic/socket.js`, socket_chat_1.logicWsData);
                });
            }
            console.log('Downloading packages...');
            child_process_1.exec('npm i', (error, stdout, stderr) => {
                if (error)
                    console.log(error);
                console.log(stdout);
                console.log(stderr);
                console.log(`${name} Inicializated`);
                // console.log('Compiling typescript...');
                // exec('tsc', (error) => {
                //     if(error) console.log(error);
                //     console.log(`${name} Inicializated`);
                // });
            });
        });
        this.createFile = (path, data) => {
            fs_1.default.writeFile(path, data, (err) => {
                if (err)
                    throw err;
            });
        };
    }
}
exports.initController = new InitController;
//# sourceMappingURL=init_controller.js.map