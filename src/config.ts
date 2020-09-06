import yargs from 'yargs';

yargs.command('init', 'Init a node project with ts config', {
    name: {
        alias: 'n',
        desc: 'Set project name',
        default: 'project'
    }
}).help().argv;

export default yargs;