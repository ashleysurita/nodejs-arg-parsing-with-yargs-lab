const chalk = require('chalk')
const yargs = require('yargs')

//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function(){
        console.log('Adding new note')
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing note')
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: function(){
        console.log('Listing all notes')
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a note')
    }
})

//
// Challenge: Add 2 new commands

// 1. Setup command to support "list" command (print placeholder message for now)
// 2. Setup command to support "read" command (print placeholder message for now)
// 3. Test your work by running both commands and ensure correct output


console.log(yargs.argv)