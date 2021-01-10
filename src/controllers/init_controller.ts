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
import { socketRoutesData } from '../tools/src/modules/socket_routes';
import { socketModelData } from '../tools/src/modules/socket_model';
import { socketControllerData } from '../tools/src/modules/socket_controller';

// const path: string = `data/`;
const path: string = ``;

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
        });

        fs.mkdir(`./${path}src/database/`, { recursive: true }, (err) => {
            if (err) throw err;
            this.createFile(`./${path}src/database.ts`, databaseData);
        });

        fs.mkdir(`./${path}src/middlewares/`, { recursive: true }, (err) => {
            if (err) throw err;
            this.createFile(`./${path}src/auth.ts`, databaseData);
        });

        fs.mkdir(`./${path}src/modules/user/`, { recursive: true }, (err) => {
            if (err) throw err;
            this.createFile(`./${path}src/modules/user/user_controller.ts`, userControllerData);
            this.createFile(`./${path}src/modules/user/user_routes.ts`, userRoutesData);
            this.createFile(`./${path}src/modules/user/user_model.ts`, userModelData);
        });

        if(ws) {

            fs.mkdir(`./${path}src/modules/socket/`, { recursive: true }, (err) => {
                if (err) throw err;
                this.createFile(`./${path}src/modules/socket/socket_controller.ts`, socketControllerData);
                this.createFile(`./${path}src/modules/socket/socket_routes.ts`, socketRoutesData);
                this.createFile(`./${path}src/modules/socket/socket_model.ts`, socketModelData);
            });

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
            console.log(`${name} Inicializated`);
            // console.log('Compiling typescript...');
            // exec('tsc', (error) => {
            //     if(error) console.log(error);
            //     console.log(`${name} Inicializated`);
            // });
        });
    }
    
    private createFile = (path:string, data:string):void => {
        fs.writeFile(path, data, (err) => {
            if(err) throw err;
        });
    }
}

export const initController = new InitController;
