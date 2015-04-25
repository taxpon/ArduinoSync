var osc = require('node-osc');
var readline = require('readline');

var Client = function(){
};

Client.prototype.run = function(){
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    var client = new osc.Client('127.0.0.1', 3333);

    rl.on('line', function(line){
        console.log('You just typed:' + line);
        client.send(line);
    });
};

(new Client()).run();

//var client = new osc.Client('127.0.0.1', 3333);
//client.send('Test message', 200);