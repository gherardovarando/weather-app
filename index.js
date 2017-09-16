const Weather = require('node-weather');
const Led = require('./led.js');

let weather = new Weather({
  key: ''
});

let gw = new Led(18);
let bw = new Led(23);
weather.now('madrid', (info) => {
    console.log(info.main);
    if (info.main = 'Clear') {
        gw.on();
        bw.off();
    } else {
        gw.off();
        bw.on();
    }
});
