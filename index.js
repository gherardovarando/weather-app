const Weather = require('node-weather');
const Led = require('./led.js');

let weather = new Weather({
    key: ''
});

let gw = new Led(18);
let bw = new Led(23);


gw.on('ready', () => {
    weather.now('madrid', (info) => {
        console.log(info.main);
        if (info.main = 'Clear') {
            gw.turnOn();
            //bw.turnOff();
        } else {
            gw.turnOff();
            //bw.turnOn();
        }
    });
})
