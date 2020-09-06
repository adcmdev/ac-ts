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
exports.initController = void 0;
const fs_1 = __importDefault(require("fs"));
const tsconfig_1 = require("../tools/tsconfig");
const package_1 = require("../tools/package");
const index_1 = require("../tools/index");
const user_controller_1 = require("../tools/user_controller");
const user_routes_1 = require("../tools/user_routes");
const user_model_1 = require("../tools/user_model");
const app_1 = require("../tools/app");
const database_1 = require("../tools/database");
class InitController {
    constructor() {
        this.init = (name) => __awaiter(this, void 0, void 0, function* () {
            console.log(`Initializing ${name}`);
            this.createFile('./data/tsconfig.json', JSON.stringify(tsconfig_1.tsconfig, null, 4));
            package_1.packageConfig.name = name;
            this.createFile('./data/package.json', JSON.stringify(package_1.packageConfig, null, 4));
            fs_1.default.mkdir('./data/src/', { recursive: true }, (err) => {
                if (err)
                    throw err;
                this.createFile('./data/src/index.ts', index_1.indexData);
                this.createFile('./data/src/app.ts', app_1.appData);
                this.createFile('./data/src/database.ts', database_1.databaseData);
            });
            fs_1.default.mkdir('./data/src/controllers/', { recursive: true }, (err) => {
                if (err)
                    throw err;
                this.createFile('./data/src/controllers/user_controller.ts', user_controller_1.indexControllerData);
            });
            fs_1.default.mkdir('./data/src/routes/', { recursive: true }, (err) => {
                if (err)
                    throw err;
                this.createFile('./data/src/routes/user_routes.ts', user_routes_1.indexRoutesData);
            });
            fs_1.default.mkdir('./data/src/models/', { recursive: true }, (err) => {
                if (err)
                    throw err;
                this.createFile('./data/src/models/user_model.ts', user_model_1.userModelData);
            });
            console.log(`${name} Inicializated`);
        });
        this.createFile = (path, data) => {
            fs_1.default.writeFile(path, data, (err) => {
                if (err)
                    throw new Error('Can\'t create tsconfig file');
            });
        };
    }
}
exports.initController = new InitController;
//# sourceMappingURL=init_controller.js.map