const gpio = require('rpi-gpio');

class Led {
    constructor(ch, cl) {
        this.ch = ch;
        gpio.setup(ch, gpio.DIR_OUT, (err) => {
          if (err) throw err;
        });
    }

    on() {
        gpio.write(this.ch, true);
        gpio.status = true;
    }

    off(){
      gpio.write(this.ch, false);
      this.status = false;
    }

    write(x){
      gpio.write(this.ch, x);
      this.status = x;
    }

    toggle(){
      this.write(!this.status);
    }



}
 module.exports = Led;
