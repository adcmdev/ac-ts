import fs from 'fs'
import {tsconfig} from '../tools/tsconfig';
import {packageConfig} from '../tools/package';
import {indexData} from '../tools/index';
import { userControllerData } from '../tools/src/user_controller';
import { userRoutesData } from '../tools/src/user_routes';
import { userModelData } from '../tools/src/user_model';
import { appData } from '../tools/app';
import { databaseData } from '../tools/database';
import { exec } from 'child_process';
import { htmlViewData } from '../tools/public/index-html';
import { logicWsData } from '../tools/public/logic/socket-chat';
import { socketRoutesData } from '../tools/src/socket_routes';
import { socketModelData } from '../tools/src/socket_model';
import { socketControllerData } from '../tools/src/socket_controller';

// const path:string = `data/`;
const path:string = ``;

class InitController {

    public init = async(name:string, ws:boolean):Promise<void> => {

        console.log(`Initializing ${name}`);

        this.createFile(`./${path}.env`, 'TOKEN_KEY=\'Your_token_key_here\'\nMONGO_URI=\'mongodb://localhost/test\'\n');
        this.createFile(`./${path}tsconfig.json`, JSON.stringify(tsconfig, null, 4));
        this.createFile(`./${path}.gitignore`, 'node_modules/');
        this.createFile(`./${path}package.json`, JSON.stringify(packageConfig(name, ws), null, 4));

        fs.mkdir(`./${path}src/`, { recursive: true }, (err) => {
            if (err) throw err;
            this.createFile(`./${path}src/index.ts`, indexData(ws));
            this.createFile(`./${path}src/app.ts`, appData(ws));
            this.createFile(`./${path}src/database.ts`, databaseData);
        });

        fs.mkdir(`./${path}src/controllers/`, { recursive: true }, (err) => {
            if (err) throw err;
            this.createFile(`./${path}src/controllers/user_controller.ts`, userControllerData);
            if(ws) this.createFile(`./${path}src/controllers/socket_controller.ts`, socketControllerData);
        });

        fs.mkdir(`./${path}src/routes/`, { recursive: true }, (err) => {
            if (err) throw err;
            this.createFile(`./${path}src/routes/user_routes.ts`, userRoutesData);
            if(ws) this.createFile(`./${path}src/routes/socket_routes.ts`, socketRoutesData);
        });

        fs.mkdir(`./${path}src/models/`, { recursive: true }, (err) => {
            if (err) throw err;
            this.createFile(`./${path}src/models/user_model.ts`, userModelData);
            if(ws) this.createFile(`./${path}src/models/socket_model.ts`, socketModelData);
        });

        if(ws) {
            fs.mkdir(`./${path}public/`, { recursive: true }, (err) => {
                if (err) throw err;
                this.createFile(`./${path}public/index.html`, htmlViewData);
            }); 
            fs.mkdir(`./${path}public/logic/`, { recursive: true }, (err) => {
                if (err) throw err;
                this.createFile(`./${path}public/logic/socket.js`, logicWsData);
            }); 
        }

        console.log('Downloading packages...');

        exec('npm i', (error, stdout, stderr) => {
            if(error) console.log(error);
            console.log(stdout);
            console.log(stderr);
            console.log('Compiling typescript...');
            exec('tsc', (error) => {
                if(error) console.log(error);
                console.log(`${name} Inicializated`);
            });
        });
    }
    
    private createFile = (path:string, data:string):void => {
        fs.writeFile(path, data, (err) => {
            if(err) throw new Error(`Can\`t create tsconfig file`);
        });
    }
}

export const initController = new InitController;