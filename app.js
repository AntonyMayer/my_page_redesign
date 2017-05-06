'use strict';

class Fun {
    constructor() {
        self = this;
        self.canvas = document.getElementsByClassName('b_fun')[0];
        self.elms = [];
    }
    init(number) {
        self.build(number);
        self.play();
    }
    build(number) {
        for (let i = 0; i < number; i++) {
            let elm = document.createElement('div');
            elm.className = 'b_fun__elm';
            elm.style.width = `${50/number}%`;
            elm.style.margin = `0 ${25/number}%`;
            self.elms.push(elm);
            self.canvas.appendChild(elm);
        }
    }
    play() {
       setInterval(self.iterate, 400);
    }
    iterate() {
        for (var i = 0, maxI = self.elms.length; i < maxI; i++) {
            self.setRandomHeight(self.elms[i]);
        }
    }
    setRandomHeight(elm) {
        let random = Math.random() * 100;
        elm.style.height = `${random}%`;
        elm.style.top = `${-random/2}%`;
    }
}

var fun = new Fun();

fun.init(window.innerWidth/5);