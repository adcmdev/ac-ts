import fs from 'fs'
import {tsconfig} from '../tools/tsconfig';
import {packageConfig} from '../tools/package';
import {indexData} from '../tools/index';
import { userControllerData } from '../tools/src/user_controller';
import { indexRoutesData } from '../tools/src/user_routes';
import { userModelData } from '../tools/src/user_model';
import { appData } from '../tools/app';
import { databaseData } from '../tools/database';

class InitController {

    public init = async(name:string):Promise<void> => {

        console.log(`Initializing ${name}`);

        this.createFile('./tsconfig.json', JSON.stringify(tsconfig, null, 4));
        
        packageConfig.name = name;
        
        this.createFile('./package.json', JSON.stringify(packageConfig, null, 4));

        fs.mkdir('./src/', { recursive: true }, (err) => {
            if (err) throw err;
            this.createFile('./src/index.ts', indexData);
            this.createFile('./src/app.ts', appData);
            this.createFile('./src/database.ts', databaseData);
        });

        fs.mkdir('./src/controllers/', { recursive: true }, (err) => {
            if (err) throw err;
            this.createFile('./src/controllers/user_controller.ts', userControllerData);
        });

        fs.mkdir('./src/routes/', { recursive: true }, (err) => {
            if (err) throw err;
            this.createFile('./src/routes/user_routes.ts', indexRoutesData);
        });

        fs.mkdir('./src/models/', { recursive: true }, (err) => {
            if (err) throw err;
            this.createFile('./src/models/user_model.ts', userModelData);
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