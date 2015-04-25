var osc = require('node-osc');
var Cylon = require('cylon');
var moment = require('moment');

Cylon.robot({
    connections: {
        arduino: {
            adaptor: 'firmata',
            port: '/dev/tty.usbmodem1411'
        }
    },

    devices:{
        led1: { driver: 'led', pin: 9 },
        led2: { driver: 'led', pin: 10 },
        led3: { driver: 'led', pin: 11 },
        led4: { driver: 'led', pin: 12 },
        led5: { driver: 'led', pin: 13 }
    },

    work: function(my){
        var last = moment();
        var now;

        var server = new osc.Server(3333, '0.0.0.0');
        server.on('message', function(msg, info){
            now = moment();
            var interval = now.diff(last, 'milliseconds');
            last = now;

            if(interval > 150){
                console.log(msg[0]);
                switch (msg[0]){
                    case '/mrmr/pushbutton/0/iPhone':
                        my.led1.turnOn();
                        break;
                    case '/mrmr/pushbutton/1/iPhone':
                        my.led1.turnOff();
                        break;
                    case '/mrmr/pushbutton/2/iPhone':
                        my.led2.turnOn();
                        break;
                    case '/mrmr/pushbutton/3/iPhone':
                        my.led2.turnOff();
                        break;
                    case '/mrmr/pushbutton/4/iPhone':
                        my.led3.turnOn();
                        break;
                    case '/mrmr/pushbutton/5/iPhone':
                        my.led3.turnOff();
                        break;
                    case '/mrmr/pushbutton/6/iPhone':
                        my.led4.turnOn();
                        break;
                    case '/mrmr/pushbutton/7/iPhone':
                        my.led4.turnOff();
                        break;
                    case '/mrmr/pushbutton/8/iPhone':
                        my.led5.turnOn();
                        break;
                    case '/mrmr/pushbutton/9/iPhone':
                        my.led5.turnOff();
                        break;
                }
            }

        });
    }
}).start();