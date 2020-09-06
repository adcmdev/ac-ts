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

// const path:string = `data/`;
const path:string = ``;

class InitController {

    public init = async(name:string):Promise<void> => {

        console.log(`Initializing ${name}`);

        this.createFile(`./${path}tsconfig.json`, JSON.stringify(tsconfig, null, 4));
        
        packageConfig.name = name;
        
        this.createFile(`./${path}package.json`, JSON.stringify(packageConfig, null, 4));

        fs.mkdir(`./${path}src/`, { recursive: true }, (err) => {
            if (err) throw err;
            this.createFile(`./${path}src/index.ts`, indexData);
            this.createFile(`./${path}src/app.ts`, appData);
            this.createFile(`./${path}src/database.ts`, databaseData);
        });

        fs.mkdir(`./${path}src/controllers/`, { recursive: true }, (err) => {
            if (err) throw err;
            this.createFile(`./${path}src/controllers/user_controller.ts`, userControllerData);
        });

        fs.mkdir(`./${path}src/routes/`, { recursive: true }, (err) => {
            if (err) throw err;
            this.createFile(`./${path}src/routes/user_routes.ts`, userRoutesData);
        });

        fs.mkdir(`./${path}src/models/`, { recursive: true }, (err) => {
            if (err) throw err;
            this.createFile(`./${path}src/models/user_model.ts`, userModelData);
        });

        console.log('Downloading packages...');

        exec('npm i', (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            console.log(`${name} Inicializated`);
        });
    }
    
    private createFile = (path:string, data:string):void => {
        fs.writeFile(path, data, (err) => {
            if(err) throw new Error(`Can\`t create tsconfig file`);
        });
    }
}

export const initController = new InitController;