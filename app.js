'use strict';

class Fun {
    constructor() {
        self = this;
        self.canvas = document.getElementsByClassName('b_fun')[0];
        self.elms = [];
        self.random = 0;
    }
    init(number) {
        self.build(number);
        self.play();
    }
    build(number) {
        for (let i = 0; i < number; i++) {
            let elm = document.createElement('div');
            elm.className = 'b_fun__elm';
            elm.style.width = `${30/number}%`;
            elm.style.margin = `0 ${15/number}%`;
            self.elms.push(elm);
            self.canvas.appendChild(elm);
        }
    }
    play() {
       setInterval(self.iterate, 400);
    }
    iterate() {
        for (let i = 0, maxI = self.elms.length; i < maxI; i+= 30) {
            self.setRandomHeight(self.elms[i]);
            for (let z = 0; z < 30; z++) {
                self.elms[i+z].style.height = `${self.random*0.9}%`;
                self.elms[i+z].style.top = `${-self.random*0.45}%`;
            }
        }
    }
    setRandomHeight(elm) {
        self.random = Math.random() * 100;
        elm.style.height = `${self.random}%`;
        elm.style.top = `${-self.random/2}%`;
    }
}

var fun = new Fun();

fun.init(window.innerWidth/10);