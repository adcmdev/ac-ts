#!/usr/bin/env node
import yargs from './config';
import {initController} from './controllers/init_controller';

const main = async () => {

    const command:string = yargs.argv._[0];

    const name:string = yargs.argv.n + '' || 'project';

    switch (command) {
        
        case 'init': initController.init(name); break;

        default: console.log('Command not found.'); break;
    }
};

main();

