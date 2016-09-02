#!/usr/bin/env node
console.log('testing cli commands', process.argv);

//This is to read the inputs given when the process is running without exit
/*process.stdin.on('data', function () {
    console.log(arguments[0].toString());
});*/

process.exit();
