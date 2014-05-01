var shell = require('shelljs-nodecli/node_modules/shelljs');
var cli = require('shelljs-nodecli');
shell.mkdir('-p', 'compiled');
cli.exec('coffee', '-o compiled/', '-c lib');
