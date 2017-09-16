const gpio = require('rpi-gpio');
const EventEmitter = require('events');


class Led extends EventEmitter {
    constructor(ch, cl) {
        this.ch = ch;
        this.ready = false;
        gpio.setup(ch, gpio.DIR_OUT, (err) => {
            if (err) throw err;
            this.ready = true;
            this.emit('ready');
        });
    }

    turnOn() {
        if (!this.ready) return;
        gpio.write(this.ch, true);
        gpio.status = true;
    }

    turnOff() {
        if (!this.ready) return;
        gpio.write(this.ch, false);
        this.status = false;
    }

    write(x) {
        if (!this.ready) return;
        gpio.write(this.ch, x);
        this.status = x;
    }

    toggle() {
        if (!this.ready) return;
        this.write(!this.status);
    }



}
module.exports = Led;
