import fs from 'fs'
import {tsconfig} from '../tools/tsconfig';
import {packageConfig} from '../tools/package';
import {indexData} from '../tools/index';
import { indexControllerData } from '../tools/user_controller';
import { indexRoutesData } from '../tools/user_routes';
import { userModelData } from '../tools/user_model';
import { appData } from '../tools/app';
import { databaseData } from '../tools/database';

class InitController {

    public init = async(name:string):Promise<void> => {

        console.log(`Initializing ${name}`);

        this.createFile('./data/tsconfig.json', JSON.stringify(tsconfig, null, 4));
        
        packageConfig.name = name;
        
        this.createFile('./data/package.json', JSON.stringify(packageConfig, null, 4));

        fs.mkdir('./data/src/', { recursive: true }, (err) => {
            if (err) throw err;
            this.createFile('./data/src/index.ts', indexData);
            this.createFile('./data/src/app.ts', appData);
            this.createFile('./data/src/database.ts', databaseData);
        });

        fs.mkdir('./data/src/controllers/', { recursive: true }, (err) => {
            if (err) throw err;
            this.createFile('./data/src/controllers/user_controller.ts', indexControllerData);
        });

        fs.mkdir('./data/src/routes/', { recursive: true }, (err) => {
            if (err) throw err;
            this.createFile('./data/src/routes/user_routes.ts', indexRoutesData);
        });

        fs.mkdir('./data/src/models/', { recursive: true }, (err) => {
            if (err) throw err;
            this.createFile('./data/src/models/user_model.ts', userModelData);
        });

        console.log(`${name} Inicializated`);
    }
    
    private createFile = (path:string, data:string):void => {
        fs.writeFile(path, data, (err) => {
            if(err) throw new Error('Can\'t create tsconfig file');
        });
    }
}

export const initController = new InitController;