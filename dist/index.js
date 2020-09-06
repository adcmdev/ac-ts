#!/usr/bin/env node
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
const config_1 = __importDefault(require("./config"));
const init_controller_1 = require("./controllers/init_controller");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const command = config_1.default.argv._[0];
    const name = config_1.default.argv.n + '' || 'project';
    switch (command) {
        case 'init':
            init_controller_1.initController.init(name);
            break;
        default:
            console.log('Command not found.');
            break;
    }
});
main();
//# sourceMappingURL=index.js.map