"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
yargs_1.default.command('init', 'Init a node project with ts config', {
    name: {
        alias: 'i',
        desc: 'Set project name',
        default: 'project'
    }
}).help().argv;
exports.default = yargs_1.default;
//# sourceMappingURL=config.js.map