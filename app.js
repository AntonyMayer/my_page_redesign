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
        // setInterval(self.iterate, 400);
        self.iterate();
    }
    iterate() {
        let i = 0;

        while (i < self.elms.length) {
            let random = Math.round(Math.random() * 10 + 15),
                mid = Math.round(random / 2);
            if (i + mid >= self.elms.length) mid = Math.round((self.elms.length - i)/2);
            self.setRandomHeight(self.elms[i + mid]);
            self.syncHeight(i, random, mid);
            i += random;
        }
    }
    setRandomHeight(elm) {
        self.random = Math.round(Math.random() * 100);
        elm.style.height = `${self.random}%`;
        elm.style.top = `${-self.random/2}%`;
    }
    syncHeight(i, random, mid) {
        console.log('=====')
        console.log(i)
        console.log(random)
        console.log(mid)
        for (let z = 0; z < random; z++) {
            if (i + z < self.elms.length) {
                if (z < mid) {
                    self.elms[i + z].style.height = `${self.random*((z + 1)/mid)}%`; //TODO: use Math.pow(z, 2)
                    self.elms[i + z].style.top = `${-self.random/2*((z + 1)/mid)}%`;
                } else {
                    self.elms[i + z].style.height = `${self.random*(())}%`;
                    self.elms[i + z].style.top = `${-self.random/2}%`;
                }
            }
        }
    }
}

var fun = new Fun();

fun.init(window.innerWidth / 10);