#!/usr/bin/env node
import yargs from './config';
import {initController} from './controllers/init_controller';

const main = async () => {

    const command:string = yargs.argv._[0];
    const ws:string = yargs.argv._[1];

    const name:string = yargs.argv.n + '' || yargs.argv.name + '' || 'project';

    switch (command) {
        
        case 'init':
            if(ws) initController.init(name, true);
            else initController.init(name, false);
        break;

        default: console.log('Command not found.'); break;
    }
};

main();

